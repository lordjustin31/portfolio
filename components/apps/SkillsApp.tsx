import { useIsMobile } from '@/hooks/useMediaQuery';

const skills = {
  programming: [
    { name: 'Java', context: 'OOP, Banking Applications', level: 'Proficient' },
    { name: 'PHP', context: 'Web Development', level: 'Proficient' },
    { name: 'Python', context: 'Scripting, Django', level: 'Proficient' },
    { name: 'JavaScript', context: 'Frontend & Backend', level: 'Proficient' },
    { name: 'C++', context: 'Programming Fundamentals', level: 'Familiar' },
  ],
  webDevelopment: [
    { name: 'React', context: 'UI Development', level: 'Proficient' },
    { name: 'TypeScript', context: 'Type-safe Development', level: 'Proficient' },
    { name: 'Django REST Framework', context: 'Backend APIs', level: 'Proficient' },
    { name: 'HTML5 & CSS3', context: 'Web Standards', level: 'Proficient' },
    { name: 'WordPress', context: 'Content Management', level: 'Proficient' },
    { name: 'Next.js', context: 'React Framework', level: 'Familiar' },
    { name: 'Node.js', context: 'Backend Development', level: 'Familiar' },
  ],
  database: [
    { name: 'MySQL', context: 'Relational Database', level: 'Proficient' },
    { name: 'MariaDB', context: 'Database Management', level: 'Familiar' },
  ],
  tools: [
    { name: 'Git', context: 'Version Control', level: 'Proficient' },
    { name: 'Postman', context: 'API Testing', level: 'Proficient' },
    { name: 'IntelliJ IDEA', context: 'Java Development', level: 'Proficient' },
    { name: 'Visual Studio', context: 'IDE', level: 'Proficient' },
    { name: 'Claude & ChatGPT', context: 'AI-Assisted Development', level: 'Proficient' },
    { name: 'TeamViewer', context: 'Remote Support', level: 'Proficient' },
  ],
  professional: [
    { name: 'Problem-Solving', context: 'Technical troubleshooting' },
    { name: 'Analytical Thinking', context: 'System analysis' },
    { name: 'Team Collaboration', context: 'Agile workflows' },
    { name: 'Communication', context: 'Technical documentation' },
    { name: 'Adaptability', context: 'Learning new technologies' },
    { name: 'Time Management', context: 'Project delivery' },
  ],
};

export default function SkillsApp() {
  const isMobile = useIsMobile();
  
  return (
    <div className={isMobile ? 'p-4 space-y-4' : 'p-6 space-y-6'}>
      <div>
        <h2 className={`font-bold text-neutral-800 dark:text-neutral-100 mb-2 ${
          isMobile ? 'text-xl' : 'text-2xl'
        }`}>Technical Skills</h2>
        <p className={`text-neutral-600 dark:text-neutral-300 ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>Comprehensive technical skill set and professional competencies</p>
      </div>

      <div className="grid gap-6">
        {/* Programming Languages */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Programming Languages
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.programming.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>{skill.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                    {skill.level}
                  </span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Web Development
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.webDevelopment.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>{skill.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    skill.level === 'Proficient' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Database Management
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.database.map((skill) => (
              <div key={skill.name} className={`bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded ${
                isMobile ? 'p-3' : 'p-4'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold text-neutral-800 dark:text-neutral-100 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>{skill.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    skill.level === 'Proficient' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  }`}>
                    {skill.level}
                  </span>
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
            Development Tools & IT Support
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
                  <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                    {skill.level}
                  </span>
                </div>
                <p className={`text-neutral-600 dark:text-neutral-300 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>{skill.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className={`font-semibold text-neutral-800 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Professional Skills
          </h3>
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {skills.professional.map((skill) => (
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
