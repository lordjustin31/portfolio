'use client';

import { RefreshCw, User, Settings, Info } from 'lucide-react';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

export default function ContextMenu({ x, y, onClose, onOpenWindow }: ContextMenuProps) {
  return (
    <div
      className="fixed bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg py-1 w-48 z-50"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => {
          window.location.reload();
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left"
      >
        <RefreshCw size={16} className="text-neutral-600 dark:text-neutral-400" />
        <span className="text-sm text-neutral-800 dark:text-neutral-200">Refresh</span>
      </button>
      
      <div className="h-px bg-neutral-200 dark:bg-neutral-700 my-1" />
      
      <button
        onClick={() => {
          onOpenWindow('about');
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left"
      >
        <User size={16} className="text-neutral-600 dark:text-neutral-400" />
        <span className="text-sm text-neutral-800 dark:text-neutral-200">Open Profile</span>
      </button>
      
      <button
        onClick={() => {
          onOpenWindow('settings');
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left"
      >
        <Settings size={16} className="text-neutral-600 dark:text-neutral-400" />
        <span className="text-sm text-neutral-800 dark:text-neutral-200">Settings</span>
      </button>
      
      <div className="h-px bg-neutral-200 dark:bg-neutral-700 my-1" />
      
      <button
        onClick={() => {
          onOpenWindow('about');
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left"
      >
        <Info size={16} className="text-neutral-600 dark:text-neutral-400" />
        <span className="text-sm text-neutral-800 dark:text-neutral-200">About This Portfolio</span>
      </button>
    </div>
  );
}
