'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

interface DesktopHeroProps {
  onOpenWindow: (windowId: string) => void;
}

export default function DesktopHero({ onOpenWindow }: DesktopHeroProps) {
  const [yearsExp, setYearsExp] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  useEffect(() => {
    // Animated counters
    const animateCounter = (target: number, setter: (val: number) => void, duration: number = 1500) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    setTimeout(() => animateCounter(3, setYearsExp), 300);
    setTimeout(() => animateCounter(15, setProjectsCount), 500);
    setTimeout(() => animateCounter(100, setSatisfactionRate), 700);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center space-y-8 pointer-events-auto">
        {/* Main Name & Title */}
        <div className="space-y-3">
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 tracking-tight">
            Lord Justin Bernal
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-600 font-light">
            Frontend Developer
          </p>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
            Building modern, accessible, and performant web experiences
            <br />
            with React, Next.js, and TypeScript
          </p>
        </div>

        {/* Animated Stats */}
        <div className="flex items-center justify-center gap-12 py-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-800 mb-1">
              {yearsExp}+
            </div>
            <div className="text-sm text-neutral-600">Years Experience</div>
          </div>
          
          <div className="w-px h-12 bg-neutral-300" />
          
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-800 mb-1">
              {projectsCount}+
            </div>
            <div className="text-sm text-neutral-600">Projects Delivered</div>
          </div>
          
          <div className="w-px h-12 bg-neutral-300" />
          
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-800 mb-1">
              {satisfactionRate}%
            </div>
            <div className="text-sm text-neutral-600">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onOpenWindow('projects')}
            className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="font-medium">View My Work</span>
            <ArrowRight 
              size={18} 
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          
          <button
            onClick={() => onOpenWindow('contact')}
            className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-800 text-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-all"
          >
            <Mail size={18} />
            <span className="font-medium">Get In Touch</span>
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 border border-neutral-400 text-neutral-700 rounded-lg hover:border-neutral-800 hover:text-neutral-900 transition-all">
            <Download size={18} />
            <span className="font-medium">Resume</span>
          </button>
        </div>

        {/* Availability Badge */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <div className="relative flex items-center">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span className="text-neutral-600">
            Available for new opportunities
          </span>
        </div>
      </div>
    </div>
  );
}
