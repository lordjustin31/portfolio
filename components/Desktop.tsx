'use client';

import { useState } from 'react';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import WindowManager from './WindowManager';
import DesktopIcons from './DesktopIcons';
import ContextMenu from './ContextMenu';
import DesktopWidgets from './DesktopWidgets';
import Notification from './Notification';

export default function Desktop() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [showWelcomeNotification, setShowWelcomeNotification] = useState(true);

  const openWindow = (windowId: string) => {
    // Toggle: if already open, close it; otherwise open it
    if (openWindows.includes(windowId)) {
      closeWindow(windowId);
    } else {
      setOpenWindows([...openWindows, windowId]);
      setMinimizedWindows(minimizedWindows.filter(id => id !== windowId));
      setActiveWindow(windowId);
      setIsStartMenuOpen(false);
    }
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
    setMinimizedWindows(minimizedWindows.filter(id => id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(openWindows[openWindows.length - 2] || null);
    }
  };

  const minimizeWindow = (windowId: string) => {
    if (!minimizedWindows.includes(windowId)) {
      setMinimizedWindows([...minimizedWindows, windowId]);
      if (activeWindow === windowId) {
        // Set focus to the next available non-minimized window
        const remainingWindows = openWindows.filter(
          id => id !== windowId && !minimizedWindows.includes(id)
        );
        setActiveWindow(remainingWindows[remainingWindows.length - 1] || null);
      }
    }
  };

  const restoreWindow = (windowId: string) => {
    setMinimizedWindows(minimizedWindows.filter(id => id !== windowId));
    setActiveWindow(windowId);
  };

  const handleDesktopClick = () => {
    setIsStartMenuOpen(false);
    setContextMenu(null);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="fixed inset-0 bg-neutral-100 dark:bg-neutral-900 overflow-hidden select-none animate-fade-in"
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
      style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)`
      }}
    >
      {/* Subtle watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[12rem] font-bold text-neutral-200/30 dark:text-neutral-700/30 select-none tracking-tighter">
          LJ
        </div>
      </div>

      {/* Desktop Icons */}
      <DesktopIcons 
        onOpenWindow={openWindow} 
        openWindows={openWindows}
        minimizedWindows={minimizedWindows}
      />

      {/* Desktop Widgets */}
      <DesktopWidgets onOpenWindow={openWindow} />

      {/* Window Manager */}
      <WindowManager
        openWindows={openWindows}
        minimizedWindows={minimizedWindows}
        activeWindow={activeWindow}
        onClose={closeWindow}
        onFocus={setActiveWindow}
        onMinimize={minimizeWindow}
      />

      {/* Start Menu */}
      {isStartMenuOpen && (
        <StartMenu 
          onClose={() => setIsStartMenuOpen(false)}
          onOpenWindow={openWindow}
        />
      )}

      {/* Context Menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onOpenWindow={openWindow}
        />
      )}

      {/* Welcome Notification */}
      {showWelcomeNotification && (
        <Notification
          title="Welcome to My Workspace!"
          message="Feel free to explore my projects, experience, and skills. Click on any icon to get started."
          onClose={() => setShowWelcomeNotification(false)}
          duration={6000}
        />
      )}

      {/* Taskbar */}
      <Taskbar
        isStartMenuOpen={isStartMenuOpen}
        onToggleStartMenu={() => setIsStartMenuOpen(!isStartMenuOpen)}
        openWindows={openWindows}
        minimizedWindows={minimizedWindows}
        activeWindow={activeWindow}
        onWindowClick={(id) => {
          if (minimizedWindows.includes(id)) {
            restoreWindow(id);
          } else if (activeWindow === id) {
            minimizeWindow(id);
          } else {
            setActiveWindow(id);
          }
        }}
      />
    </div>
  );
}
