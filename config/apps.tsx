/**
 * Application configuration for WindowManager
 * Centralizes app metadata and components
 */

import AboutApp from '@/components/apps/AboutApp';
import ProjectsApp from '@/components/apps/ProjectsApp';
import ExperienceApp from '@/components/apps/ExperienceApp';
import SkillsApp from '@/components/apps/SkillsApp';
import ResumeApp from '@/components/apps/ResumeApp';
import AchievementsApp from '@/components/apps/AchievementsApp';
import ContactApp from '@/components/apps/ContactApp';
import SettingsApp from '@/components/apps/SettingsApp';
import type { AppId, AppConfig } from '@/types';

/**
 * Complete app configuration
 * Add new apps here to make them available in the system
 */
export const APP_CONFIGS: Record<AppId, AppConfig> = {
  about: {
    id: 'about',
    title: 'About Me',
    icon: '👤',
    component: AboutApp,
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    icon: '💼',
    component: ProjectsApp,
  },
  experience: {
    id: 'experience',
    title: 'Experience',
    icon: '🏢',
    component: ExperienceApp,
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    icon: '⚡',
    component: SkillsApp,
  },
  resume: {
    id: 'resume',
    title: 'Resume',
    icon: '📄',
    component: ResumeApp,
  },
  achievements: {
    id: 'achievements',
    title: 'Achievements',
    icon: '🏆',
    component: AchievementsApp,
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    icon: '📧',
    component: ContactApp,
  },
  settings: {
    id: 'settings',
    title: 'Settings',
    icon: '⚙️',
    component: SettingsApp,
  },
};

/**
 * Helper to get app component by ID
 */
export function getAppComponent(appId: string) {
  const config = APP_CONFIGS[appId as AppId];
  return config?.component || null;
}

/**
 * Helper to get app title by ID
 */
export function getAppTitle(appId: string): string {
  const config = APP_CONFIGS[appId as AppId];
  return config?.title || 'Unknown';
}

/**
 * Helper to get app icon by ID
 */
export function getAppIcon(appId: string): string {
  const config = APP_CONFIGS[appId as AppId];
  return config?.icon || '📱';
}

/**
 * Get all app IDs
 */
export function getAllAppIds(): AppId[] {
  return Object.keys(APP_CONFIGS) as AppId[];
}

/**
 * Check if an app ID is valid
 */
export function isValidAppId(appId: string): appId is AppId {
  return appId in APP_CONFIGS;
}
