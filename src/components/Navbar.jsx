import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colors, fonts, media } from "../assets/styles";
import logo from "../assets/imgs/logo-true.png";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colors.bgDark};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  ${media.ms} {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "Logo Menu Social";
    align-items: center;
    padding: 1rem 2rem;
  }

  ${media.mm} {
    padding: 1rem 4rem;
  }
`;

const Logo = styled.figure`
  margin: 0;
  grid-area: Logo;
  display: flex;
  align-items: center;
  
  .nav-logo {
    max-height: 35px;
    width: auto;
    transition: transform 0.3s ease;

    @media (min-width: 768px) {
      max-height: 45px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.nav`
  grid-area: Menu;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${colors.bgDark};
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    a {
      padding: 0.8rem 0;
      text-align: center;
      border-bottom: 1px solid ${colors.primary}33;

      &:last-child {
        border-bottom: none;
      }
    }
  }
  
  ${media.ms} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    a {
      color: ${colors.primary};
      font-size: 1.1rem;
      font-family: ${fonts.title};
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${colors.primary};
        transition: width 0.3s ease;
      }
      
      &:hover {
        color: ${colors.primary}ee;
        &:after {
          width: 100%;
        }
      }
    }
  }
`;

const Social = styled.div`
  grid-area: Social;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    justify-content: center;
    padding: 1rem 0;
    background-color: ${colors.bgDark};
    border-top: 1px solid ${colors.primary}33;
  }
  
  ${media.ms} {
    display: flex;
    gap: 1.5rem;
    
    a {
      color: ${colors.primary};
      transition: all 0.3s ease;
      
      i {
        font-size: 1.4rem;
      }
      
      &:hover {
        transform: translateY(-2px);
        color: ${colors.primary}ee;
      }
    }
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el scroll suave
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Cierra el menú móvil al hacer clic

    const target = document.querySelector(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Cierra el menú cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <img className="nav-logo" src={logo} alt="logo" />
      </Logo>

      <MenuButton onClick={toggleMenu}>
        <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </MenuButton>

      <Menu isOpen={isMenuOpen}>
        <a href="#bodyhero" onClick={(e) => handleNavClick(e, '#bodyhero')}>Home</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
        <a href="#skillsgallery" onClick={(e) => handleNavClick(e, '#skillsgallery')}>Portfolio</a>
        <a href="#articles" onClick={(e) => handleNavClick(e, '#articles')}>Blog</a>
        <a href="#footer" onClick={(e) => handleNavClick(e, '#footer')}>Contacto</a>
      </Menu>

      <Social isOpen={isMenuOpen}>
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" aria-label="WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
      </Social>
    </NavbarContainer>
  );
}

export default Navbar;