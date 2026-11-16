'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface NotificationProps {
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Notification({ title, message, onClose, duration = 5000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Slide in
    setTimeout(() => setIsVisible(true), 100);

    // Auto close
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 z-50 ${
        isMobile 
          ? 'bottom-16 left-2 right-2 w-auto' 
          : 'bottom-20 right-6 w-80'
      } ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className={isMobile ? 'p-4' : 'p-4'}>
        <div className="flex items-start justify-between mb-2">
          <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
            isMobile ? 'text-base' : 'text-sm'
          }`}>{title}</h4>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className={`text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors ${
              isMobile ? 'min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 -mt-2' : ''
            }`}
          >
            <X size={isMobile ? 20 : 16} />
          </button>
        </div>
        <p className={`text-neutral-600 dark:text-neutral-300 ${
          isMobile ? 'text-base' : 'text-sm'
        }`}>{message}</p>
      </div>
      <div className="h-1 bg-neutral-200 dark:bg-neutral-700">
        <div 
          className="h-full bg-neutral-800 dark:bg-blue-600 transition-all ease-linear"
          style={{ 
            width: '100%',
            animation: `shrink ${duration}ms linear`
          }}
        />
      </div>
    </div>
  );
}
