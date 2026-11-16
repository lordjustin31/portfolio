'use client';

import { useState, useEffect } from 'react';
import { Briefcase, Code, Award, Download, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface DesktopWidgetsProps {
  onOpenWindow: (windowId: string) => void;
}

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Full-featured shopping platform',
    tech: 'React, Next.js, Stripe',
  },
  {
    name: 'Dashboard Analytics',
    description: 'Real-time business metrics',
    tech: 'React, TypeScript, Chart.js',
  },
  {
    name: 'Task Management App',
    description: 'Collaborative team tool',
    tech: 'React, Firebase, Material-UI',
  },
];

export default function DesktopWidgets({ onOpenWindow }: DesktopWidgetsProps) {
  const isMobile = useIsMobile();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [time, setTime] = useState('');

  // Don't render widgets on mobile at all (performance optimization)
  if (isMobile) {
    return null;
  }

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate featured project every 5 seconds
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="fixed top-4 right-4 w-80 space-y-3 z-20 pointer-events-none">
      {/* Stats Widget */}
      <div className="bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg p-4 pointer-events-auto">
        <div className="flex items-center gap-2 mb-3">
          <Award size={16} className="text-neutral-600" />
          <h3 className="text-sm font-semibold text-neutral-800">Quick Stats</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-neutral-800">3+</div>
            <div className="text-xs text-neutral-600">Years Exp</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-800">15+</div>
            <div className="text-xs text-neutral-600">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-800">100%</div>
            <div className="text-xs text-neutral-600">Satisfied</div>
          </div>
        </div>
      </div>

      {/* Featured Project Widget */}
      <div className="bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg p-4 pointer-events-auto">
        <div className="flex items-center gap-2 mb-3">
          <Briefcase size={16} className="text-neutral-600" />
          <h3 className="text-sm font-semibold text-neutral-800">Featured Project</h3>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-800 text-sm">{currentProject.name}</h4>
          <p className="text-xs text-neutral-600">{currentProject.description}</p>
          <div className="flex flex-wrap gap-1">
            {currentProject.tech.split(', ').map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded text-xs border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenWindow('projects');
            }}
            className="w-full mt-2 px-3 py-1.5 bg-neutral-800 text-white text-xs rounded hover:bg-neutral-700 transition-colors"
          >
            View All Projects
          </button>
        </div>
        {/* Progress indicator */}
        <div className="flex gap-1 mt-3 justify-center">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 rounded-full transition-colors ${
                index === currentProjectIndex ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions Widget */}
      <div className="bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg p-4 pointer-events-auto">
        <div className="flex items-center gap-2 mb-3">
          <Code size={16} className="text-neutral-600" />
          <h3 className="text-sm font-semibold text-neutral-800">Quick Actions</h3>
        </div>
        <div className="space-y-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOpenWindow('resume'); // Just open the resume window
            }}
            className="w-full flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors text-sm text-left"
          >
            <Download size={14} className="text-neutral-600" />
            <span className="text-neutral-800 font-medium">View Resume</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenWindow('contact');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors text-sm text-left"
          >
            <Mail size={14} className="text-neutral-600" />
            <span className="text-neutral-800 font-medium">Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
