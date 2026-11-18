'use client';

import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/20"
        aria-label="Close fullscreen view"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Image Container */}
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={800}
            className="object-contain max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* Image Info */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <p className="text-white text-sm font-medium">{alt}</p>
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        Press <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20 font-mono text-xs">ESC</kbd> or click outside to close
      </div>
    </div>
  );
}
