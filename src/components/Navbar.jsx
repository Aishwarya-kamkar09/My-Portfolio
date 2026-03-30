import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Journey", link: "#journey" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-purple-500 cursor-pointer">
          AK
        </div>
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((nav) => (
            <li key={nav.name} className="hover:text-purple-400 transition-colors">
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-white cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
