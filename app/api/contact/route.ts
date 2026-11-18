import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactRateLimiter } from '@/lib/rate-limiter';
import { sanitizeInput, validateEmail, validateContactForm } from '@/lib/validation';
import { getClientIP, getErrorMessage } from '@/lib/utils';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants';
import type { ContactFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIP(request.headers);

    // Check rate limit
    if (!contactRateLimiter.check(ip)) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: ERROR_MESSAGES.RATE_LIMIT },
        { status: 429 }
      );
    }

    const body = await request.json() as ContactFormData;
    const { name, email, subject, message, website } = body;

    // HONEYPOT CHECK: If website field is filled, it's a bot!
    if (website && website.trim() !== '') {
      if (process.env.NODE_ENV === 'development') {
        console.log('🍯 Honeypot caught a bot! IP:', ip, 'Website field:', website);
      }
      // Return success to fool the bot, but don't send email
      return NextResponse.json<ApiResponse>(
        { success: true, message: SUCCESS_MESSAGES.CONTACT_SENT },
        { status: 200 }
      );
    }

    // Validate form data
    const validation = validateContactForm({ name, email, message });
    if (!validation.isValid) {
      return NextResponse.json<ApiResponse>(
        { 
          success: false, 
          error: ERROR_MESSAGES.VALIDATION,
          data: validation.errors 
        },
        { status: 400 }
      );
    }

    // Validate subject field
    if (!subject || subject.trim().length === 0) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Subject is required' },
        { status: 400 }
      );
    }

    if (subject.length > 200) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Subject must be less than 200 characters' },
        { status: 400 }
      );
    }

    // Check for env variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Email credentials not configured');
      }
      return NextResponse.json<ApiResponse>(
        { success: false, error: ERROR_MESSAGES.SERVER },
        { status: 500 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email, // Allow replying directly to sender
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>IP:</strong> ${ip}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json<ApiResponse>(
      { success: true, message: SUCCESS_MESSAGES.CONTACT_SENT },
      { status: 200 }
    );
  } catch (error) {
    // Don't expose internal error details
    if (process.env.NODE_ENV === 'development') {
      console.error('Email error:', error);
    }
    return NextResponse.json<ApiResponse>(
      { success: false, error: ERROR_MESSAGES.SERVER },
      { status: 500 }
    );
  }
}

// Reject non-POST requests
export async function GET() {
  return NextResponse.json<ApiResponse>(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}
