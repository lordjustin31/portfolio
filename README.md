# 🖥️ Lord Justin Bernal - Portfolio OS

> A modern, interactive portfolio designed as an operating system interface

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

A professional personal portfolio that demonstrates frontend development skills through a fully functional, interactive desktop environment. Features a unique OS-themed interface with draggable windows, a functional taskbar, and smooth animations.

**🚀 [View Live Demo](https://lj-portfolio-os.vercel.app)**

## 🎯 Features

### OS-Style Interface
- **Boot Screen**: Quick initialization experience
- **Desktop Environment**: Clean workspace with application shortcuts
- **Taskbar**: Functional taskbar with running applications
- **Start Menu**: Application launcher with quick actions
- **Window System**: Draggable, resizable windows with minimize/maximize/close
- **Context Menu**: Right-click desktop menu
- **Settings**: Theme and accessibility preferences

### Applications
- **About**: Professional profile and introduction
- **Projects**: Portfolio of work with detailed case studies
- **Experience**: Professional timeline
- **Skills**: Technical expertise organized by category
- **Resume**: PDF-style resume viewer with download functionality
- **Achievements**: Awards and certifications
- **Contact**: Functional contact form with social links
- **Settings**: Customization options

### Professional Design
- Clean, minimal aesthetic
- Realistic UI controls
- Consistent design system
- No excessive effects or animations
- Production-ready quality
- Fully accessible

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

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Geist Sans

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

## 🎨 Design Philosophy

This portfolio follows strict design principles:

- **Realistic over decorative**: Every element serves a functional purpose
- **Clean and professional**: No excessive gradients, blur, or effects
- **Accessible**: Keyboard navigation, focus states, reduced motion support
- **Responsive**: Works on desktop and mobile devices
- **Performance-first**: Optimized for fast loading and smooth interactions

## 📱 Responsive Design

- **Desktop**: Full OS experience with draggable windows
- **Mobile**: Adapted interface with full-screen applications

## ♿ Accessibility

- Semantic HTML
- Keyboard navigation
- Focus indicators
- ARIA labels
- Reduced motion support
- Sufficient color contrast

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

**Lord Justin Bernal**
- Frontend Developer
- Portfolio: [lj-portfolio-os.vercel.app](https://lj-portfolio-os.vercel.app)
- GitHub: [@lordjustin31](https://github.com/lordjustin31)
- Email: justin31tarca@gmail.com

---

Built with ❤️ using Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
