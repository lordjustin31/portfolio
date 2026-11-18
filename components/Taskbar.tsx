'use client';

import { Search, User, FolderOpen, FileText, Mail, Settings } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface TaskbarProps {
  isStartMenuOpen: boolean;
  onToggleStartMenu: () => void;
  onOpenSearch: () => void;
  openWindows: string[];
  minimizedWindows: string[];
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
}

const appIcons: Record<string, any> = {
  about: User,
  projects: FolderOpen,
  resume: FileText,
  contact: Mail,
  settings: Settings,
};

export default function Taskbar({
  isStartMenuOpen,
  onToggleStartMenu,
  onOpenSearch,
  openWindows,
  minimizedWindows,
  activeWindow,
  onWindowClick,
}: TaskbarProps) {
  const isMobile = useIsMobile();
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-neutral-800 dark:bg-neutral-950 border-t border-neutral-700 dark:border-neutral-800 flex items-center z-50 ${
      isMobile ? 'h-14 px-1' : 'h-12 px-2'
    }`}>
      {/* Start Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleStartMenu();
        }}
        className={`flex items-center gap-2 rounded transition-colors flex-shrink-0 ${
          isMobile ? 'h-11 w-11 justify-center' : 'h-9 px-3'
        } ${
          isStartMenuOpen
            ? 'bg-neutral-700 dark:bg-neutral-800'
            : 'hover:bg-neutral-700 dark:hover:bg-neutral-800'
        }`}
      >
        <div className={`bg-neutral-100 dark:bg-neutral-200 rounded-sm flex items-center justify-center ${
          isMobile ? 'w-6 h-6' : 'w-5 h-5'
        }`}>
          <span className={`font-bold text-neutral-800 dark:text-neutral-900 ${
            isMobile ? 'text-sm' : 'text-xs'
          }`}>LJ</span>
        </div>
      </button>

      {/* Search - Hidden on mobile */}
      {!isMobile && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onOpenSearch();
          }}
          className="h-9 px-3 flex items-center gap-2 hover:bg-neutral-700 dark:hover:bg-neutral-800 rounded transition-colors flex-shrink-0"
        >
          <Search size={16} className="text-neutral-400 dark:text-neutral-500" />
          <span className="text-sm text-neutral-400 dark:text-neutral-500">Search</span>
        </button>
      )}

      {/* Divider - Hidden on mobile */}
      {!isMobile && <div className="w-px h-6 bg-neutral-700 dark:bg-neutral-800 mx-1 flex-shrink-0" />}

      {/* Open Windows - Horizontal scroll on mobile */}
      <div className={`flex gap-1 ${isMobile ? 'overflow-x-auto scrollbar-thin' : ''} flex-1 min-w-0`}>
        {openWindows.map((windowId) => {
          const Icon = appIcons[windowId];
          const isActive = activeWindow === windowId;
          const isMinimized = minimizedWindows.includes(windowId);
          
          return (
            <button
              key={windowId}
              onClick={(e) => {
                e.stopPropagation();
                onWindowClick(windowId);
              }}
              className={`flex items-center gap-2 rounded transition-colors relative flex-shrink-0 ${
                isMobile ? 'h-11 w-11 justify-center' : 'h-9 px-3'
              } ${
                isActive && !isMinimized
                  ? 'bg-neutral-700 dark:bg-neutral-800'
                  : 'hover:bg-neutral-700 dark:hover:bg-neutral-800'
              } ${isMinimized ? 'opacity-60' : ''}`}
              title={isMinimized ? `Restore ${windowId}` : windowId}
            >
              {Icon && <Icon size={isMobile ? 20 : 16} className="text-neutral-300 dark:text-neutral-400" />}
              {!isMobile && <span className="text-sm text-neutral-300 dark:text-neutral-400 capitalize">{windowId}</span>}
              {isActive && !isMinimized && (
                <div className={`absolute bottom-0 h-0.5 bg-neutral-100 dark:bg-neutral-300 ${
                  isMobile ? 'left-1 right-1' : 'left-2 right-2'
                }`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Right side - System Tray */}
      <div className={`flex items-center flex-shrink-0 ${isMobile ? 'gap-2 px-1' : 'gap-3 px-2 ml-auto'}`}>
        {!isMobile && (
          <button className="hover:bg-neutral-700 dark:hover:bg-neutral-800 p-1.5 rounded transition-colors">
            <div className="w-4 h-4 text-neutral-400 dark:text-neutral-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 7l-5 5-5-5" />
              </svg>
            </div>
          </button>
        )}
        
        <div className="text-right">
          <div className={`text-neutral-200 dark:text-neutral-300 leading-none ${
            isMobile ? 'text-xs' : 'text-xs'
          }`}>{time}</div>
          {!isMobile && (
            <div className="text-xs text-neutral-400 dark:text-neutral-500 leading-none mt-0.5">{date}</div>
          )}
        </div>
      </div>
    </div>
  );
}
