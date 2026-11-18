'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, User, FolderOpen, FileText, Mail, ExternalLink } from 'lucide-react';

interface SearchModalProps {
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

const searchableItems = [
  {
    id: 'about',
    title: 'About Me',
    description: 'Learn about my background, education, and experience',
    icon: User,
    type: 'App',
    keywords: ['about', 'bio', 'background', 'education', 'earist', 'tondo', 'justin', 'bernal'],
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'View my portfolio: HomeEase, Banking Application',
    icon: FolderOpen,
    type: 'App',
    keywords: ['projects', 'portfolio', 'homeease', 'banking', 'work', 'code', 'react', 'java'],
  },
  {
    id: 'resume',
    title: 'Resume',
    description: 'Download my professional resume and CV',
    icon: FileText,
    type: 'App',
    keywords: ['resume', 'cv', 'download', 'pdf', 'experience', 'skills'],
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch via email or phone',
    icon: Mail,
    type: 'App',
    keywords: ['contact', 'email', 'phone', 'github', 'justin31tarca@gmail.com', '09126039520'],
  },
  // Quick actions / sections
  {
    id: 'homeease',
    title: 'HomeEase Project',
    description: 'Web-based homeowner information and reservation system',
    icon: ExternalLink,
    type: 'Project',
    keywords: ['homeease', 'react', 'typescript', 'django', 'project'],
    action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
  {
    id: 'banking',
    title: 'Banking Application',
    description: 'Java OOP banking system with MySQL',
    icon: ExternalLink,
    type: 'Project',
    keywords: ['banking', 'java', 'oop', 'mysql', 'project'],
    action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
];

export default function SearchModal({ onClose, onOpenWindow }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchableItems);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(searchableItems);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchableItems.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(keyword => keyword.includes(lowerQuery))
    );

    setResults(filtered);
  }, [query]);

  const handleItemClick = (item: typeof searchableItems[0]) => {
    if (item.action) {
      item.action();
      onClose();
    } else if (item.type === 'App') {
      onOpenWindow(item.id);
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-neutral-200 dark:border-neutral-700">
          <Search size={20} className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps, projects, skills..."
            className="flex-1 bg-transparent text-neutral-800 dark:text-neutral-100 outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors flex-shrink-0"
            aria-label="Close search"
          >
            <X size={18} className="text-neutral-500 dark:text-neutral-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto scrollbar-thin">
          {results.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                No results found for "{query}"
              </p>
            </div>
          ) : (
            <div className="p-2">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="w-full flex items-center gap-4 p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors text-left"
                >
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-neutral-800 dark:text-neutral-100 text-sm">
                        {item.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="p-3 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
            Press <kbd className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-700 dark:text-neutral-300 font-mono">ESC</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
