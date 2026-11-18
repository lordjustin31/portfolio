import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

const projects = [
  {
    id: 1,
    name: 'HomeEase',
    description: 'A comprehensive platform designed to bridge the gap between customers and service providers for household needs.',
    role: 'Full Stack Developer',
    technologies: ['React', 'TypeScript', 'Django REST Framework', 'MySQL'],
    date: '2024',
    problem: 'Difficulty connecting customers with reliable service providers for household needs.',
    solution: 'Developed a user-friendly web platform with real-time booking, secure payment integration, and a rating system.',
    result: 'Streamlined service booking process and improved customer-provider matching.',
    demo: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Banking Application',
    description: 'A Java-based banking system implementing core banking operations with secure transaction handling.',
    role: 'Backend Developer',
    technologies: ['Java', 'OOP', 'MySQL', 'JDBC'],
    date: '2024',
    problem: 'Need for a secure and efficient banking system to handle transactions and account management.',
    solution: 'Built a console-based banking application with deposit, withdrawal, balance inquiry, and transaction history features.',
    result: 'Demonstrated proficiency in OOP principles and database integration for financial systems.',
    demo: '#',
    source: '#',
  },
];

export default function ProjectsApp() {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-full bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <div className={`bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 ${
        isMobile ? 'px-4 py-3' : 'px-6 py-4'
      }`}>
        <h2 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Projects</h2>
        <p className={`text-neutral-600 dark:text-neutral-300 mt-1 ${
          isMobile ? 'text-xs' : 'text-sm'
        }`}>{projects.length} projects</p>
      </div>

      {/* Projects List */}
      <div className={isMobile ? 'p-4 space-y-3' : 'p-6 space-y-4'}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className={isMobile ? 'h-32' : 'h-40'} style={{
              background: 'linear-gradient(to bottom right, rgb(245 245 245), rgb(229 229 229))'
            }} />
            
            <div className={isMobile ? 'p-4' : 'p-5'}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0 mr-2">
                  <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-base' : 'text-lg'
                  }`}>{project.name}</h3>
                  <p className={`text-neutral-600 dark:text-neutral-300 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}>{project.role} • {project.date}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <a
                    href={project.demo}
                    className={`hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors ${
                      isMobile ? 'p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center' : 'p-2'
                    }`}
                    title="View Demo"
                  >
                    <ExternalLink size={isMobile ? 18 : 16} className="text-neutral-600 dark:text-neutral-300" />
                  </a>
                  <a
                    href={project.source}
                    className={`hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors ${
                      isMobile ? 'p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center' : 'p-2'
                    }`}
                    title="Source Code"
                  >
                    <svg width={isMobile ? 18 : 16} height={isMobile ? 18 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-300">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <p className={`text-neutral-700 dark:text-neutral-300 mb-4 ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-600 ${
                      isMobile ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <details className={isMobile ? 'text-xs' : 'text-sm'}>
                <summary className={`cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 font-medium ${
                  isMobile ? 'min-h-[44px] flex items-center' : ''
                }`}>
                  View Details
                </summary>
                <div className={`space-y-2 text-neutral-700 dark:text-neutral-300 ${
                  isMobile ? 'mt-2' : 'mt-3'
                }`}>
                  <div>
                    <strong>Problem:</strong> {project.problem}
                  </div>
                  <div>
                    <strong>Solution:</strong> {project.solution}
                  </div>
                  <div>
                    <strong>Result:</strong> {project.result}
                  </div>
                </div>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
