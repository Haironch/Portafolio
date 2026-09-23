import React from "react";
import Bodyhero from "./pages_components/Bodyhero";
import Stats from "./pages_components/Stats";
import AboutTimeline from "./pages_components/AboutTimeline";
import Skills from "./pages_components/Skills";
import Skillsgallery from "./pages_components/Skillsgallery";
import Articles from "./pages_components/Articles";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-bgDark overflow-x-hidden scroll-smooth">
      <main className="relative w-full">
        <section id="bodyhero">
          <Bodyhero />
        </section>

        <Stats />

        <section id="about" className="scroll-mt-[77px]">
          <AboutTimeline />
        </section>

        <section id="skills" className="scroll-mt-[77px]">
          <Skills />
        </section>

        <section id="skillsgallery" className="scroll-mt-[77px]">
          <Skillsgallery />
        </section>

        <section id="articles" className="scroll-mt-[77px]">
          <Articles />
        </section>

        <section id="footer" className="scroll-mt-[77px]">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;
