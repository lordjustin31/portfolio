# 🚀 Deployment Checklist - Portfolio

**Status**: ⚠️ **CRITICAL ACTION REQUIRED BEFORE DEPLOYMENT**

---

## 🚨 **URGENT: SECURITY ISSUE**

### ❌ **Your Gmail App Password is EXPOSED!**

Your email credentials were visible in this chat session:
- Email: `justin31tarca@gmail.com`
- App Password: `vjdktpidktmyphwx`

**⚠️ IMMEDIATE ACTION REQUIRED:**

1. **Revoke the exposed App Password NOW:**
   - Go to: https://myaccount.google.com/apppasswords
   - Delete the App Password: `vjdktpidktmyphwx`

2. **Generate a NEW App Password:**
   - Create a new App Password for "Mail"
   - Update your `.env.local` with the NEW password
   - **NEVER share this password again**

3. **After Revoking:**
   ```bash
   # Update .env.local with new password
   EMAIL_USER=justin31tarca@gmail.com
   EMAIL_PASS=your-new-app-password-here
   ```

---

## ✅ **Pre-Deployment Checklist**

### 1. Security ✅
- ✅ `.env.local` is in `.gitignore`
- ✅ `.env.example` provided (safe template)
- ✅ No hardcoded secrets in code
- ✅ Rate limiting implemented (3 req/min)
- ✅ Input sanitization (XSS prevention)
- ✅ Input validation (email, length)
- ✅ Security headers (production only)
- ✅ CORS protection
- ⚠️ **Email password needs to be regenerated**

### 2. Build & Type Check ✅
- ✅ Production build successful
- ✅ TypeScript check passed
- ✅ No build errors
- ✅ All routes compile properly

### 3. Code Quality ✅
- ✅ ESLint configuration present
- ✅ No critical linting errors
- ✅ TypeScript strict mode enabled

### 4. Configuration ✅
- ✅ `next.config.ts` valid
- ✅ `proxy.ts` (renamed from middleware.ts)
- ✅ Proper dev/prod environment handling

### 5. Dependencies ⚠️
- ⚠️ Next.js 16.4.6 (latest - good!)
- ⚠️ Nodemailer 10.0.13 (should update to 10.1.4+)
- ✅ React 19.2.8 (latest)
- ✅ No critical vulnerabilities in production deps

---

## 📝 **Steps to Deploy**

### Option A: Deploy to Vercel (Recommended)

#### Step 1: Initialize Git (if not done)
```bash
cd "C:\Users\Lord Justin\Desktop\portfolio ni lj\portfolio"
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

#### Step 2: Push to GitHub
```bash
# Create a new repo on GitHub first, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Vercel
1. Go to: https://vercel.com/new
2. Import your GitHub repository
3. Configure Environment Variables:
   - Click "Environment Variables"
   - Add:
     ```
     EMAIL_USER = justin31tarca@gmail.com
     EMAIL_PASS = your-NEW-app-password-here
     ```
4. Click "Deploy"

### Option B: Manual Vercel Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables
vercel env add EMAIL_USER
# Enter: justin31tarca@gmail.com

vercel env add EMAIL_PASS
# Enter: your-NEW-app-password-here

# Deploy to production
vercel --prod
```

---

## ⚙️ **Post-Deployment Configuration**

### 1. Update CORS Origins
After deploying, update `proxy.ts`:
```typescript
const allowedOrigins = [
  'https://your-domain.vercel.app',
  'https://yourdomain.com', // if you have custom domain
];
```

Then redeploy:
```bash
git add proxy.ts
git commit -m "Update CORS origins for production"
git push
```

### 2. Test Production Features
- ✅ Test contact form
- ✅ Verify rate limiting works
- ✅ Check email delivery
- ✅ Test on mobile devices
- ✅ Verify security headers: https://securityheaders.com/

### 3. Optional: Custom Domain
If you have a custom domain:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update CORS origins in `proxy.ts`

---

## 🔒 **Environment Variables Needed**

### Vercel Dashboard:
```
EMAIL_USER = justin31tarca@gmail.com
EMAIL_PASS = [YOUR-NEW-APP-PASSWORD]
```

**Important:**
- ✅ Set these in Vercel Dashboard, NOT in code
- ✅ These are automatically encrypted by Vercel
- ✅ Never commit `.env.local` to GitHub

---

## 🚫 **What NOT to Commit**

These files are already in `.gitignore`:
- ❌ `.env.local` (contains secrets)
- ❌ `.env` (any env files)
- ❌ `node_modules/` (too large)
- ❌ `.next/` (build artifacts)
- ❌ `.vercel/` (deployment config)

---

## ✅ **Files Safe to Commit**

These are safe and SHOULD be committed:
- ✅ `.env.example` (template only, no secrets)
- ✅ All source code (app/, components/)
- ✅ Configuration files (next.config.ts, proxy.ts)
- ✅ Documentation (README.md, SECURITY.md)
- ✅ `.gitignore`
- ✅ `package.json` & `package-lock.json`

---

## 🎯 **Final Security Verification**

Before pushing to GitHub, run:

```bash
# 1. Verify .env.local is ignored
git check-ignore .env.local
# Should output: .env.local

# 2. Check what will be committed
git status

# 3. Verify no secrets in staged files
git diff --staged | Select-String -Pattern "vjdktpidktmyphwx"
# Should return nothing

# 4. Double-check .env files
git ls-files | Select-String -Pattern "\.env"
# Should only show .env.example
```

---

## 📊 **Deployment Readiness Score**

| Category | Status | Score |
|----------|--------|-------|
| Code Quality | ✅ Ready | 10/10 |
| Build Status | ✅ Success | 10/10 |
| Security (Code) | ✅ Ready | 10/10 |
| Security (Credentials) | ⚠️ **ACTION NEEDED** | 0/10 |
| Configuration | ✅ Ready | 10/10 |
| Dependencies | ✅ Good | 9/10 |
| Documentation | ✅ Complete | 10/10 |

**Overall**: ⚠️ **59/70 (84%)** - MUST revoke exposed password first!

---

## 🚨 **BEFORE YOU DEPLOY - CRITICAL STEPS**

1. ⚠️ **REVOKE OLD APP PASSWORD** (exposed in chat)
2. ⚠️ **GENERATE NEW APP PASSWORD**
3. ⚠️ **UPDATE `.env.local` WITH NEW PASSWORD**
4. ✅ Verify `.env.local` is NOT staged: `git status`
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel with NEW password as env var
7. ✅ Test contact form in production

---

## 📞 **Support Resources**

- Vercel Deployment: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Gmail App Passwords: https://myaccount.google.com/apppasswords
- Security Headers Test: https://securityheaders.com/

---

**Created**: October 6, 2026  
**Last Updated**: Pre-deployment  
**Status**: ⚠️ **REVOKE PASSWORD FIRST, THEN DEPLOY**
