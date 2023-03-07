import styled from "styled-components";
import { colors, fonts } from "../assets/styles";
import logo from "../assets/imgs/logo-true.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  width: 100%;
  height: 120px;
  font-size: 1.1em;
  box-sizing: border-box;
`;

const Logo = styled.figure`
  width: 10%;
  margin: 0;
  height: 90px;

  .nav-logo {
    margin: 0;
    height: 100%;
  }
`;
const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 70%;
  a {
    margin: 0 15px;
    color: ${colors.primary};
    font-size: 24px;
    font-family: ${fonts.title};
    text-decoration: none;
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${colors.primary};
  width: 10%;

  i {
    margin-left: 16px;
    font-size: 2em;
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
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-github"></i>
      </Social>
    </NavbarContainer>
  );
}

export default Navbar;
