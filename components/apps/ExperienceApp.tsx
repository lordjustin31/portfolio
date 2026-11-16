import { useIsMobile } from '@/hooks/useMediaQuery';

const experiences = [
  {
    company: 'Tech Startup Inc.',
    position: 'Senior Frontend Developer',
    date: '2024 - Present',
    responsibilities: [
      'Lead frontend architecture decisions',
      'Mentor junior developers',
      'Implement new features using React and Next.js',
      'Optimize application performance',
    ],
    achievements: [
      'Reduced page load time by 40%',
      'Implemented design system used across 5 products',
      'Led migration from Create React App to Next.js',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    company: 'Digital Agency Co.',
    position: 'Frontend Developer',
    date: '2022 - 2024',
    responsibilities: [
      'Developed client websites and web applications',
      'Collaborated with designers and backend developers',
      'Ensured cross-browser compatibility',
      'Maintained and updated existing projects',
    ],
    achievements: [
      'Delivered 15+ client projects on time',
      'Improved workflow efficiency by 25%',
      'Implemented responsive design best practices',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'WordPress'],
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    date: '2021 - 2022',
    responsibilities: [
      'Built custom websites for small businesses',
      'Provided technical consultation',
      'Managed client relationships',
    ],
    achievements: [
      'Successfully completed 20+ projects',
      'Maintained 5-star client rating',
      'Built long-term client relationships',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];

export default function ExperienceApp() {
  const isMobile = useIsMobile();
  
  return (
    <div className={isMobile ? 'p-4 space-y-4' : 'p-6 space-y-6'}>
      <div>
        <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-2 ${
          isMobile ? 'text-xl' : 'text-2xl'
        }`}>Professional Experience</h2>
        <p className={`text-neutral-600 dark:text-neutral-300 ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>My career journey and accomplishments</p>
      </div>

      <div className={isMobile ? 'space-y-4' : 'space-y-6'}>
        {experiences.map((exp, index) => (
          <div key={index} className={`border-l-2 border-neutral-300 dark:border-neutral-600 relative ${
            isMobile ? 'pl-4 pb-4' : 'pl-6 pb-6'
          }`}>
            <div className={`absolute bg-neutral-300 dark:bg-neutral-600 rounded-full top-1.5 ${
              isMobile ? 'w-2.5 h-2.5 -left-[6px]' : 'w-3 h-3 -left-[7px]'
            }`} />
            
            <div className={isMobile ? 'mb-3' : 'mb-4'}>
              <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                isMobile ? 'text-base' : 'text-lg'
              }`}>{exp.position}</h3>
              <p className={`text-neutral-600 dark:text-neutral-300 ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>{exp.company}</p>
              <p className={`text-neutral-500 dark:text-neutral-400 mt-1 ${
                isMobile ? 'text-xs' : 'text-sm'
              }`}>{exp.date}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold text-neutral-700 dark:text-neutral-300 mb-2 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>Responsibilities</h4>
                <ul className={`list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`font-semibold text-neutral-700 dark:text-neutral-300 mb-2 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>Key Achievements</h4>
                <ul className={`list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`font-semibold text-neutral-700 dark:text-neutral-300 mb-2 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700 ${
                        isMobile ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
