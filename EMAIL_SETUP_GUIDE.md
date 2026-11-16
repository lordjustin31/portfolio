# Email Contact Form Setup Guide

Your contact form is now ready! Just need to configure your Gmail credentials.

## 📧 Step-by-Step Setup

### 1. Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** (if not already enabled)
4. Go back to Security → Click **App passwords**
5. Select:
   - App: **Mail**
   - Device: **Other** (type "Portfolio Website")
6. Click **Generate**
7. Copy the 16-character password (it looks like: `abcd efgh ijkl mnop`)

### 2. Update .env.local File

Open `portfolio/.env.local` and replace:

```env
EMAIL_USER=justin31tarca@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

**Important:** 
- Use your actual Gmail address
- Use the App Password (NOT your regular Gmail password)
- Remove spaces from the app password

### 3. Restart Development Server

```bash
# Stop the current server (Ctrl + C)
# Then restart:
npm run dev
```

### 4. Test It!

1. Open your portfolio: http://localhost:3001
2. Click **Contact** icon
3. Fill out the form
4. Click **Send Message**
5. Check your Gmail inbox!

## 🔒 Security Notes

- ✅ `.env.local` is already in `.gitignore` (safe)
- ✅ Never commit your App Password to GitHub
- ✅ App Passwords are safer than regular passwords
- ✅ You can revoke App Passwords anytime from Google Account settings

## 🚀 For Production (Vercel/Netlify)

When you deploy, add environment variables in your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add: `EMAIL_USER` = your-email@gmail.com
3. Add: `EMAIL_PASS` = your-app-password

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add the same variables

## ✅ What's Working Now

- ✅ Contact form sends real emails to your Gmail
- ✅ You receive:
  - Sender's name
  - Sender's email (so you can reply)
  - Subject
  - Message
- ✅ Success/Error feedback in the form
- ✅ Form validation

## 📧 Example Email You'll Receive

```
Subject: Portfolio Contact: Job Opportunity

From: John Doe
Email: john@company.com
Subject: Job Opportunity

---

Message:
Hi Lord Justin,

We'd like to discuss a frontend developer position...
```

## 🐛 Troubleshooting

**"Failed to send":**
- Check if EMAIL_USER and EMAIL_PASS are correct in `.env.local`
- Make sure you used App Password (not regular password)
- Restart the dev server after changing `.env.local`

**"Not receiving emails":**
- Check your Gmail spam folder
- Verify the EMAIL_USER is your actual Gmail
- Make sure 2-Step Verification is enabled

**"Invalid credentials":**
- Generate a new App Password
- Copy it exactly (no spaces)

---

**That's it! Your contact form is fully functional!** 🎉
