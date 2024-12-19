import React from "react";
import Headercontent from "./Headercontent";
import Contactlink from "./footersubcomponets/Contactlink";

const socialLinks = [
  { 
    texto: "GitHub", 
    url: "https://github.com/Haironch", 
    icon: "github" 
  },
  { 
    texto: "LinkedIn", 
    url: "https://www.linkedin.com/in/hairon-chavez-78a551337", 
    icon: "linkedin" 
  },
  { 
    texto: "Twitter", 
    url: "https://x.com/hc23504778", 
    icon: "twitter" 
  },
  { 
    texto: "Telegram", 
    url: "https://t.me/Hairch29", 
    icon: "telegram" 
  },
  { 
    texto: "WhatsApp", 
    url: "https://wa.me/50244899009", 
    icon: "whatsapp" 
  }
];

function Footer() {
  return (
    <footer className="w-full bg-bgDark py-12 px-8 md:px-8 flex flex-col gap-8 box-border">
      <Headercontent
        title="Redes Sociales"
        subtitle="Conectemos"
        description="¿Buscas un desarrollador apasionado para tu próximo proyecto? Estoy aquí para ayudarte a convertir tus ideas en realidad. Contacta conmigo a través de cualquiera de mis redes sociales."
      />
      
      {/* Enlaces de contacto */}
      <div className="flex justify-center items-center flex-wrap gap-6 max-w-3xl mx-auto px-6 py-4 md:px-4">
        {socialLinks.map((link, index) => (
          <Contactlink
            key={index}
            texto={link.texto}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>

      {/* Sub Footer con línea decorativa */}
      <div className="relative pt-6 mt-auto text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 max-w-6xl h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <p className="text-title font-content text-sm opacity-80">
          © {new Date().getFullYear()} Hairon Chávez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;