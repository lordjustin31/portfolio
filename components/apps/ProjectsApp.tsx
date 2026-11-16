import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
    role: 'Frontend Developer',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
    date: '2026',
    problem: 'Client needed a modern, fast e-commerce solution.',
    solution: 'Built a server-side rendered platform using Next.js for optimal performance.',
    result: '50% faster load times, 30% increase in conversions.',
    demo: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard for tracking business metrics and KPIs.',
    role: 'Full Stack Developer',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    date: '2025',
    problem: 'Complex data needed to be visualized in real-time.',
    solution: 'Created interactive charts with WebSocket connections for live updates.',
    result: 'Improved decision-making speed by 40%.',
    demo: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'Collaborative task management tool for teams with real-time updates.',
    role: 'Frontend Developer',
    technologies: ['React', 'Firebase', 'Material-UI'],
    date: '2025',
    problem: 'Teams needed better project coordination.',
    solution: 'Built a real-time collaborative app with drag-and-drop functionality.',
    result: '60% improvement in team productivity.',
    demo: '#',
    source: '#',
  },
];

export default function ProjectsApp() {
  return (
    <div className="h-full bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-neutral-800">Projects</h2>
        <p className="text-sm text-neutral-600 mt-1">{projects.length} projects</p>
      </div>

      {/* Projects List */}
      <div className="p-6 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gradient-to-br from-neutral-100 to-neutral-200" />
            
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">{project.name}</h3>
                  <p className="text-sm text-neutral-600">{project.role} • {project.date}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    className="p-2 hover:bg-neutral-100 rounded transition-colors"
                    title="View Demo"
                  >
                    <ExternalLink size={16} className="text-neutral-600" />
                  </a>
                  <a
                    href={project.source}
                    className="p-2 hover:bg-neutral-100 rounded transition-colors"
                    title="Source Code"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <p className="text-neutral-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded text-xs border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <details className="text-sm">
                <summary className="cursor-pointer text-neutral-600 hover:text-neutral-800 font-medium">
                  View Details
                </summary>
                <div className="mt-3 space-y-2 text-neutral-700">
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
