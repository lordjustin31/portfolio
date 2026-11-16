import { Award, Trophy, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

const achievements = [
  {
    title: 'Best Developer Award 2025',
    organization: 'Tech Startup Inc.',
    date: '2025',
    description: 'Recognized for outstanding contributions to the frontend team.',
    icon: Trophy,
  },
  {
    title: 'Completed Advanced React Course',
    organization: 'Online Learning Platform',
    date: '2024',
    description: 'Mastered advanced React patterns and performance optimization.',
    icon: Award,
  },
  {
    title: '5-Star Client Rating',
    organization: 'Freelance Portfolio',
    date: '2022',
    description: 'Maintained perfect client satisfaction across 20+ projects.',
    icon: Star,
  },
];

const certifications = [
  'React Developer Certification',
  'Next.js Expert',
  'TypeScript Professional',
  'Web Accessibility Specialist',
];

export default function AchievementsApp() {
  const isMobile = useIsMobile();
  
  return (
    <div className={isMobile ? 'p-4 space-y-6' : 'p-6 space-y-8'}>
      <div>
        <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-2 ${
          isMobile ? 'text-xl' : 'text-2xl'
        }`}>Achievements & Certifications</h2>
        <p className={`text-neutral-600 dark:text-neutral-300 ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>Recognition and professional development milestones</p>
      </div>

      {/* Achievements */}
      <div>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-4 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Achievements</h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow ${
                isMobile ? 'flex-col p-4 gap-3' : 'flex-row gap-4 p-4'
              }`}
            >
              <div className={`bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isMobile ? 'w-12 h-12 self-start' : 'w-12 h-12'
              }`}>
                <achievement.icon size={isMobile ? 20 : 24} className="text-neutral-600 dark:text-neutral-300" />
              </div>
              <div className="flex-1">
                <div className={`mb-1 ${isMobile ? '' : 'flex items-start justify-between'}`}>
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm mb-1' : 'text-base'
                  }`}>{achievement.title}</h4>
                  <span className={`text-neutral-500 dark:text-neutral-400 ${
                    isMobile ? 'text-xs block mb-1' : 'text-sm'
                  }`}>{achievement.date}</span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 mb-1 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{achievement.organization}</p>
                <p className={`text-neutral-700 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-4 ${
          isMobile ? 'text-base' : 'text-lg'
        }`}>Certifications</h3>
        <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-800 ${
                isMobile ? 'p-3' : 'p-4'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center flex-shrink-0 ${
                  isMobile ? 'w-7 h-7' : 'w-8 h-8'
                }`}>
                  <Award size={isMobile ? 14 : 16} className="text-neutral-600 dark:text-neutral-300" />
                </div>
                <span className={`font-medium text-neutral-800 dark:text-neutral-100 ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}>{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
