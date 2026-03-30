import React, { useState } from "react";

const skillsData = [
  {
    category: "Programming Languages",
    description: "Proficiency in multiple programming languages.",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "C", level: 85 },
      { name: "JavaScript", level: 98 },
    ],
    type: "hero", // Full-width top card
  },
  {
    category: "Software Engineering",
    description: "Core concepts and system fundamentals.",
    skills: [
      { name: "Operating Systems", level: 99 },
      { name: "Computer Networks", level: 99 },
      { name: "DBMS", level: 95 },
      { name: "OOPS", level: 99 },
      { name: "DSA", level: 95 },
    ],
  },

  {
    category: "Web Development",
    description: "Building responsive and interactive web apps.",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "FastAPI", level: 80 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 80 },
    ],
  },

  {
    category: "Data Science",
    description: "Data processing, analysis, and visualization.",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 95 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
      { name: "Power BI", level: 80 },
      { name: "Tabluea", level: 80 },
    ],
  },

  {
    category: "Cloud",
    description: "Cloud services and infrastructure management.",
    skills: [
      { name: "Google Cloud", level: 98 },
      { name: "Azure", level: 7 },
      { name: "AWS", level: 50 },
    ],
  },

  {
    category: "Machine Learning",
    description: "Building models and optimizing performance.",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "Keras", level: 80 },
      { name: "XGBoost", level: 75 },
      { name: "Azure ML", level: 65 },
    ],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`${
                group.type === "hero" ? "md:col-span-3" : "md:col-span-1"
              } bg-[#111111] border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center 
                transition-all duration-500 ease-out transform cursor-default
                hover:-translate-y-3 hover:border-purple-500/50 
                hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)] group`}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {group.category}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm mb-10 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSkill(selectedSkill === skill.name ? null : skill.name);
                      }}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedSkill === skill.name
                          ? "bg-purple-600 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)] scale-110 text-white"
                          : "bg-[#1a1a1a] border-gray-700 hover:border-purple-500 text-purple-300 hover:scale-105 active:scale-95"
                      }`}
                    >
                      {skill.name}
                    </button>
                    
                    {/* Accuracy Popover (Visible on Click) */}
                    {selectedSkill === skill.name && (
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 bg-gray-900 border border-purple-500 rounded-xl p-3 shadow-2xl z-20 animate-pop-in">
                        <div className="flex justify-between text-[11px] mb-2">
                          <span className="text-gray-400 font-semibold uppercase tracking-wider text-[9px]">Level</span>
                          <span className="text-purple-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        {/* Triangle Arrow Below Popover */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 border-r border-b border-purple-500 rotate-45"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Animations */}
      <style jsx>{`
        @keyframes pop-in {
          0% { opacity: 0; transform: translate(-50%, 15px) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;