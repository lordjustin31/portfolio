import { useIsMobile } from '@/hooks/useMediaQuery';

const skills = {
  frontend: [
    { name: 'React', context: 'Building interactive UIs', years: 3 },
    { name: 'Next.js', context: 'Server-side rendering', years: 2 },
    { name: 'TypeScript', context: 'Type-safe development', years: 2 },
    { name: 'Tailwind CSS', context: 'Utility-first styling', years: 2 },
    { name: 'HTML/CSS', context: 'Semantic markup', years: 4 },
    { name: 'JavaScript', context: 'Core language', years: 4 },
  ],
  backend: [
    { name: 'Node.js', context: 'Server applications', years: 2 },
    { name: 'Express', context: 'REST APIs', years: 2 },
    { name: 'Firebase', context: 'Backend services', years: 1 },
  ],
  tools: [
    { name: 'Git', context: 'Version control', years: 3 },
    { name: 'VS Code', context: 'Code editor', years: 4 },
    { name: 'Figma', context: 'Design tool', years: 2 },
    { name: 'Chrome DevTools', context: 'Debugging', years: 3 },
  ],
  other: [
    { name: 'Responsive Design', context: 'Mobile-first approach' },
    { name: 'Web Accessibility', context: 'WCAG standards' },
    { name: 'Performance', context: 'Core Web Vitals' },
    { name: 'SEO', context: 'Search optimization' },
  ],
};

export default function SkillsApp() {
  const isMobile = useIsMobile();
  
  return (
    <div className={isMobile ? 'p-4 space-y-4' : 'p-6 space-y-6'}>
      <div>
        <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-2 ${
          isMobile ? 'text-xl' : 'text-2xl'
        }`}>Skills & Technologies</h2>
        <p className={`text-neutral-600 dark:text-neutral-300 ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>My technical expertise and areas of focus</p>
      </div>

      <div className="grid gap-6">
        {/* Frontend */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Frontend Development
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.frontend.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>{skill.name}</h4>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{skill.years} years</span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Backend Development
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.backend.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>{skill.name}</h4>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{skill.years} years</span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Tools & Workflow
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.tools.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>{skill.name}</h4>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{skill.years} years</span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Additional Skills
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.other.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-1 ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}>{skill.name}</h4>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
