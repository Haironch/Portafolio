import React from "react";
import styled from "styled-components";
const Carddoswrapper = styled.div`
  display: flex;
  border: 1px solid royalblue;
  height: 200px;
  width: 100%;
  grid-area: ${({ gridarea }) => gridarea};
`;

function Card2(props) {
  return (
    <Carddoswrapper gridarea={props.gridarea}>
      <img src={props.img} alt="" />
      <div className="cardcontent">
        <h3 className="title">{props.title}</h3>
        <p className="content">{props.content}</p>
      </div>
    </Carddoswrapper>
  );
}

export default Card2;
