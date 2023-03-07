import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../assets/styles";

const Contactbuttons = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blanchedalmond;
  height: 32px;
  width: 200px;
  margin: 0 32px;
  color: ${colors.primary};
  text-decoration: none;
`;
function Contactlink({ texto, url, icon }) {
  return (
    <Contactbuttons href={url} target="_blank" rel="noreferrer">
      <i className={`fa-brands fa-${icon}`}></i>
      {texto}
    </Contactbuttons>
  );
}

export default Contactlink;
