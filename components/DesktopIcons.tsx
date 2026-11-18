'use client';

import { User, FolderOpen, FileText, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface DesktopIconsProps {
  onOpenWindow: (windowId: string) => void;
  openWindows: string[];
  minimizedWindows: string[];
}

const icons = [
  { id: 'about', label: 'About Me', icon: User, position: 'top-4 left-4', tooltip: 'Learn about my background and experience' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, position: 'top-28 left-4', tooltip: 'View my portfolio of work' },
  { id: 'resume', label: 'Resume', icon: FileText, position: 'top-52 left-4', tooltip: 'Download my professional resume' },
  { id: 'contact', label: 'Contact', icon: Mail, position: 'top-76 left-4', tooltip: 'Get in touch with me' },
];

export default function DesktopIcons({ onOpenWindow, openWindows, minimizedWindows }: DesktopIconsProps) {
  const isMobile = useIsMobile();
  
  return (
    <>
      {/* Name Display - Hidden on mobile */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center hidden md:block">
        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight mb-2">
          Lord Justin Reigh T. Bernal
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Personal Workspace</p>
      </div>

      {/* Desktop Icons - Grid on mobile, absolute on desktop */}
      <div className={
        isMobile 
          ? "grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 pt-8"
          : "contents"
      }>
        {icons.map((item) => {
          const isOpen = openWindows.includes(item.id);
          const isMinimized = minimizedWindows.includes(item.id);
          const isSelected = isOpen && !isMinimized;
          
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenWindow(item.id);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  onOpenWindow(item.id);
                }}
                className={`
                  ${isMobile ? 'relative w-full' : `absolute ${item.position}`}
                  flex flex-col items-center gap-1.5 
                  ${isMobile ? 'p-4' : 'p-3'} 
                  rounded transition-all touch-manipulation
                  ${isSelected 
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-400 dark:border-blue-600' 
                    : 'hover:bg-white/50 dark:hover:bg-neutral-800/50 border-2 border-transparent'
                  }
                `}
              >
                <div className={`
                  ${isMobile ? 'w-16 h-16' : 'w-12 h-12'}
                  rounded flex items-center justify-center shadow-sm transition-all
                  ${isSelected 
                    ? 'bg-blue-500 dark:bg-blue-600 border border-blue-600 dark:border-blue-700 shadow-md' 
                    : 'bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 group-hover:shadow'
                  }
                `}>
                  <item.icon size={isMobile ? 28 : 24} className={isSelected ? 'text-white' : 'text-neutral-700 dark:text-neutral-300'} />
                </div>
                <span className={`
                  text-xs font-medium text-center px-2 py-0.5 rounded
                  ${isMobile ? 'text-sm' : 'text-xs'}
                  ${isSelected 
                    ? 'bg-blue-500 dark:bg-blue-600 text-white' 
                    : 'bg-white/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200'
                  }
                `}>
                  {item.label}
                </span>
              </button>
              
              {/* Tooltip - Desktop only */}
              {!isMobile && (
                <div className={`absolute ${item.position} left-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50`}>
                  <div className="bg-neutral-900 dark:bg-neutral-950 text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap border border-neutral-800 dark:border-neutral-700">
                    {item.tooltip}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
