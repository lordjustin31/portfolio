'use client';

import Window from './Window';
import AboutApp from './apps/AboutApp';
import ProjectsApp from './apps/ProjectsApp';
import ExperienceApp from './apps/ExperienceApp';
import SkillsApp from './apps/SkillsApp';
import ResumeApp from './apps/ResumeApp';
import AchievementsApp from './apps/AchievementsApp';
import ContactApp from './apps/ContactApp';
import SettingsApp from './apps/SettingsApp';

interface WindowManagerProps {
  openWindows: string[];
  minimizedWindows: string[];
  activeWindow: string | null;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
}

const appComponents: Record<string, any> = {
  about: AboutApp,
  projects: ProjectsApp,
  experience: ExperienceApp,
  skills: SkillsApp,
  resume: ResumeApp,
  achievements: AchievementsApp,
  contact: ContactApp,
  settings: SettingsApp,
};

const appTitles: Record<string, string> = {
  about: 'About Me',
  projects: 'Projects',
  experience: 'Experience',
  skills: 'Skills',
  resume: 'Resume',
  achievements: 'Achievements',
  contact: 'Contact',
  settings: 'Settings',
};

export default function WindowManager({
  openWindows,
  minimizedWindows,
  activeWindow,
  onClose,
  onFocus,
  onMinimize,
}: WindowManagerProps) {
  return (
    <>
      {openWindows.map((windowId, index) => {
        const AppComponent = appComponents[windowId];
        const isActive = activeWindow === windowId;
        const isMinimized = minimizedWindows.includes(windowId);
        
        // Don't render minimized windows
        if (isMinimized) return null;
        
        return (
          <Window
            key={windowId}
            id={windowId}
            title={appTitles[windowId]}
            isActive={isActive}
            onClose={() => onClose(windowId)}
            onFocus={() => onFocus(windowId)}
            onMinimize={() => onMinimize(windowId)}
            zIndex={isActive ? 30 + openWindows.length : 30 + index}
          >
            {AppComponent && <AppComponent />}
          </Window>
        );
      })}
    </>
  );
}
