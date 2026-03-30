import React, { useState } from "react";
import { Code, Eye } from "lucide-react";

const projects = [
  {
    title: "Wisper-Clone",
    category: "Web",
    desc: "Implemented a real-time desktop speech-to-text system that enables continuous transcription across applications with focus detection, reducing manual typing and context-switching by approximately 30%. Optimized audio processing pipelines with Rust, improving speed by around 25%, and integrated the Deepgram API to achieve near 90% transcription accuracy.",
    image: "WisperClone_Image.png",
    github: "https://github.com/Aishwarya-kamkar09/Wisper_clone",
    live: "https://drive.google.com/file/d/117aWtmC-fLOjADyTTlKWzuT-AdSLr_ou/view?usp=drive_link",
  },
  {
    title: "JuniorConnect",
    category: "Web",
    desc: "Developed a scalable MVP connecting juniors and seniors for mentorship and career guidance, increasing user engagement by approximately 30% through real-time chat and Q&A using Socket.IO. Implemented secure Google OAuth, JWT authentication, and role-based access control.",
    image: "jc.jpeg",
    github: "https://github.com/Aishwarya-kamkar09/JuniorConnect",
    live: "https://juniorconnect.onrender.com/",
  },
  {
    title: "CineMatch-AI",
    category: "AI/ML",
    desc: "Built a content-based movie recommendation system leveraging cosine similarity on metadata features to enhance recommendation relevance through feature engineering and similarity scoring. Processed datasets efficiently using Pandas and NumPy.",
    image: "Movie_Image.png",
    github: "#",
    live: "https://cinimatch-ai.onrender.com/",
  },
  {
    title: "Apna Video Call",
    category: "Web",
    desc: "Developed a full-stack, real-time multi-user video conferencing platform with low-latency streaming (under 200ms) using WebRTC and Socket.IO, featuring mute/unmute, chat history, and dynamic room management.",
    image: "Video.jpg",
    github: "https://github.com/Aishwarya-kamkar09/VideoCall_SystemApp",
    live: "https://videocall-9vmh.onrender.com",
  },
  {
    title: "AI-FaceIllustration",
    category: "AI/ML",
    desc: "Advanced facial analysis and illustration project utilizing HuggingFace API , Canva and TensorFloe to generate stylized illustrations from real-time video feeds or uploaded images.",
    image: "ai.jpeg",
    github: "https://github.com/Aishwarya-kamkar09/AI_Face_Illustration",
    live: " https://pickabook-assignment-frontend.vercel.app/ ",
  },
  {
    title: "Wonderlust",
    category: "Web",
    desc: "Developed an Airbnb-style web application enabling users to browse, reviews and listing. Implemented user authentication, property listings, and real-time booking functionality with secure backend integration.",
    image: "airbnb.jpeg",
    github: "https://github.com/Aishwarya-kamkar09/ProjectAirbnb",
    live: "https://airbnbproject-4-fpxf.onrender.com",
  },
];

const ProjectCard = ({ project }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative bg-[#111111] rounded-2xl border border-gray-800/50 overflow-hidden group transition-all duration-500 hover:-translate-y-3"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`,
        }}
      />

      {/* IMAGE SECTION */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900/90 rounded-full border border-purple-500/50 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 transform translate-y-8 group-hover:translate-y-0"
          >
            <Code size={22} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900/90 rounded-full border border-purple-500/50 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 delay-75"
          >
            <Eye size={22} />
          </a>
        </div>
      </div>

      {/* TEXT CONTENT - Tech tags removed as requested */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
          {project.desc}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI/ML", "Web"];

  // Filter logic
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-purple-500 bg-purple-500/10 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;