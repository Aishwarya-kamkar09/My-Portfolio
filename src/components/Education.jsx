import React from "react";

const educationData = [
  {
    year: "Sep 2024 – Aug 2028",
    degree: "BTech in Electronics and Computer Engineering",
    institution: "Visvesvaraya Technological University",
    location: "Belgaum, Karnataka, India",
    details: "I am currently pursuing my Bachelor of Engineering (B.E.), in my second year, maintaining a CGPA of 8.0/10.",
    linkText: "Transcript",
    isActive: true, 
  },
  {
    year: "Graduated July 2023",
    degree: "Pre-Univercity",
    institution: "Govt. Chintamanrao Pre-University College",
    location: "Belgaum, Karnataka, India",
    details: "Completed secondary education with a focus on Science and Mathematics.",
    linkText: "Certificate",
    isActive: false,
  },
  {
    year: "Graduated April 2021",
    degree: "High School",
    institution: "Govt. Saraswati Girls PUC College",
    location: "Belgaum, Karnataka, India",
    details: "Completed secondary education with a focus on Science and Mathematics.",
    linkText: "Certificate",
    isActive: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Education
        </h2>

        <div className="flex flex-col gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-[#111111] border-2 cursor-default
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(147,51,234,0.2)]
                ${
                  item.isActive 
                    ? "border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.15)]" 
                    : "border-gray-800 hover:border-purple-500/50"
                }`}
            >
              {/* Header: Degree and Date */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {item.degree}
                </h3>
                <span className="text-gray-500 text-sm font-medium mt-1 md:mt-0">
                  {item.year}
                </span>
              </div>

              {/* Institution and Location */}
              <div className="mb-4">
                <h4 className="text-purple-400 font-semibold text-lg">
                  {item.institution}
                </h4>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {item.details}
              </p>

              {/* Bottom Link */}
              <a
                href="#"
                className="text-pink-500 font-medium hover:text-pink-400 transition-colors inline-flex items-center gap-1"
              >
                {item.linkText} 
                <span className="text-xs">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;