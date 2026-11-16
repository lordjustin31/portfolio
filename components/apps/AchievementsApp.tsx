import { Award, Trophy, Star } from 'lucide-react';

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
  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">Achievements & Certifications</h2>
        <p className="text-neutral-600 dark:text-neutral-300">Recognition and professional development milestones</p>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Achievements</h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <achievement.icon size={24} className="text-neutral-600 dark:text-neutral-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">{achievement.title}</h4>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{achievement.date}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">{achievement.organization}</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-neutral-600 dark:text-neutral-300" />
                </div>
                <span className="font-medium text-neutral-800 dark:text-neutral-100">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
