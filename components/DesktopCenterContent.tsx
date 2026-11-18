'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, Code, Award, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface DesktopCenterContentProps {
  onOpenWindow?: (windowId: string) => void;
}

const projects = [
  {
    id: 1,
    name: 'HomeEase',
    subtitle: 'Web-Based Homeowner Information and Reservation System',
    description: 'Developed core system features and workflows, enhancing functionality for a homeowner information and reservation platform. Designed UI/UX layouts and frontend components, improving usability, navigation, and user experience.',
    role: 'Web Developer',
    technologies: ['React', 'TypeScript', 'Django REST Framework'],
    highlights: [
      'Developed core system features and workflows',
      'Designed UI/UX layouts and frontend components',
      'Integrated frontend with backend services',
      'Enhanced functionality and user experience'
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Banking Application',
    subtitle: 'Java OOP Banking System',
    description: 'Developed a comprehensive Java banking application using object-oriented programming principles. Organized code into separate classes for maintainability. Used MySQL for data management and XAMPP for the local database environment.',
    role: 'Java Developer',
    technologies: ['Java', 'OOP', 'MySQL', 'XAMPP', 'IntelliJ IDEA'],
    highlights: [
      'Implemented OOP design patterns',
      'MySQL database integration',
      'XAMPP local environment setup',
      'TESDA Training certification'
    ],
    gradient: 'from-orange-500 to-red-500',
  },
];

const timeline = [
  {
    id: 1,
    type: 'work' as const,
    title: 'IT Intern / OJT',
    organization: 'Department of Health',
    location: 'Philippines',
    period: 'March 2026 – July 2026',
    description: 'WordPress website management, content migration, and SEO optimization for DOH offices and resources.',
    achievements: [
      'Managed WordPress website content and page updates for DOH offices',
      'Migrated 661 publication posts with SEO improvements',
      'Improved content structure across 400+ pages',
      'Recreated website page designs for visual consistency'
    ],
    icon: Briefcase,
    color: 'blue',
  },
  {
    id: 2,
    type: 'education' as const,
    title: 'HomeEase Project',
    organization: 'Academic Project',
    location: 'Philippines',
    period: '2026',
    description: 'Web-based homeowner information and reservation system developed as academic project.',
    achievements: [
      'Full-stack web development with React and Django',
      'UI/UX design and frontend implementation',
      'Backend integration and API development'
    ],
    icon: Code,
    color: 'cyan',
  },
  {
    id: 3,
    type: 'work' as const,
    title: 'Crew Member',
    organization: "McDonald's, Intramuros Muralla",
    location: 'Manila, Philippines',
    period: 'February 2023 – July 2026',
    description: 'Managed customer orders and operational tasks in fast-paced environment, maintaining efficient service and teamwork.',
    achievements: [
      'Managed multiple operational tasks efficiently',
      'Maintained consistent service quality',
      'Contributed to smooth daily store operations'
    ],
    icon: Briefcase,
    color: 'yellow',
  },
  {
    id: 4,
    type: 'education' as const,
    title: 'Java Programming NC III',
    organization: 'TESDA',
    location: 'Philippines',
    period: '2025',
    description: 'Completed comprehensive Java programming training covering OOP, design patterns, and application development.',
    achievements: [
      'Java OOP fundamentals',
      'Object-Oriented Analysis and Design',
      'Banking application development'
    ],
    icon: GraduationCap,
    color: 'green',
  },
  {
    id: 5,
    type: 'education' as const,
    title: 'AWS Cloud Quest: Cloud Practitioner',
    organization: 'Amazon Web Services',
    location: 'Online',
    period: '2024',
    description: 'Completed AWS Cloud Practitioner training and earned certification badge.',
    achievements: [
      'Cloud computing fundamentals',
      'AWS services and architecture',
      'Cloud practitioner certification'
    ],
    icon: Award,
    color: 'orange',
  },
];

const certificates = [
  {
    id: 1,
    name: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services Training and Certification',
    date: '2024',
    type: 'Training Badge',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 2,
    name: 'Java Programming NC III',
    issuer: 'TESDA',
    date: '2025',
    type: 'National Certification',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 3,
    name: 'ServiceNow Fundamentals',
    issuer: 'ServiceNow',
    date: '2024',
    type: 'Webinar Completion',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    name: 'Generative AI in Software Development',
    issuer: 'Technical Webinar',
    date: '2024',
    type: 'Webinar Completion',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 5,
    name: 'Data Privacy & Security Awareness',
    issuer: 'Technical Webinar',
    date: '2024',
    type: 'Webinar Completion',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function DesktopCenterContent({ onOpenWindow }: DesktopCenterContentProps) {
  const isMobile = useIsMobile();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];

  // Render center content differently on mobile
  if (isMobile) {
    return (
      <div className="px-4 pt-[280px] pb-20 space-y-6">
        {/* Mobile: Featured Projects Section */}
        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-600 px-4 py-3">
            <div className="flex items-center gap-2">
              <Code size={18} className="text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">Featured Projects</h2>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {projects.map((project) => (
              <div key={project.id} className={`bg-gradient-to-r ${project.gradient} rounded-lg p-4 text-white`}>
                <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                <p className="text-xs opacity-90 mb-2">{project.subtitle}</p>
                <p className="text-xs opacity-80 mb-3">{project.role}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Professional Timeline */}
        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-600 px-4 py-3">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">Professional Timeline</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full bg-${item.color}-500 text-white flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={16} />
                    </div>
                    {item.id !== timeline[timeline.length - 1].id && (
                      <div className="w-0.5 h-full bg-neutral-200 dark:bg-neutral-600 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">{item.organization}</p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Certificates */}
        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-600 px-4 py-3">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">Certificates</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 gap-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                  <div className={`bg-gradient-to-br ${cert.color} p-3 h-20 flex items-center justify-center`}>
                    <Award size={28} className="text-white opacity-90" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-100 mb-1 line-clamp-2">{cert.name}</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{cert.issuer}</p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-32 right-96 top-32 bottom-16 overflow-y-auto overflow-x-hidden scrollbar-thin">
      <div className="max-w-5xl mx-auto space-y-8 pb-8">
        
        {/* SECTION 1: FEATURED PROJECTS CAROUSEL */}
        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          {/* Carousel Header */}
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Code size={20} className="text-neutral-700 dark:text-neutral-300" />
                <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Featured Projects</h2>
              </div>
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentProjectIndex
                        ? 'w-8 bg-neutral-800 dark:bg-neutral-300'
                        : 'w-2 bg-neutral-400 dark:bg-neutral-600 hover:bg-neutral-600 dark:hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="relative">
            {/* Project Preview */}
            <div className="p-6">
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-r ${currentProject.gradient} rounded-lg p-6 mb-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{currentProject.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{currentProject.subtitle}</p>
                    <p className="text-xs opacity-80 font-medium">{currentProject.role}</p>
                  </div>
                  <button
                    onClick={() => onOpenWindow?.('projects')}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    title="View all projects"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {currentProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-neutral-400 dark:text-neutral-500">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-neutral-700/90 hover:bg-white dark:hover:bg-neutral-600 rounded-full shadow-lg transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} className="text-neutral-700 dark:text-neutral-300" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-neutral-700/90 hover:bg-white dark:hover:bg-neutral-600 rounded-full shadow-lg transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={20} className="text-neutral-700 dark:text-neutral-300" />
            </button>
          </div>
        </div>

        {/* SECTION 2: PROFESSIONAL TIMELINE */}
        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Professional Timeline</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const colorClasses = {
                  blue: 'bg-blue-500 text-white',
                  cyan: 'bg-cyan-500 text-white',
                  yellow: 'bg-yellow-500 text-white',
                  green: 'bg-green-500 text-white',
                  orange: 'bg-orange-500 text-white',
                };

                return (
                  <div key={item.id} className="flex gap-4">
                    {/* Timeline Icon */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Icon size={20} />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-neutral-200 dark:bg-neutral-600 mt-2" />
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.organization}</p>
                        </div>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap ml-4">
                          {item.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                        {item.description}
                      </p>

                      {item.achievements && (
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                              <span className="text-neutral-400 dark:text-neutral-500 mt-0.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 3: CERTIFICATES AND ACHIEVEMENTS */}
        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Award size={20} className="text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Certificates & Achievements</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                >
                  {/* Certificate Card Header with Gradient */}
                  <div className={`bg-gradient-to-br ${cert.color} p-4 h-24 flex items-center justify-center relative overflow-hidden`}>
                    <Award size={32} className="text-white opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Certificate Details */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-1 line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500 dark:text-neutral-500">{cert.date}</span>
                      <span className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded">
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-neutral-900/5 dark:bg-neutral-100/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
