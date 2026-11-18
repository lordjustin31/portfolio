/**
 * Application-wide constants
 */

// App Configuration
export const APP_CONFIG = {
  // Boot screen duration in milliseconds
  BOOT_DURATION: 2500,
  
  // Animation durations
  ANIMATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },

  // Window z-index levels
  Z_INDEX: {
    BASE: 10,
    WINDOW: 100,
    MODAL: 1000,
    NOTIFICATION: 2000,
    CONTEXT_MENU: 3000,
  },

  // Local storage keys
  STORAGE_KEYS: {
    THEME: 'portfolio-theme',
    WINDOW_STATE: 'portfolio-window-state',
    VISITED: 'portfolio-visited',
    HIDDEN_WIDGETS: 'portfolio-hidden-widgets',
  },
} as const;

// Rate Limiting Configuration
export const RATE_LIMIT = {
  WINDOW_MS: 60 * 1000, // 1 minute
  MAX_REQUESTS: 3, // Max 3 requests per minute
} as const;

// Contact Form Configuration
export const CONTACT_CONFIG = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 5000,
} as const;

// App Titles and Metadata
export const APP_TITLES: Record<string, string> = {
  about: 'About Me',
  projects: 'Projects',
  experience: 'Experience',
  skills: 'Skills',
  resume: 'Resume',
  achievements: 'Achievements',
  contact: 'Contact',
  settings: 'Settings',
} as const;

// App Icons (you can customize these)
export const APP_ICONS: Record<string, string> = {
  about: '👤',
  projects: '💼',
  experience: '🏢',
  skills: '⚡',
  resume: '📄',
  achievements: '🏆',
  contact: '📧',
  settings: '⚙️',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/lordjustin31',
  LINKEDIN: '#', // Add your LinkedIn
  TWITTER: '#', // Add your Twitter
  EMAIL: 'justin31tarca@gmail.com',
} as const;

// Site Metadata
export const SITE_CONFIG = {
  NAME: 'Lord Justin Reigh T. Bernal',
  TITLE: 'Portfolio OS',
  DESCRIPTION: 'BSIT Graduate | Frontend Developer',
  URL: 'https://lj-portfolio-os.vercel.app',
  AUTHOR: {
    NAME: 'Lord Justin Reigh T. Bernal',
    EMAIL: 'justin31tarca@gmail.com',
    ROLE: 'Frontend Developer',
  },
} as const;

// Breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  RATE_LIMIT: 'Too many requests. Please try again later.',
  VALIDATION: 'Please check your input and try again.',
  SERVER: 'Server error. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_SENT: 'Message sent successfully! I\'ll get back to you soon.',
  COPIED: 'Copied to clipboard!',
  SAVED: 'Settings saved successfully!',
} as const;

// Keyboard Shortcuts
export const SHORTCUTS = {
  SEARCH: ['Ctrl', 'K'],
  CLOSE_WINDOW: ['Alt', 'F4'],
  MINIMIZE: ['Ctrl', 'M'],
} as const;
