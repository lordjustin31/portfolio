'use client';

import { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, Award, Download, Mail, X, EyeOff } from 'lucide-react';
import { APP_CONFIG } from '@/constants';

interface DesktopWidgetsProps {
  onOpenWindow: (windowId: string) => void;
}

const projects = [
  {
    name: 'HomeEase',
    description: 'Web-Based Homeowner Information System',
    tech: 'React, TypeScript, Django REST',
  },
  {
    name: 'Banking Application',
    description: 'Java OOP Banking System',
    tech: 'Java, OOP, MySQL, XAMPP',
  },
];

export default function DesktopWidgets({ onOpenWindow }: DesktopWidgetsProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [time, setTime] = useState('');
  const [hiddenWidgets, setHiddenWidgets] = useState<Set<string>>(new Set());
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; widgetId: string } | null>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  // Load hidden widgets from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.HIDDEN_WIDGETS);
      if (saved) {
        try {
          setHiddenWidgets(new Set(JSON.parse(saved)));
        } catch (e) {
          console.error('Failed to load hidden widgets:', e);
        }
      }
    }
  }, []);

  // Close context menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target as Node)) {
        setContextMenu(null);
      }
    };

    if (contextMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [contextMenu]);

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate featured project every 5 seconds
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentProjectIndex];

  const hideWidget = (widgetId: string) => {
    const newHidden = new Set(hiddenWidgets);
    newHidden.add(widgetId);
    setHiddenWidgets(newHidden);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        APP_CONFIG.STORAGE_KEYS.HIDDEN_WIDGETS,
        JSON.stringify(Array.from(newHidden))
      );
    }
    setContextMenu(null);
  };

  const showAllWidgets = () => {
    setHiddenWidgets(new Set());
    if (typeof window !== 'undefined') {
      localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.HIDDEN_WIDGETS);
    }
  };

  const handleContextMenu = (e: React.MouseEvent, widgetId: string) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, widgetId });
  };

  const allWidgetsHidden = hiddenWidgets.size >= 3;

  return (
    <>
      {/* Show All Widgets Button (when all are hidden) */}
      {allWidgetsHidden && (
        <button
          onClick={showAllWidgets}
          className="fixed top-4 right-4 z-20 px-3 py-2 bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg hover:bg-neutral-50 transition-colors flex items-center gap-2 text-sm font-medium text-neutral-700"
          title="Show all widgets"
        >
          <EyeOff size={16} />
          Show Widgets
        </button>
      )}
      <div className="fixed top-4 right-4 w-80 space-y-3 z-20 pointer-events-none">
        {/* Stats Widget */}
        {!hiddenWidgets.has('stats') && (
          <div 
            className="bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg p-4 pointer-events-auto relative group"
            onContextMenu={(e) => handleContextMenu(e, 'stats')}
          >
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-neutral-600" />
              <h3 className="text-sm font-semibold text-neutral-800">Quick Stats</h3>
              <button
                onClick={() => hideWidget('stats')}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-neutral-200 rounded"
                title="Hide widget"
                aria-label="Hide Quick Stats widget"
              >
                <X size={14} className="text-neutral-600" />
              </button>
            </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-neutral-800">2</div>
            <div className="text-xs text-neutral-600">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-800">5+</div>
            <div className="text-xs text-neutral-600">Certs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-800">2026</div>
            <div className="text-xs text-neutral-600">Graduate</div>
          </div>
          </div>
          </div>
        )}

        {/* Featured Project Widget */}
        {!hiddenWidgets.has('projects') && (
          <div 
            className="bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg p-4 pointer-events-auto relative group"
            onContextMenu={(e) => handleContextMenu(e, 'projects')}
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} className="text-neutral-600" />
              <h3 className="text-sm font-semibold text-neutral-800">Featured Project</h3>
              <button
                onClick={() => hideWidget('projects')}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-neutral-200 rounded"
                title="Hide widget"
                aria-label="Hide Featured Project widget"
              >
                <X size={14} className="text-neutral-600" />
              </button>
            </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-800 text-sm">{currentProject.name}</h4>
          <p className="text-xs text-neutral-600">{currentProject.description}</p>
          <div className="flex flex-wrap gap-1">
            {currentProject.tech.split(', ').map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded text-xs border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenWindow('projects');
            }}
            className="w-full mt-2 px-3 py-1.5 bg-neutral-800 text-white text-xs rounded hover:bg-neutral-700 transition-colors"
          >
            View All Projects
          </button>
        </div>
        {/* Progress indicator */}
        <div className="flex gap-1 mt-3 justify-center">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 rounded-full transition-colors ${
                index === currentProjectIndex ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            />
            ))}
          </div>
          </div>
        )}

        {/* Quick Actions Widget */}
        {!hiddenWidgets.has('actions') && (
          <div 
            className="bg-white/95 backdrop-blur border border-neutral-300 rounded-lg shadow-lg p-4 pointer-events-auto relative group"
            onContextMenu={(e) => handleContextMenu(e, 'actions')}
          >
            <div className="flex items-center gap-2 mb-3">
              <Code size={16} className="text-neutral-600" />
              <h3 className="text-sm font-semibold text-neutral-800">Quick Actions</h3>
              <button
                onClick={() => hideWidget('actions')}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-neutral-200 rounded"
                title="Hide widget"
                aria-label="Hide Quick Actions widget"
              >
                <X size={14} className="text-neutral-600" />
              </button>
            </div>
        <div className="space-y-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOpenWindow('resume');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors text-sm text-left"
          >
            <Download size={14} className="text-neutral-600" />
            <span className="text-neutral-800 font-medium">View Resume</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenWindow('contact');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors text-sm text-left"
          >
            <Mail size={14} className="text-neutral-600" />
            <span className="text-neutral-800 font-medium">Contact Me</span>
            </button>
          </div>
          </div>
        )}
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <div
          ref={contextMenuRef}
          className="fixed z-50 bg-white border border-neutral-300 rounded-lg shadow-xl py-1 min-w-[160px]"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            onClick={() => hideWidget(contextMenu.widgetId)}
            className="w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 flex items-center gap-2 text-neutral-700"
          >
            <EyeOff size={14} />
            Hide Widget
          </button>
          <button
            onClick={showAllWidgets}
            className="w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 flex items-center gap-2 text-neutral-700"
          >
            <Award size={14} />
            Show All Widgets
          </button>
        </div>
      )}
    </>
  );
}
