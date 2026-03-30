import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("publications");

  const certifications = [
    { title: "Data Structures & Algorithms", link: "https://drive.google.com/file/d/1MZG-97or7i9ghyfs-1c1d7Xj1sR5KdBS/view?usp=drive_link" },
    { title: "Full Stack Web Development", link: "/inProgress" },
  ];

  const currentData =  certifications;

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: IMAGE */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="/about-image.jpeg" 
                alt="Tech Workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              I'm a I am a passionate Software Engineer focused on Full Stack Development, skilled in C, Java, Python, HTML, CSS, and JavaScript. I enjoy building real-world applications using technologies like React, Node.js, and Next.js. Currently, I’m exploring FastAPI, Kubernetes, and AI/ML to create smarter systems, along with learning cybersecurity basics. I aim to work on impactful products and startups that solve real-world problems.
              </p>

            {/* TAB SYSTEM */}
            <div className="flex gap-6 border-b border-gray-800 mb-6">
              {/* <button 
                onClick={() => setActiveTab("publications")}
                className={`pb-2 text-sm font-semibold transition-all ${activeTab === "publications" ? "text-white border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-300"}`}
              >
                Publications
              </button> */}
              <button 
                onClick={() => setActiveTab("certifications")}
                className={`pb-2 text-sm font-semibold transition-all ${activeTab === "certifications" ? "text-white border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-300"}`}
              >
                Certifications
              </button>
            </div>

            {/* LIST ITEMS */}
            <ul className="space-y-4">
              {currentData.map((item, idx) => (
                <li key={idx} className="flex items-center group">
                  <span className="text-purple-500 mr-2">•</span>
                  <a 
                    href={item.link} 
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2 transition-colors"
                  >
                    {item.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;