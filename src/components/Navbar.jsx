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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

const Logo = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  
  .nav-logo {
    max-height: 35px;
    width: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: none;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.bgDark};
    z-index: 1050;
    opacity: 0.98;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    gap: 1rem;
    z-index: 1060;

    a {
      color: ${colors.primary};
      font-size: 1.1rem;
      text-decoration: none;
      padding: 0.5rem 0;
      width: 100%;
      border-bottom: 1px solid ${colors.primary}20;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  @media (min-width: 769px) {
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
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    justify-content: center;
    gap: 2rem;
    z-index: 1060;
  }
  
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
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <NavbarContainer>
      <Logo>
        <img className="nav-logo" src={logo} alt="logo" />
      </Logo>

      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </MenuButton>

      <MobileMenuOverlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      
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