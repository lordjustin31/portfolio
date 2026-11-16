'use client';

import { useState, useRef, useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

export default function Window({
  id,
  title,
  children,
  isActive,
  onClose,
  onFocus,
  zIndex,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 100 + Math.random() * 100, y: 80 + Math.random() * 60 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; startPosX: number; startPosY: number } | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    onFocus();
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    };
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      setPosition({
        x: dragRef.current.startPosX + (e.clientX - dragRef.current.startX),
        y: dragRef.current.startPosY + (e.clientY - dragRef.current.startY),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      dragRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const windowStyle = isMaximized
    ? { left: 0, top: 0, right: 0, bottom: '48px', width: '100%', height: 'calc(100% - 48px)' }
    : { left: `${position.x}px`, top: `${position.y}px`, width: '800px', height: '600px' };

  return (
    <div
      className={`fixed bg-white dark:bg-neutral-800 border rounded-lg shadow-xl overflow-hidden transition-all ${
        isActive ? 'border-neutral-400 dark:border-neutral-600' : 'border-neutral-300 dark:border-neutral-700'
      }`}
      style={{ ...windowStyle, zIndex }}
      onClick={(e) => {
        e.stopPropagation();
        onFocus();
      }}
    >
      {/* Title Bar */}
      <div
        className={`h-10 px-3 flex items-center justify-between border-b cursor-move select-none ${
          isActive 
            ? 'bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600' 
            : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700'
        }`}
        onMouseDown={handleMouseDown}
      >
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{title}</span>
        
        <div className="flex items-center gap-2">
          <button
            className="w-8 h-6 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Minimize functionality
            }}
          >
            <Minus size={14} className="text-neutral-600 dark:text-neutral-300" />
          </button>
          
          <button
            className="w-8 h-6 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
          >
            <Square size={14} className="text-neutral-600 dark:text-neutral-300" />
          </button>
          
          <button
            className="w-8 h-6 flex items-center justify-center hover:bg-red-500 hover:text-white rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={14} className="text-neutral-600 dark:text-neutral-300" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-40px)] overflow-auto bg-white dark:bg-neutral-800">
        {children}
      </div>
    </div>
  );
}
