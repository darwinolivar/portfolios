import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useFadeInOnScroll from "./hooks/useFadeInOnScroll.js";
import initPortfolioScripts from "./utils/script.js";
import { useEffect } from "react";

const App = () => {
  useFadeInOnScroll();

  useEffect(() => initPortfolioScripts(), []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
