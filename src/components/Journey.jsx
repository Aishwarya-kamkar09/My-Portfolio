import React, { useState } from "react";

const journeyData = [
  {
    year: "2024",
    title: "Electronic And Computer Engineering",
    desc: "Transitioned from a PCMB background into programming. Learned C, Java, and Python while building a strong foundation in logic, problem-solving, and core computer science concepts. Started Data Structures and Algorithms in Java."
  },
  {
    year: "2025",
    title: "Full Stack Developer (Beginner)",
    desc: "Built multiple web applications using HTML, CSS, JavaScript, and React. Explored backend development with Node.js and started working with databases, focusing on creating responsive and functional applications."
  },
  {
    year: "2026",
    title: "Aspiring Software Engineer",
    desc: "Currently focusing on Full Stack Development and Data Structures & Algorithms. Building projects using React.js, Node.js, and JavaScript while strengthening problem-solving skills. Also exploring Machine Learning and gaining knowledge in cybersecurity."
  },
];

const JourneyCard = ({ item, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-20 w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
      
      {/* 1. Spacing for alternating layout */}
      <div className="hidden md:block w-[45%]" />

      {/* 2. Interactive Central Dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
        <div className={`w-5 h-5 rounded-full border-4 border-[#0a0a0a] transition-all duration-500 ${
          isHovering 
          ? "bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)] scale-150" 
          : "bg-gray-800"
        }`} />
      </div>

      {/* 3. The Journey Card */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="ml-10 md:ml-0 w-full md:w-[45%] relative bg-[#111111] border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden group shadow-2xl cursor-default"
      >
        {/* Glow Follow Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.12), transparent 70%)`,
          }}
        />

        {/* Content Section */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-black text-white uppercase tracking-[0.2em] bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/20">
              {item.year}
            </span>
            <div className="h-[1px] flex-grow bg-gray-800 group-hover:bg-purple-500/30 transition-colors" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
            {item.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-[#0a0a0a] text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black mb-4 tracking-tighter">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 font-medium">The roadmap of my technical evolution and growth.</p>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Vertical Central Rail */}
          <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 via-gray-800 to-transparent opacity-30" />

          {/* Individual Milestones */}
          <div className="relative">
            {journeyData.map((item, index) => (
              <JourneyCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Footer milestone (Current status) */}
        <div className="mt-10 text-center">
            <div className="inline-block px-6 py-2 rounded-full border border-dashed border-gray-800 text-gray-600 text-xs font-bold uppercase tracking-widest">
                Ongoing Machine Learning...
            </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;