'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onUnlock();
      }
    };

    const handleClick = () => {
      onUnlock();
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [onUnlock]);

  return (
    <div className="fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center cursor-pointer overflow-hidden animate-fade-in">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Time */}
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-light text-white tracking-tight">
            {time}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light">
            {date}
          </p>
        </div>

        {/* Profile */}
        <div className="pt-8 space-y-4">
          <div className="w-28 h-28 bg-neutral-700 rounded-full flex items-center justify-center mx-auto border-4 border-neutral-600 shadow-2xl">
            <span className="text-4xl font-bold text-white">LJ</span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Lord Justin Bernal</h2>
            <p className="text-neutral-400 mt-1">Frontend Developer</p>
          </div>
        </div>

        {/* Unlock hint */}
        <div className="pt-12 space-y-3 animate-pulse">
          <div className="flex items-center justify-center gap-2 text-neutral-400">
            <span className="text-sm">Click anywhere or press any key</span>
            <ArrowRight size={16} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-neutral-500">
          Press <kbd className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-400 font-mono mx-1">Enter</kbd> 
          or <kbd className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-400 font-mono mx-1">Space</kbd> 
          to unlock
        </p>
      </div>
    </div>
  );
}
