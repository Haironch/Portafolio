import styled from "styled-components";
import { colors, fonts, media } from "../assets/styles";
import logo from "../assets/imgs/logo-true.png";

const NavbarContainer = styled.div`
  ${media.ms} {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 100px);
    grid-template-areas: "Logo Social" "Menu Menu";
    justify-content: space-between;
    padding: 0px 8px;
    background-color: ${colors.bgDark};
  }
  ${media.mm} {
    grid-template-columns: 50% 50%;
  }
  ${media.ml} {
  }
`;

const Logo = styled.figure`
  margin: 0;

  ${media.ms} {
    //border: 1px solid red;
    width: 100%;
    height: 70px;
    grid-area: Logo;
    //CENTRAR IMAGEN
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .nav-logo {
      //border: 1px solid red;
      width: 100%;
      height: auto;
    }
  }
  ${media.mm} {
  }
  ${media.ml} {
  }
`;
const Menu = styled.nav`
  //box-sizing: border-box;
  ${media.ms} {
    //border: 1px solid red;
    grid-area: Menu;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 0 15px;
      color: ${colors.primary};
      font-size: 24px;
      font-family: ${fonts.title};
      text-decoration: none;
    }
  }
  ${media.mm} {
    grid-area: Menu;
    width: 200px;
    height: 50px;
  }
  ${media.ml} {
    grid-area: menu;
    width: 200px;
    height: 50px;
  }
`;
const Social = styled.div`
  ${media.ms} {
    grid-area: Social;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //border: 1px solid yellow;
    width: 100%;
    height: 100%;

    a {
      color: ${colors.primary};
      margin-left: 16px;
      i {
        font-size: 26px;
      }
    }
  }
  ${media.mm} {
  }
  ${media.ml} {
  }
`;
// <></>

function Navbar() {
  const name = "Kevin";
  const saludo = `hola mundo de parte de: ${name}`;

  return (
    <NavbarContainer>
      <Logo>
        <img className="nav-logo" src={logo} alt="logo" />
      </Logo>

      <Menu>
        <a href="#footer">Home</a>
        <a href="#">Portafolio</a>
        <a href="#">Blog</a>
        <a href="#">Pages</a>
        <a href="#">Contacto</a>
      </Menu>

      <Social>
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-github"></i>
        </a>
      </Social>
    </NavbarContainer>
  );
}

export default Navbar;
