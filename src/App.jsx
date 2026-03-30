import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
