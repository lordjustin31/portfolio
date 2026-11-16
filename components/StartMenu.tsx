'use client';

import { User, FolderOpen, Briefcase, Code, FileText, Award, Mail, Settings, Download } from 'lucide-react';

interface StartMenuProps {
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

const applications = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function StartMenu({ onClose, onOpenWindow }: StartMenuProps) {
  return (
    <div
      className="fixed bottom-14 left-2 w-96 bg-neutral-800 border border-neutral-700 rounded-lg shadow-2xl overflow-hidden z-40"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Profile Section */}
      <div className="bg-neutral-750 p-4 border-b border-neutral-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-neutral-200">LJ</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-100">Lord Justin Bernal</h3>
            <p className="text-xs text-neutral-400">Frontend Developer</p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="p-3">
        <h4 className="text-xs font-medium text-neutral-400 px-2 mb-2">Applications</h4>
        <div className="grid grid-cols-4 gap-2">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpenWindow(app.id)}
              className="flex flex-col items-center gap-2 p-3 hover:bg-neutral-700 rounded transition-colors"
            >
              <app.icon size={20} className="text-neutral-300" />
              <span className="text-xs text-neutral-300">{app.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-t border-neutral-700 p-3">
        <h4 className="text-xs font-medium text-neutral-400 px-2 mb-2">Quick Actions</h4>
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-neutral-700 rounded transition-colors text-left">
            <Download size={16} className="text-neutral-400" />
            <span className="text-sm text-neutral-300">Download Resume</span>
          </button>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-neutral-700 rounded transition-colors text-left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="text-sm text-neutral-300">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-neutral-700 rounded transition-colors text-left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="text-sm text-neutral-300">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
