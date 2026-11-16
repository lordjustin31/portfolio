# 🚀 Portfolio Deployment Guide

## Quick Start

```bash
# 1. Run pre-deployment check
npm run pre-deploy

# 2. Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: Portfolio website"

# 3. Push to GitHub
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main

# 4. Deploy to Vercel
# Visit: https://vercel.com/new
# Import your repo and add environment variables
```

---

## ⚠️ CRITICAL: Before Deployment

### Your Gmail App Password Was Exposed!

**Password exposed in chat**: `vjdktpidktmyphwx`

**You MUST do this first:**

1. Visit: https://myaccount.google.com/apppasswords
2. Delete the password: `vjdktpidktmyphwx`
3. Generate a NEW App Password
4. Update `.env.local`:
   ```
   EMAIL_PASS=your-new-password-here
   ```
5. When deploying, use the NEW password in Vercel

---

## 📋 Deployment Checklist

### Before Push to GitHub
- [ ] ⚠️ Gmail App Password reset (CRITICAL!)
- [ ] ✅ `.env.local` is in `.gitignore`
- [ ] ✅ Run `npm run pre-deploy` (all checks pass)
- [ ] ✅ Run `git status` (verify no .env.local)

### GitHub Setup
- [ ] Create new repository on GitHub
- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Add remote: `git remote add origin [URL]`
- [ ] Push: `git push -u origin main`

### Vercel Deployment
- [ ] Import GitHub repo on Vercel
- [ ] Add environment variables:
  - `EMAIL_USER` = justin31tarca@gmail.com
  - `EMAIL_PASS` = [NEW password]
- [ ] Deploy
- [ ] Test contact form in production

### Post-Deployment
- [ ] Update `proxy.ts` with production domain
- [ ] Test all features
- [ ] Verify security headers
- [ ] Test on mobile devices

---

## 🔐 Environment Variables

### Local Development (`.env.local`)
```bash
EMAIL_USER=justin31tarca@gmail.com
EMAIL_PASS=your-app-password-here
WATCHPACK_POLLING=true
CHOKIDAR_USEPOLLING=true
```

### Production (Vercel Dashboard)
```
EMAIL_USER = justin31tarca@gmail.com
EMAIL_PASS = [NEW APP PASSWORD]
```

**Important**: NEVER commit `.env.local` to git!

---

## 🎯 Verification Commands

```bash
# Check if .env.local is ignored
git check-ignore .env.local
# Should output: .env.local

# See what will be committed
git status

# Run pre-deployment check
npm run pre-deploy

# Test production build
npm run build
```

---

## 📁 Files Overview

### ✅ Will Be Committed
- Source code (app/, components/)
- Configuration (next.config.ts, proxy.ts)
- Documentation (*.md files)
- `.env.example` (template only)

### ❌ Protected by .gitignore
- `.env.local` (YOUR SECRETS)
- `node_modules/`
- `.next/`
- `.vercel/`

---

## 🔧 Available Scripts

```bash
npm run dev          # Development with webpack (network access)
npm run dev:turbo    # Development with Turbopack (localhost only)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run pre-deploy   # Pre-deployment security check
npm run audit        # Check for vulnerabilities
```

---

## 🌐 After Deployment

### Update CORS Origins

Edit `proxy.ts`:
```typescript
const allowedOrigins = [
  'https://your-domain.vercel.app',
  'https://yourdomain.com', // if custom domain
];
```

Then commit and push:
```bash
git add proxy.ts
git commit -m "Update CORS for production"
git push
```

---

## 🎨 Features

- ✅ OS-themed desktop interface
- ✅ Boot screen with skip option
- ✅ Lock screen with clock
- ✅ Draggable windows
- ✅ Contact form with email
- ✅ Rate limiting (3 req/min)
- ✅ Input sanitization
- ✅ Security headers
- ✅ Fully responsive

---

## 📞 Support Links

- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub New Repo](https://github.com/new)
- [Next.js Docs](https://nextjs.org/docs)

---

## 🚨 Common Issues

### Issue: .env.local is being committed
```bash
# Remove from git
git rm --cached .env.local

# Verify it's ignored
git check-ignore .env.local
```

### Issue: Build fails on Vercel
- Verify environment variables are set
- Check Vercel build logs
- Ensure all dependencies are in package.json

### Issue: Contact form doesn't work
- Verify EMAIL_USER and EMAIL_PASS are set in Vercel
- Check Gmail App Password is valid
- Test rate limiting (wait 1 minute between attempts)

---

## ✅ Security Features

- ✅ Rate limiting on API
- ✅ Input sanitization (XSS prevention)
- ✅ Input validation
- ✅ CORS protection
- ✅ Security headers (production)
- ✅ Method restrictions
- ✅ Generic error messages
- ✅ Environment variables protected

---

## 🎉 You're Ready!

After resetting your Gmail App Password:
1. ✅ Code is secure and production-ready
2. ✅ Build passes all checks
3. ✅ Documentation is complete
4. 🚀 Ready to deploy!

**Next Step**: Reset Gmail password → Run `npm run pre-deploy` → Push to GitHub → Deploy to Vercel

Good luck! 🚀
