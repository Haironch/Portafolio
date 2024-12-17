import React from "react";
import Bodyhero from "./pages_components/Bodyhero";
import Navbar from "../components/Navbar";
import Skills from "./pages_components/Skills";
import Skillsgallery from "./pages_components/Skillsgallery";
import Articles from "./pages_components/Articles";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-bgDark overflow-x-hidden scroll-smooth">
      <Navbar />
      
      <main className="relative w-full">
        {/* Hero section sin padding vertical para que se ajuste directamente debajo del navbar */}
        <section id="bodyhero" className="scroll-mt-[77px]">
          <Bodyhero />
        </section>

        {/* Secciones con espacio vertical entre ellas */}
        <section id="skills" className="scroll-mt-[77px] pt-16 pb-8">
          <Skills />
        </section>

        <section id="skillsgallery" className="scroll-mt-[77px] pt-8 pb-8">
          <Skillsgallery />
        </section>

        <section id="articles" className="scroll-mt-[77px] pt-8 pb-16">
          <Articles />
        </section>

        <section id="footer" className="scroll-mt-[77px] pt-8 pb-16">
        <Footer />
      </section>

      </main>

      
    </div>
  );
};

export default Home;