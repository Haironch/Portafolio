import React from "react";
import { Code2, Laptop, Palette, ArrowRight } from "lucide-react";
import imgHero from "../../assets/imgs/logo.png";

const Bodyhero = () => {
  return (
    <div className="w-full min-h-screen bg-bgLight flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center md:items-start justify-center space-y-8 animate-fadeIn">
          {/* Nombre */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold text-title tracking-tight leading-none">
              Hairon
              <br />
              <span className="inline-flex items-end">
                Chávez  
                <span className="ml-0.5 inline-block w-2 h-2 bg-primary animate-pulse"></span>
              </span>
            </h1>
          </div>

          {/* Rest of the component stays the same */}
          <div className="flex flex-col items-center md:items-start space-y-6 w-full">
            <span className="text-xl md:text-2xl text-primary font-semibold text-center md:text-left">
              Desarrollador Full Stack y CEO de Tav Solutions Technology
            </span>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1 group">
                <Code2
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span>Full Stack</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1 group">
                <Palette
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span>UX/UI</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1 group">
                <Laptop
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span>Design</span>
              </div>
            </div>
          </div>

          {/* Enlaces Sociales */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6">
              {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((link) => (
                <a
                  key={link}
                  href={`https://${link.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-title text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Botón CTA */}
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 text-primary border-2 border-primary rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-title">
              Contáctame
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-all duration-300 group-hover:text-title group-hover:translate-x-1"
            />
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="flex justify-center items-center">
          <figure className="relative m-0">
            <img
              src={imgHero}
              alt="Hairon Chávez"
              className="max-w-[90vw] md:max-w-[400px] h-auto rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Bodyhero;
