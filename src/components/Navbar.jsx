
import React, { useState, useEffect } from "react";
import logo from "../assets/imgs/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Detección de sección activa
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 78;
        const sectionHeight = section.offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const target = document.querySelector(targetId);
    const navbarHeight = 77;

    if (target) {
      const offsetTop = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Home", id: "bodyhero" },
    { label: "Skills", id: "skills" },
    { label: "Gallery", id: "skillsgallery" },
    { label: "Articles", id: "articles" },
    { label: "Contactame", id: "footer" },
  ];

  return (
    <div className={`
      fixed top-0 left-0 right-0 z-50 
      h-[77px]
      flex justify-between items-center px-4 md:px-6 
      transition-all duration-300
      ${scrolled 
        ? "bg-bgDark/80 backdrop-blur-sm border-b border-primary/10 shadow-sm" 
        : "bg-bgDark border-b border-transparent"}
    `}>
      {/* Logo */}
      <figure className="m-0 flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-[35px] w-auto transition-all duration-300 hover:scale-105"
        />
      </figure>

      {/* Menú móvil */}
      <button
        className="md:hidden bg-transparent border-none text-primary text-2xl cursor-pointer p-2 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Overlay móvil */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-bgDark/98 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menú de navegación */}
      <div className={`
        ${isMenuOpen ? "flex" : "hidden"} 
        md:flex 
        fixed md:static 
        top-[77px]
        md:top-auto 
        left-0 md:left-auto 
        right-0 md:right-auto 
        flex-col md:flex-row 
        items-start md:items-center 
        p-8 md:p-0 
        gap-4 md:gap-8 
        z-50 md:z-auto
        ${scrolled ? "bg-bgDark/80 backdrop-blur-sm md:bg-transparent" : "bg-bgDark md:bg-transparent"}
        md:justify-center
        ${scrolled ? "border-t border-primary/10 md:border-none" : ""}
      `}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, `#${item.id}`)}
            className={`
              text-primary font-title
              text-lg
              md:relative
              transition-all duration-300
              hover:text-primary/90
              md:after:content-['']
              md:after:absolute
              md:after:w-0
              md:after:h-0.5
              md:after:bg-primary
              md:after:left-1/2
              md:after:-bottom-1
              md:after:transform
              md:after:-translate-x-1/2
              md:after:transition-all
              md:hover:after:w-full
              w-full md:w-auto
              border-b border-primary/20 md:border-none
              pb-2 md:pb-0
              last:border-none
              ${activeSection === item.id ? 'text-primary after:w-full' : 'text-primary/80'}
            `}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Redes sociales */}
      <div className={`
        ${isMenuOpen ? "flex" : "hidden"}
        md:flex
        fixed md:static
        bottom-8 md:bottom-auto
        left-0 md:left-auto
        right-0 md:right-auto
        justify-center md:justify-start
        gap-8 md:gap-6
        z-50
      `}>
        {[
          { name: "facebook", label: "Facebook" },
          { name: "whatsapp", label: "WhatsApp" },
          { name: "github", label: "GitHub" },
        ].map((social) => (
          <a
            key={social.name}
            href="#"
            aria-label={social.label}
            className="text-primary text-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-primary/90"
          >
            <i className={`fa-brands fa-${social.name}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;