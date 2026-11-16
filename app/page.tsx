'use client';

import { useState, useEffect, useCallback } from 'react';
import Desktop from '@/components/Desktop';
import BootScreen from '@/components/BootScreen';
import LockScreen from '@/components/LockScreen';

export default function Home() {
  const [stage, setStage] = useState<'boot' | 'lock' | 'desktop'>('boot');

  const handleBootComplete = useCallback(() => {
    setStage('lock');
  }, []);

  const handleUnlock = useCallback(() => {
    setStage('desktop');
  }, []);

  // Auto-progress from boot to lock after a delay
  useEffect(() => {
    if (stage === 'boot') {
      const timer = setTimeout(() => {
        setStage('lock');
      }, 2500); // Matches the boot screen duration
      return () => clearTimeout(timer);
    }
  }, [stage]);

  if (stage === 'boot') {
    return <BootScreen onSkip={handleBootComplete} />;
  }

  if (stage === 'lock') {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return <Desktop />;
}
