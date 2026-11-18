// Window Management Types
export interface WindowState {
  id: string;
  title: string;
  isMinimized: boolean;
  isMaximized?: boolean;
  zIndex: number;
}

export interface DesktopState {
  openWindows: string[];
  minimizedWindows: string[];
  activeWindow: string | null;
}

// App Types
export type AppId = 
  | 'about' 
  | 'projects' 
  | 'experience' 
  | 'skills' 
  | 'resume' 
  | 'achievements' 
  | 'contact' 
  | 'settings';

export interface AppConfig {
  id: AppId;
  title: string;
  icon: string;
  component: React.ComponentType<any>;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Experience Types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies?: string[];
}

// Skill Types
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

// Achievement Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'recognition';
  issuer?: string;
}

// Theme Types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Notification Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

// Context Menu Types
export interface ContextMenuPosition {
  x: number;
  y: number;
}

export interface ContextMenuItem {
  label: string;
  icon?: string;
  action: () => void;
  disabled?: boolean;
  divider?: boolean;
}

// Search Types
export interface SearchResult {
  id: string;
  title: string;
  type: 'app' | 'content' | 'action';
  description?: string;
  action: () => void;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface RateLimitInfo {
  remaining: number;
  reset: number;
}
