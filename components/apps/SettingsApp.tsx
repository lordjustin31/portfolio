'use client';

import { useState, useEffect } from 'react';

export default function SettingsApp() {
  const [theme, setTheme] = useState('light');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedMotion = localStorage.getItem('reducedMotion') === 'true';
    setTheme(savedTheme);
    setReducedMotion(savedMotion);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleMotionChange = (value: boolean) => {
    setReducedMotion(value);
    localStorage.setItem('reducedMotion', String(value));
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-neutral-800 mb-2">Settings</h2>
        <p className="text-neutral-600">Customize your portfolio experience</p>
      </div>

      {/* Appearance */}
      <div className="border border-neutral-200 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">Appearance</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Theme
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => handleThemeChange('light')}
                className={`px-4 py-2 border rounded transition-colors ${
                  theme === 'light'
                    ? 'border-neutral-800 bg-neutral-800 text-white'
                    : 'border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`px-4 py-2 border rounded transition-colors ${
                  theme === 'dark'
                    ? 'border-neutral-800 bg-neutral-800 text-white'
                    : 'border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="border border-neutral-200 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">Accessibility</h3>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-neutral-800">Reduced Motion</p>
              <p className="text-sm text-neutral-600">Minimize animations and transitions</p>
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
                  reducedMotion ? 'bg-neutral-800' : 'bg-neutral-300'
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
      <div className="border border-neutral-200 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">About This Portfolio</h3>
        <div className="space-y-2 text-sm text-neutral-700">
          <p><strong>Version:</strong> 1.0.0</p>
          <p><strong>Built with:</strong> Next.js, React, TypeScript, Tailwind CSS</p>
          <p><strong>Developer:</strong> Lord Justin Bernal</p>
        </div>
      </div>
    </div>
  );
}
