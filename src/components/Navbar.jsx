import React, { useState, useEffect } from 'react';
import logo from "../assets/imgs/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const target = document.querySelector(targetId);
    // Usar la altura actual del navbar basada en el estado scrolled
    const navbarHeight = scrolled ? 64 : 77; // 64px (h-16) cuando está scrolled, 77px cuando no

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Array de navegación que coincide con los IDs de las secciones
  const navItems = [
    { label: 'Home', id: 'bodyhero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Gallery', id: 'skillsgallery' },
    { label: 'Articles', id: 'articles' },
    { label: 'Footer', id: 'footer' } 
  ];

  return (
    <div className={`
      fixed top-0 left-0 right-0 z-50 
      bg-bgDark flex justify-between items-center px-4 md:px-6 
      transition-all duration-300
      ${scrolled ? 'h-16' : 'h-[77px]'}
    `}>
      {/* Logo */}
      <figure className="m-0 flex items-center">
        <img 
          src={logo} 
          alt="logo" 
          className={`
            transition-all duration-300 hover:scale-105
            ${scrolled ? 'h-8' : 'h-[35px]'}
            w-auto
          `}
        />
      </figure>

      {/* Botón de menú móvil */}
      <button 
        className="md:hidden bg-transparent border-none text-primary text-2xl cursor-pointer p-2 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Overlay para móvil */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-bgDark/98 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menú de navegación */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex 
        fixed md:static 
        ${scrolled ? 'top-16' : 'top-[80px]'} 
        md:top-auto 
        left-0 md:left-auto 
        right-0 md:right-auto 
        flex-col md:flex-row 
        items-start md:items-center 
        p-8 md:p-0 
        gap-4 md:gap-8 
        z-50 md:z-auto
        bg-bgDark md:bg-transparent
        md:justify-center
        transition-all duration-300
      `}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, `#${item.id}`)}
            className="
              text-primary font-title
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
              ${scrolled ? 'text-base' : 'text-lg'}
            "
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Redes sociales */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'}
        md:flex
        fixed md:static
        bottom-8 md:bottom-auto
        left-0 md:left-auto
        right-0 md:right-auto
        justify-center md:justify-start
        gap-8 md:gap-6
        z-50
        transition-all duration-300
      `}>
        {[
          { name: 'facebook', label: 'Facebook' },
          { name: 'whatsapp', label: 'WhatsApp' },
          { name: 'github', label: 'GitHub' }
        ].map((social) => (
          <a
            key={social.name}
            href="#"
            aria-label={social.label}
            className={`
              text-primary transition-all duration-300 
              hover:-translate-y-0.5 hover:text-primary/90
              ${scrolled ? 'text-lg' : 'text-xl'}
            `}
          >
            <i className={`fa-brands fa-${social.name}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;