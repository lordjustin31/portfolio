import { useIsMobile } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from '../ImageModal';

export default function AboutApp() {
  const isMobile = useIsMobile();
  const [showImageModal, setShowImageModal] = useState(false);
  
  return (
    <div className={isMobile ? 'p-4 space-y-4' : 'p-6 space-y-6'}>
      <div className={`flex gap-6 ${isMobile ? 'flex-col items-center text-center' : 'items-start'}`}>
        <div 
          className={`rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-4 border-neutral-300 dark:border-neutral-600 shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all group relative ${
            isMobile ? 'w-20 h-20' : 'w-24 h-24'
          }`}
          onClick={() => setShowImageModal(true)}
          title="Click to view full size"
        >
          <Image
            src="/images/profile.jpg"
            alt="Lord Justin Reigh T. Bernal"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
          {/* Hover overlay with zoom icon */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-1 ${
            isMobile ? 'text-xl' : 'text-2xl'
          }`}>Lord Justin Reigh T. Bernal</h2>
          <p className={`text-neutral-600 dark:text-neutral-300 mb-4 ${
            isMobile ? 'text-sm' : 'text-base'
          }`}>BS Information Technology Graduate</p>
          
          <div className={`grid gap-4 text-sm ${
            isMobile ? 'grid-cols-1' : 'grid-cols-3'
          }`}>
            <div>
              <p className="text-neutral-500 dark:text-neutral-400">Location</p>
              <p className="text-neutral-800 dark:text-neutral-100 font-medium">Tondo, Manila</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-400">Email</p>
              <p className="text-neutral-800 dark:text-neutral-100 font-medium text-xs">justin31tarca@gmail.com</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-400">Phone</p>
              <p className="text-neutral-800 dark:text-neutral-100 font-medium">09126039520</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Professional Summary</h3>
        <p className={`text-neutral-700 dark:text-neutral-300 leading-relaxed ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>
          BS Information Technology graduate with hands-on experience in web development, database-driven applications, 
          WordPress website management, and technical troubleshooting through academic projects, internship training, 
          and freelance computer support. Familiar with PHP, Java, JavaScript, Python, React, Django REST Framework, and 
          MySQL, with additional training in Java object-oriented programming and analysis and design. Eager to contribute 
          technical problem-solving skills and continue developing in an entry-level software development, application 
          support, or IT role.
        </p>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Education</h3>
        <div className={`text-neutral-700 dark:text-neutral-300 ${isMobile ? 'text-sm' : 'text-base'}`}>
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">Bachelor of Science in Information Technology (BSIT)</h4>
          <p className="text-neutral-600 dark:text-neutral-400 mb-1">Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST) – Manila</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">2022 – 2026</p>
          <p className="text-sm">
            <strong>Relevant Coursework:</strong> Software Development, Web Programming, Database Management, 
            Network Administration, Systems Analysis
          </p>
        </div>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Core Competencies</h3>
        <div className="flex flex-wrap gap-2">
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Web Development
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Database Management
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            WordPress Management
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Technical Troubleshooting
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            AI-Assisted Development
          </span>
        </div>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Languages</h3>
        <div className="flex flex-wrap gap-2">
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            English
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Filipino / Tagalog
          </span>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <ImageModal
          src="/images/profile.jpg"
          alt="Lord Justin Reigh T. Bernal - Professional Photo"
          onClose={() => setShowImageModal(false)}
        />
      )}
    </div>
  );
}
