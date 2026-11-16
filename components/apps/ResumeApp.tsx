'use client';

import { Download, Printer, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

export default function ResumeApp() {
  const isMobile = useIsMobile();
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'LordJustinBernal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleOpenExternal = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className={`bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 flex items-center ${
        isMobile ? 'px-2 py-2 gap-1 flex-wrap' : 'px-4 py-3 gap-2'
      }`}>
        <button 
          onClick={handleDownload}
          className={`bg-neutral-800 dark:bg-neutral-700 text-white rounded hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors flex items-center gap-2 ${
            isMobile ? 'flex-1 px-3 py-2.5 text-xs justify-center' : 'px-4 py-2 text-sm'
          }`}
        >
          <Download size={isMobile ? 14 : 16} />
          {!isMobile && 'Download PDF'}
        </button>
        {!isMobile && (
          <>
            <button 
              onClick={handlePrint}
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-sm rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
            >
              <Printer size={16} />
              Print
            </button>
            <button 
              onClick={handleOpenExternal}
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-sm rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Open External
            </button>
          </>
        )}
      </div>

      {/* Resume Content */}
      <div className={`flex-1 overflow-auto bg-neutral-100 dark:bg-neutral-900 ${
        isMobile ? 'p-2' : 'p-8'
      }`}>
        <div className={`mx-auto bg-white dark:bg-neutral-800 shadow-lg ${
          isMobile ? 'max-w-full p-6 text-sm' : 'max-w-4xl p-12'
        }`}>
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-2 border-neutral-800 dark:border-neutral-600">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">LORD JUSTIN REIGH T. BERNAL</h1>
            <div className="flex justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <span>Manila, Philippines</span>
              <span>•</span>
              <span>[Contact info in PDF]</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase">Summary</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              IT graduate with hands-on experience developing web-based systems through academic projects and internship training, 
              along with practical IT support experience. Experienced with PHP, JavaScript, Python, React, Django, HTML/CSS, and MySQL, 
              with practical exposure to WordPress development, UI/UX design, database management, and technical troubleshooting. 
              Uses AI-assisted development tools for coding, debugging, and problem-solving, seeking an entry-level IT or technology role 
              where I can apply my technical skills, contribute to practical solutions, and continue developing professionally.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase">Technical Skills</h2>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Programming & Web Development</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">C++, Python, PHP, JavaScript, HTML5, CSS3, React, Django</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Database Management</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">MySQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">AI-Assisted Development</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">AI Coding Assistants, Code Generation, Code Debugging</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Development Tools & IDEs</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Visual Studio, Visual Basic, Code::Blocks, Eclipse</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">IT Support & Systems</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Computer Hardware/Software Troubleshooting, Windows OS Installation & Configuration, Microsoft Office</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Professional Skills</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Problem-Solving, Analytical Thinking, Teamwork, Communication, Adaptability, Time Management</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase">Work Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">IT Intern / OJT</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">Department of Health</p>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">March 2026 – July 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Managed WordPress website content and page updates for DOH offices and resources, improving content accuracy and consistency</li>
                <li>Migrated 661 publication posts and assisted with SEO improvements across approximately 400 pages, improving content structure and online discoverability</li>
                <li>Recreated website page designs in WordPress based on provided references, improving visual consistency and usability across website pages</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Freelance Computer Technician / IT Support</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">On-Call / Freelance</p>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">Ongoing</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Diagnosed and resolved hardware and software issues on computers and mobile devices, restoring system functionality for clients</li>
                <li>Installed and configured Windows operating systems, software, and hardware components, preparing systems for reliable use and proper performance</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Crew Member</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">McDonald's, Intramuros Muralla</p>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">February 2023 – July 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Managed customer orders and multiple operational tasks in a fast-paced environment, maintaining efficient service and effective teamwork</li>
                <li>Contributing to smooth daily store operations and consistent service quality</li>
              </ul>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase">Academic Projects</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">HomeEase: Web-Based Homeowner Information and Reservation System</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">Role: Web Developer | Tech Stack: React, TypeScript, Django REST Framework</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Developed core system features and workflows, enhancing functionality for a homeowner information and reservation platform</li>
                <li>Designed UI/UX layouts and frontend components, improving usability, navigation, and user experience</li>
                <li>Integrated frontend components with backend services, ensuring consistent functionality across system features</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase">Education</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Bachelor of Science in Information Technology (BSIT)</h3>
              <p className="text-neutral-600 dark:text-neutral-300">Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST) – Manila</p>
              <span className="text-sm text-neutral-600 dark:text-neutral-300">2022 – 2026</span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2"><strong>Relevant Coursework:</strong> Software Development, Web Programming, Database Management, Network Administration, Systems Analysis</p>
            </div>
          </div>

          {/* Training & Languages */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase">Training & Languages</h2>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Languages</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">English, Tagalog</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Technical Training & Webinars</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  ServiceNow Fundamentals & Platform Automation • Generative AI in Software Development • 
                  Data Privacy & Security Awareness • Project Management Methodologies • AI Technology
                </p>
              </div>
            </div>
          </div>

          {/* Download Notice */}
          <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-700 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
              This is a preview with contact information hidden for privacy.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Click <strong>"Download PDF"</strong> above to get the full resume with complete contact details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
