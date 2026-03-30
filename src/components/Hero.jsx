import React from "react";
import { TypeAnimation } from "react-type-animation";
import Achievements from "./Achievements.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="text-white mt-2 block">
              <TypeAnimation
                sequence={[
                  "Aishwarya",
                  2000,
                  "Software Engineer",
                  2000,
                  "Data Scientist",
                  2000,
                  "AI/ML Engineer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-lg leading-relaxed">
            Turning ideas into reality with code, curiosity, and creativity.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20"
            >
              Hire Me
            </a>

            <a
              href="https://drive.google.com/file/d/1VVDN4epWXJysBjHPl0ORxaF7OuNns5ij/view?usp=drive_link"
              className="px-8 py-3 rounded-full text-white font-medium text-lg border-[1.5px] border-purple-500/50 hover:border-purple-500 transition-all duration-300 bg-transparent"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* Dark outer circle from the screenshot */}
            <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full bg-[#111111] flex items-center justify-center relative overflow-hidden">
              <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-purple-500/20">
                <img
                  src="me.webp" // Ensure this path is correct
                  alt="Aishwarya Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;