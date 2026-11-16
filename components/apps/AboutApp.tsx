export default function AboutApp() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-3xl font-bold text-neutral-600">LJ</span>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-neutral-800 mb-1">Lord Justin Bernal</h2>
          <p className="text-neutral-600 mb-4">Frontend Developer / UI Designer</p>
          
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-neutral-500">Location</p>
              <p className="text-neutral-800 font-medium">Philippines</p>
            </div>
            <div>
              <p className="text-neutral-500">Experience</p>
              <p className="text-neutral-800 font-medium">3+ Years</p>
            </div>
            <div>
              <p className="text-neutral-500">Specialization</p>
              <p className="text-neutral-800 font-medium">Frontend</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-6">
        <h3 className="text-lg font-semibold text-neutral-800 mb-3">About Me</h3>
        <p className="text-neutral-700 leading-relaxed">
          I'm a passionate frontend developer with a strong focus on creating beautiful, 
          functional, and user-friendly web applications. I specialize in modern web technologies 
          including React, Next.js, and TypeScript. I love building interfaces that not only 
          look great but provide exceptional user experiences.
        </p>
      </div>

      <div className="border-t border-neutral-200 pt-6">
        <h3 className="text-lg font-semibold text-neutral-800 mb-3">Current Focus</h3>
        <p className="text-neutral-700 leading-relaxed">
          Currently exploring advanced UI/UX patterns, accessibility best practices, 
          and performance optimization techniques. Always learning and improving my craft.
        </p>
      </div>

      <div className="border-t border-neutral-200 pt-6">
        <h3 className="text-lg font-semibold text-neutral-800 mb-3">Interests</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded text-sm border border-neutral-200">
            Web Development
          </span>
          <span className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded text-sm border border-neutral-200">
            UI/UX Design
          </span>
          <span className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded text-sm border border-neutral-200">
            Open Source
          </span>
          <span className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded text-sm border border-neutral-200">
            Tech Community
          </span>
        </div>
      </div>
    </div>
  );
}
