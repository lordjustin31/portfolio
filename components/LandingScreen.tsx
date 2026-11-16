'use client';

import { ArrowRight } from 'lucide-react';

interface LandingScreenProps {
  onEnter: () => void;
}

export default function LandingScreen({ onEnter }: LandingScreenProps) {
  return (
    <div className="fixed inset-0 bg-neutral-100 flex items-center justify-center overflow-hidden animate-fade-in">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Profile/Avatar */}
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-3xl font-bold text-white">LJ</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-4 tracking-tight">
          Lord Justin Bernal
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-neutral-600 mb-2">
          Frontend Developer
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-neutral-500 mb-12 max-w-xl mx-auto">
          Building modern, accessible, and performant web experiences
        </p>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl"
        >
          <span className="text-base font-medium">Enter Workspace</span>
          <ArrowRight 
            size={20} 
            className="transition-transform group-hover:translate-x-1" 
          />
        </button>

        {/* Quick Links */}
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-neutral-500">
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
          
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
          
          <a 
            href="mailto:lordjustinbernal@example.com"
            className="hover:text-neutral-900 transition-colors flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Email
          </a>
        </div>

        {/* Hint */}
        <p className="mt-16 text-xs text-neutral-400">
          or press <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded text-neutral-600 font-mono">Enter</kbd> to continue
        </p>
      </div>
    </div>
  );
}
