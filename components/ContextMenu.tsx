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
      className="fixed bg-white border border-neutral-300 rounded-lg shadow-lg py-1 w-48 z-50"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => {
          window.location.reload();
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 transition-colors text-left"
      >
        <RefreshCw size={16} className="text-neutral-600" />
        <span className="text-sm text-neutral-800">Refresh</span>
      </button>
      
      <div className="h-px bg-neutral-200 my-1" />
      
      <button
        onClick={() => {
          onOpenWindow('about');
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 transition-colors text-left"
      >
        <User size={16} className="text-neutral-600" />
        <span className="text-sm text-neutral-800">Open Profile</span>
      </button>
      
      <button
        onClick={() => {
          onOpenWindow('settings');
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 transition-colors text-left"
      >
        <Settings size={16} className="text-neutral-600" />
        <span className="text-sm text-neutral-800">Settings</span>
      </button>
      
      <div className="h-px bg-neutral-200 my-1" />
      
      <button
        onClick={() => {
          onOpenWindow('about');
          onClose();
        }}
        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-neutral-100 transition-colors text-left"
      >
        <Info size={16} className="text-neutral-600" />
        <span className="text-sm text-neutral-800">About This Portfolio</span>
      </button>
    </div>
  );
}
