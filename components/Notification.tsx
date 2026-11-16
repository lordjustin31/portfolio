'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Notification({ title, message, onClose, duration = 5000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

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
      className={`fixed bottom-20 right-6 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 z-50 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-neutral-800">{title}</h4>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="text-neutral-500 hover:text-neutral-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-sm text-neutral-600">{message}</p>
      </div>
      <div className="h-1 bg-neutral-200">
        <div 
          className="h-full bg-neutral-800 transition-all ease-linear"
          style={{ 
            width: '100%',
            animation: `shrink ${duration}ms linear`
          }}
        />
      </div>
    </div>
  );
}
