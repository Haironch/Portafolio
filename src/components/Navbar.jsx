import styled from "styled-components";
import { colors, fonts, media } from "../assets/styles";
import logo from "../assets/imgs/logo-true.png";

const NavbarContainer = styled.div`
  position: fixed; // Mantiene el navbar fijo en la parte superior
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colors.bgDark};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

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
  
  ${media.ms} {
    display: flex;
    align-items: center;
    
    .nav-logo {
      max-height: 45px;
      width: auto;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const Menu = styled.nav`
  grid-area: Menu;
  
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
  return (
    <NavbarContainer>
      <Logo>
        <img className="nav-logo" src={logo} alt="logo" />
      </Logo>

      <Menu>
        <a href="#home">Home</a>
        <a href="#portfolio">Portafolio</a>
        <a href="#blog">Blog</a>
        <a href="#pages">Pages</a>
        <a href="#contact">Contacto</a>
      </Menu>

      <Social>
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