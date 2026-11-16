'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function SettingsApp() {
  const { theme, setTheme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedMotion = localStorage.getItem('reducedMotion') === 'true';
    setReducedMotion(savedMotion);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  const handleMotionChange = (value: boolean) => {
    setReducedMotion(value);
    localStorage.setItem('reducedMotion', String(value));
  };

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-neutral-900">
      <div>
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">Settings</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Customize your portfolio experience</p>
      </div>

      {/* Appearance */}
      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-white dark:bg-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Appearance</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Theme
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => handleThemeChange('light')}
                className={`px-4 py-2 border rounded transition-colors ${
                  theme === 'light'
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`px-4 py-2 border rounded transition-colors ${
                  theme === 'dark'
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                Dark
              </button>
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              Current: {theme === 'light' ? 'Light' : 'Dark'} Mode
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-white dark:bg-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Accessibility</h3>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-neutral-800 dark:text-neutral-100">Reduced Motion</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Minimize animations and transitions</p>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => handleMotionChange(e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => handleMotionChange(!reducedMotion)}
                className={`w-11 h-6 rounded-full transition-colors ${
                  reducedMotion ? 'bg-blue-600' : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                    reducedMotion ? 'translate-x-5' : 'translate-x-0.5'
                  } mt-0.5`}
                />
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* About */}
      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-white dark:bg-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">About This Portfolio</h3>
        <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          <p><strong>Version:</strong> 1.0.0</p>
          <p><strong>Built with:</strong> Next.js, React, TypeScript, Tailwind CSS</p>
          <p><strong>Developer:</strong> Lord Justin Bernal</p>
        </div>
      </div>
    </div>
  );
}
