import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../assets/styles";

const Cardunowrapper = styled.div`
  border: 1px solid rebeccapurple;
  width: 300px;
  height: 500px;
  grid-area: ${({ gridarea }) => gridarea};
  img {
    width: 100%;
    height: auto;
  }
  .title {
    font-family: ${fonts.title};
    color: ${colors.primary};
  }
  p {
    font-family: ${fonts.content};
    color: ${colors.primary};
  }
`;

function Card1({ img, title, content, gridarea }) {
  return (
    <Cardunowrapper gridarea={gridarea}>
      <img src={img} alt="no se pudo mostrar" />
      <h2 className="title">{title}</h2>
      <p> {content} </p>
    </Cardunowrapper>
  );
}

export default Card1;
