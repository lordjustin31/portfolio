import { useIsMobile } from '@/hooks/useMediaQuery';

export default function AboutApp() {
  const isMobile = useIsMobile();
  
  return (
    <div className={isMobile ? 'p-4 space-y-4' : 'p-6 space-y-6'}>
      <div className={`flex gap-6 ${isMobile ? 'flex-col items-center text-center' : 'items-start'}`}>
        <div className={`bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center flex-shrink-0 ${
          isMobile ? 'w-20 h-20' : 'w-24 h-24'
        }`}>
          <span className={`font-bold text-neutral-600 dark:text-neutral-300 ${
            isMobile ? 'text-2xl' : 'text-3xl'
          }`}>LJ</span>
        </div>
        
        <div className="flex-1 w-full">
          <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-1 ${
            isMobile ? 'text-xl' : 'text-2xl'
          }`}>Lord Justin Bernal</h2>
          <p className={`text-neutral-600 dark:text-neutral-300 mb-4 ${
            isMobile ? 'text-sm' : 'text-base'
          }`}>Frontend Developer / UI Designer</p>
          
          <div className={`grid gap-4 text-sm ${
            isMobile ? 'grid-cols-1' : 'grid-cols-3'
          }`}>
            <div>
              <p className="text-neutral-500 dark:text-neutral-400">Location</p>
              <p className="text-neutral-800 dark:text-neutral-100 font-medium">Philippines</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-400">Experience</p>
              <p className="text-neutral-800 dark:text-neutral-100 font-medium">3+ Years</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-400">Specialization</p>
              <p className="text-neutral-800 dark:text-neutral-100 font-medium">Frontend</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>About Me</h3>
        <p className={`text-neutral-700 dark:text-neutral-300 leading-relaxed ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>
          I'm a passionate frontend developer with a strong focus on creating beautiful, 
          functional, and user-friendly web applications. I specialize in modern web technologies 
          including React, Next.js, and TypeScript. I love building interfaces that not only 
          look great but provide exceptional user experiences.
        </p>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Current Focus</h3>
        <p className={`text-neutral-700 dark:text-neutral-300 leading-relaxed ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>
          Currently exploring advanced UI/UX patterns, accessibility best practices, 
          and performance optimization techniques. Always learning and improving my craft.
        </p>
      </div>

      <div className={`border-t border-neutral-200 dark:border-neutral-700 ${isMobile ? 'pt-4' : 'pt-6'}`}>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Interests</h3>
        <div className="flex flex-wrap gap-2">
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Web Development
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            UI/UX Design
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Open Source
          </span>
          <span className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
          }`}>
            Tech Community
          </span>
        </div>
      </div>
    </div>
  );
}
