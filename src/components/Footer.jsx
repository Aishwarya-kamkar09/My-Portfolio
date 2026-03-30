import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Aishwarya. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-3">
        <a href="https://github.com/Aishwarya-kamkar09" className="hover:text-purple-400">GitHub</a>
        <a href="https://www.linkedin.com/in/aishwarya-kamkar-85a4533a0/" className="hover:text-purple-400">LinkedIn</a>
        <a href="mailto:aishwaryakamkar45@gmail.com" className="hover:text-purple-400">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
