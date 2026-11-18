'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

export default function ContactApp() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${isMobile ? 'p-4' : 'p-6'}`}>
      <div className={isMobile ? 'mb-6' : 'mb-8'}>
        <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-2 ${
          isMobile ? 'text-xl' : 'text-2xl'
        }`}>Get In Touch</h2>
        <p className={`text-neutral-600 dark:text-neutral-300 ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
      </div>

      {/* Social Links */}
      <div className={`grid gap-4 mb-8 ${
        isMobile ? 'grid-cols-1' : 'grid-cols-3'
      }`}>
        <a
          href="mailto:justin31tarca@gmail.com"
          className={`border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-center ${
            isMobile ? 'p-5 flex items-center gap-4 text-left' : 'p-4'
          }`}
        >
          <Mail className={`text-neutral-600 dark:text-neutral-300 ${
            isMobile ? '' : 'mx-auto mb-2'
          }`} size={isMobile ? 28 : 24} />
          <div>
            <p className={`font-medium text-neutral-800 dark:text-neutral-100 ${
              isMobile ? 'text-base mb-1' : 'text-sm'
            }`}>Email</p>
            {isMobile && <p className="text-xs text-neutral-600 dark:text-neutral-400">justin31tarca@gmail.com</p>}
          </div>
        </a>
        <a
          href="https://github.com/lordjustin31"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-center ${
            isMobile ? 'p-5 flex items-center gap-4 text-left' : 'p-4'
          }`}
        >
          <svg width={isMobile ? 28 : 24} height={isMobile ? 28 : 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-neutral-600 dark:text-neutral-300 ${
            isMobile ? '' : 'mx-auto mb-2'
          }`}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <div>
            <p className={`font-medium text-neutral-800 dark:text-neutral-100 ${
              isMobile ? 'text-base mb-1' : 'text-sm'
            }`}>GitHub</p>
            {isMobile && <p className="text-xs text-neutral-600 dark:text-neutral-400">github.com/lordjustin31</p>}
          </div>
        </a>
        <a
          href="tel:09126039520"
          className={`border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-center ${
            isMobile ? 'p-5 flex items-center gap-4 text-left' : 'p-4'
          }`}
        >
          <svg width={isMobile ? 28 : 24} height={isMobile ? 28 : 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-neutral-600 dark:text-neutral-300 ${
            isMobile ? '' : 'mx-auto mb-2'
          }`}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div>
            <p className={`font-medium text-neutral-800 dark:text-neutral-100 ${
              isMobile ? 'text-base mb-1' : 'text-sm'
            }`}>Phone</p>
            {isMobile && <p className="text-xs text-neutral-600 dark:text-neutral-400">09126039520</p>}
          </div>
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 ${
            isMobile ? 'text-sm' : 'text-sm'
          }`}>
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className={`w-full border border-neutral-300 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent dark:bg-neutral-900 dark:text-neutral-100 ${
              isMobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'
            }`}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className={`block font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 ${
            isMobile ? 'text-sm' : 'text-sm'
          }`}>
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className={`w-full border border-neutral-300 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent dark:bg-neutral-900 dark:text-neutral-100 ${
              isMobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'
            }`}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className={`block font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 ${
            isMobile ? 'text-sm' : 'text-sm'
          }`}>
            Subject
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className={`w-full border border-neutral-300 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent dark:bg-neutral-900 dark:text-neutral-100 ${
              isMobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'
            }`}
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label className={`block font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 ${
            isMobile ? 'text-sm' : 'text-sm'
          }`}>
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={isMobile ? 8 : 6}
            className={`w-full border border-neutral-300 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-400 focus:border-transparent dark:bg-neutral-900 dark:text-neutral-100 resize-none ${
              isMobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'
            }`}
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full bg-neutral-800 dark:bg-neutral-700 text-white rounded hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
            isMobile ? 'px-6 py-4 text-base min-h-[52px]' : 'px-6 py-3 text-sm'
          }`}
        >
          {status === 'sending' && <div className="animate-spin w-4 h-4 border-2 border-white dark:border-white border-t-transparent dark:border-t-transparent rounded-full" />}
          {status === 'sent' && '✓'}
          {status === 'error' && '✗'}
          {status === 'idle' && <Send size={16} />}
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Failed. Try Again' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
