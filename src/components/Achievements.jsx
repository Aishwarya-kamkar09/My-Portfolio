
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Trophy, GraduationCap, Award } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={48} className="text-purple-500" />,
    title: "Graduated with Distinction (June 2024)",
    desc: "B.E in Computer Science - 9.5/10 CGPA, ranked 2nd out of 137 students.",
  },
  {
    icon: <Trophy size={48} className="text-pink-500" />,
    title: "Global Summer of Code '24",
    desc: "Contributed to Apache Beam YAML SDK, developing key data enrichment providers.",
  },
  {
    icon: <Award size={48} className="text-purple-400" />,
    title: "Research Publication",
    desc: "Published 'Explainable AI in Healthcare' in the AIP Conference Proceedings.",
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Recent Highlights</h2>
          <p className="text-gray-500">A quick snapshot of my latest milestones</p>
        </div>

        {/* Slider Container */}
        <div className="relative bg-[#111111] border border-gray-800/50 rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl group">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center transition-all duration-500">
            {/* Animated Icon Container */}
            <div className="mb-8 p-4 bg-gray-900/50 rounded-2xl border border-gray-800 group-hover:scale-110 transition-transform duration-500">
              {highlights[currentIndex].icon}
            </div>

            {/* Text Content */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              {highlights[currentIndex].title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              {highlights[currentIndex].desc}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500 transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500 transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {highlights.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === i ? "w-8 bg-purple-500" : "w-2 bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;