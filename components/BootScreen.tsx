'use client';

import { useEffect, useState } from 'react';

interface BootScreenProps {
  onSkip?: () => void;
}

export default function BootScreen({ onSkip }: BootScreenProps = {}) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Initializing workspace...');

  useEffect(() => {
    const stages = [
      { text: 'Initializing workspace...', delay: 0 },
      { text: 'Loading profile...', delay: 800 },
      { text: 'Loading projects...', delay: 1600 },
      { text: 'READY', delay: 2200 }
    ];

    stages.forEach(({ text, delay }) => {
      setTimeout(() => setStage(text), delay);
    });

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-2xl font-semibold text-neutral-100 tracking-tight">
          Lord Justin Bernal OS
        </h1>
        
        <div className="w-64 space-y-3">
          <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-neutral-100 transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-neutral-400">{stage}</p>
        </div>

        {onSkip && (
          <button
            onClick={onSkip}
            className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors mt-8 px-6 py-2 border border-neutral-600 rounded hover:bg-neutral-800"
          >
            Skip Boot Screen →
          </button>
        )}
      </div>
    </div>
  );
}
