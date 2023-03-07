import React from "react";
import styled from "styled-components";
import imagenes1 from "../../../assets/imgs/img1.png";
import imagenes2 from "../../../assets/imgs/img2.png";
import imagenes3 from "../../../assets/imgs/img3.png";
import imagenes4 from "../../../assets/imgs/img4.png";
const Gallerywrapper = styled.div`
  border: 1px solid blue;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(2, 300px);
  grid-template-areas: "img1 img2 img2 img3" "img4 img2 img2 img3";
  box-sizing: border-box;
`;
const Imagen = styled.figure`
  border: 1px solid lightblue;
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
  grid-area: ${(props) => props.gridarea};
  align-self: center;
  img {
    height: 100%;
  }
`;

function Gallery({ img1, img2, img3, img4 }) {
  return (
    <Gallerywrapper>
      <Imagen gridarea="img1">
        <img src={img1} alt="no se pudo mostrar" />
      </Imagen>

      <Imagen gridarea="img2">
        <img src={img2} alt="no se pudo mostrar" />
      </Imagen>

      <Imagen gridarea="img3">
        <img src={img4} alt="no se pudo mostrar" />
      </Imagen>

      <Imagen gridarea="img4">
        <img src={img3} alt="no se pudo mostrar" />
      </Imagen>
    </Gallerywrapper>
  );
}

export default Gallery;
