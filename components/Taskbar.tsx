'use client';

import { Search, User, FolderOpen, FileText, Mail, Settings } from 'lucide-react';

interface TaskbarProps {
  isStartMenuOpen: boolean;
  onToggleStartMenu: () => void;
  openWindows: string[];
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
  openWindows,
  activeWindow,
  onWindowClick,
}: TaskbarProps) {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-neutral-800 border-t border-neutral-700 flex items-center px-2 gap-1 z-50">
      {/* Start Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleStartMenu();
        }}
        className={`h-9 px-3 flex items-center gap-2 rounded transition-colors ${
          isStartMenuOpen
            ? 'bg-neutral-700'
            : 'hover:bg-neutral-700'
        }`}
      >
        <div className="w-5 h-5 bg-neutral-100 rounded-sm flex items-center justify-center">
          <span className="text-xs font-bold text-neutral-800">LJ</span>
        </div>
      </button>

      {/* Search */}
      <button className="h-9 px-3 flex items-center gap-2 hover:bg-neutral-700 rounded transition-colors">
        <Search size={16} className="text-neutral-400" />
        <span className="text-sm text-neutral-400">Search</span>
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-neutral-700 mx-1" />

      {/* Open Windows */}
      <div className="flex gap-1">
        {openWindows.map((windowId) => {
          const Icon = appIcons[windowId];
          const isActive = activeWindow === windowId;
          
          return (
            <button
              key={windowId}
              onClick={(e) => {
                e.stopPropagation();
                onWindowClick(windowId);
              }}
              className={`h-9 px-3 flex items-center gap-2 rounded transition-colors relative ${
                isActive
                  ? 'bg-neutral-700'
                  : 'hover:bg-neutral-700'
              }`}
            >
              {Icon && <Icon size={16} className="text-neutral-300" />}
              <span className="text-sm text-neutral-300 capitalize">{windowId}</span>
              {isActive && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-neutral-100" />
              )}
            </button>
          );
        })}
      </div>

      {/* Right side - System Tray */}
      <div className="ml-auto flex items-center gap-3 px-2">
        <button className="hover:bg-neutral-700 p-1.5 rounded transition-colors">
          <div className="w-4 h-4 text-neutral-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 7l-5 5-5-5" />
            </svg>
          </div>
        </button>
        
        <div className="text-right">
          <div className="text-xs text-neutral-200 leading-none">{time}</div>
          <div className="text-xs text-neutral-400 leading-none mt-0.5">{date}</div>
        </div>
      </div>
    </div>
  );
}
