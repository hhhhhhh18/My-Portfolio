import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import BackgroundMusic from "./components/BackgroundMusic";
function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <BackgroundMusic />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
