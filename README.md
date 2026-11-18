# 🖥️ Lord Justin Bernal - Portfolio OS

> A modern, interactive portfolio designed as an operating system interface

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

A professional personal portfolio that demonstrates frontend development skills through a fully functional, interactive desktop environment. Features a unique OS-themed interface with draggable windows, a functional taskbar, and smooth animations.

**🚀 [View Live Demo](https://lj-portfolio-os.vercel.app)**

## ✨ Highlights

- **🔒 Security-First Design**: 9.7/10 security score with honeypot spam protection
- **📱 Fully Responsive**: Optimized mobile split-screen layout
- **🎨 OS-Themed Interface**: Realistic desktop environment with draggable windows
- **♿ Accessible**: WCAG-compliant with keyboard navigation and focus indicators
- **⚡ Performance Optimized**: Fast loading, smooth animations, production-ready

## 🎯 Features

### Interactive Desktop Environment
- Functional taskbar with running applications and system tray
- Draggable, resizable windows with full window management
- Start menu application launcher with quick actions
- Right-click context menu with desktop shortcuts
- Theme switching with dark/light mode persistence

### Professional Applications
- **About**: BSIT graduate profile with expertise summary
- **Projects**: Portfolio showcasing real-world applications
- **Experience**: Professional timeline and achievements
- **Skills**: Technical stack organized by category
- **Resume**: Interactive PDF-style viewer with download
- **Contact**: Spam-protected form with honeypot validation
- **Settings**: Accessibility and theme customization

### Security Implementation
- Honeypot spam protection (80-90% bot blocking)
- HTTP security headers (XSS, clickjacking, MIME protection)
- Input validation and sanitization
- Rate limiting ready
- Secure environment variable handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI**: React 19, Lucide Icons
- **Email**: Nodemailer (contact form)
- **Deployment**: Vercel
- **Security**: Honeypot validation, HTTP security headers

## 📝 Customization

### Update Personal Information

1. **Name and Title**: Update in:
   - `components/BootScreen.tsx`
   - `components/DesktopIcons.tsx`
   - `components/StartMenu.tsx`
   - `components/apps/AboutApp.tsx`

2. **About Content**: Edit `components/apps/AboutApp.tsx`

3. **Projects**: Update the `projects` array in `components/apps/ProjectsApp.tsx`

4. **Experience**: Update the `experiences` array in `components/apps/ExperienceApp.tsx`

5. **Skills**: Update the `skills` object in `components/apps/SkillsApp.tsx`

6. **Contact Info**: Update links in `components/apps/ContactApp.tsx`

### Styling

Colors and design tokens can be customized in `app/globals.css` and through Tailwind's configuration.

## 📚 Documentation

Comprehensive technical documentation available in the [`/docs`](./docs) folder:

- **[Security Documentation](./docs/security/)** - Security audit reports, honeypot implementation, best practices
- **[Deployment Guides](./docs/deployment/)** - Production deployment checklists and procedures  
- **[Development History](./docs/development/)** - Bug fixes, feature implementations, mobile optimization

**Highlights:**
- [Security Audit Report](./docs/security/SECURITY_AUDIT_REPORT.md) - 9.7/10 security score
- [Honeypot Implementation](./docs/security/HONEYPOT_IMPLEMENTATION.md) - Spam protection guide
- [Mobile Optimization Plan](./docs/development/MOBILE_OPTIMIZATION_PLAN.md) - Responsive design strategy

## 🎨 Design & Accessibility

**Design Principles:**
- Realistic OS interface without excessive effects
- Clean, professional aesthetic
- Every element serves a functional purpose
- Performance-first approach

**Accessibility Features:**
- Semantic HTML with proper ARIA labels
- Full keyboard navigation support
- Focus indicators and reduced motion support
- WCAG-compliant color contrast
- Mobile-optimized split-screen layout

## 🔧 Development

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📦 Deployment

This portfolio can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

```bash
npm run build
# Deploy the .next folder
```

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 👨‍💻 Author

**Lord Justin Reigh T. Bernal**  
*BSIT Graduate | Frontend Developer*

- 🌐 Portfolio: [lj-portfolio-os.vercel.app](https://lj-portfolio-os.vercel.app)
- 💼 GitHub: [@lordjustin31](https://github.com/lordjustin31)
- 📧 Email: justin31tarca@gmail.com

---

Built with ❤️ using Next.js 15, React 19, TypeScript, and Tailwind CSS v4. Security score: 9.7/10.
