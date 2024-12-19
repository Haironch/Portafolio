import React from "react";
import { Code2, Laptop, Palette } from "lucide-react";
import imgHero from "../../assets/imgs/profile.jpg";
import ContactModal from "../pages_components/ContactModal";

const Bodyhero = () => {
  return (
    <div className="w-full min-h-screen bg-bgDark flex items-center py-8 sm:py-4 px-2">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 sm:px-4 md:px-12">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-8 pt-8 sm:pt-0">
          {/* Nombre */}
          <div className="text-center md:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-title tracking-tight leading-tight">
              Hairon
              <br className="hidden xs:block" />
              <span className="inline-flex items-end">
                Chávez
                <span className="ml-0.5 inline-block w-2 h-2 bg-primary animate-pulse"></span>
              </span>
            </h1>
          </div>

          {/* Título y roles */}
          <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-6 w-full">
            <span className="text-base sm:text-lg md:text-2xl text-primary font-semibold text-center md:text-left px-2 sm:px-0">
              Desarrollador Full Stack y CEO de Tav Solutions Technology
            </span>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
              <div className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1 group text-sm sm:text-base">
                <Code2
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span>Full Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1 group text-sm sm:text-base">
                <Palette
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span>UX/UI</span>
              </div>
              <div className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1 group text-sm sm:text-base">
                <Laptop
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span>Design</span>
              </div>
            </div>
          </div>

          {/* Enlaces Sociales */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
              <a
                href="https://github.com/Haironch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-title text-sm sm:text-base md:text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hairon-chavez-78a551337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-title text-sm sm:text-base md:text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/hc23504778"
                target="_blank"
                rel="noopener noreferrer"
                className="text-title text-sm sm:text-base md:text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/iron_ch.29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-title text-sm sm:text-base md:text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Botón CTA reemplazado por el Modal */}
          <ContactModal />
        </div>

        {/* Columna derecha - Imagen */}
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <figure className="relative m-0 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[300px]">
            <img
              src={imgHero}
              alt="Hairon Chávez"
              className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 object-cover"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Bodyhero;