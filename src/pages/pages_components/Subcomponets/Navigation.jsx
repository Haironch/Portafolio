import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../assets/styles";

const NavigationConnteiner = styled.nav`
  padding: 32px 0;
  display: flex;
  width: 700px;
  justify-content: space-between;
  margin: 0 auto;
  height: auto;
`;
const Btn = styled.button`
  background: none;
  border: none;
  color: ${colors.title};
  text-transform: uppercase;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
`;

function Navigation({ setMenu }) {
  return (
    <NavigationConnteiner>
      <Btn onClick={() => setMenu("desarrolloweb")}> Desarrollo web </Btn>
      <Btn onClick={() => setMenu("disenouxui")}> Diseno UX UI </Btn>
      <Btn onClick={() => setMenu("aplicacionesdeescritorio")}>
        {" "}
        Aplicaciones de escritorio
      </Btn>
    </NavigationConnteiner>
  );
}

export default Navigation;
