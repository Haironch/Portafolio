import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";
import Carduno from "../pages_components/articles-subcomponents/Card1";
import Cardos from "../pages_components/articles-subcomponents/Card2";
const ConteinerArticles = styled.div`
  padding: 100px 80px 100px 80px;
  border: 1px solid red;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.bgLight};
`;

const ContenirGiftscard = styled.div`
  border: 1px dotted red;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 300px) 400px;
  grid-template-rows: repeat(3, 200px);
  grid-template-areas: "img1 img2 img3" "img1 img2 img4" "img1 img2 img5";
  grid-gap: 1em;
`;

function Articles() {
  return (
    <ConteinerArticles>
      <Headercontent
        title="SERCICIOS"
        subtitle="PORTAFOLIO"
        description="knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker"
      />
      <ContenirGiftscard>
        <Carduno
          img="https://images.pexels.com/photos/14178167/pexels-photo-14178167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title=" Welcome"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          gridarea="img1"
        />
        <Carduno
          img="https://images.pexels.com/photos/15730633/pexels-photo-15730633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Bienvenido"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          gridarea="img2"
        />
        <Cardos
          img="https://images.pexels.com/photos/12906891/pexels-photo-12906891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="WELCOME"
          content="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
          gridarea="img3"
        />
        <Cardos
          img="https://images.pexels.com/photos/12906891/pexels-photo-12906891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="hello"
          content="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum"
          gridarea="img4"
        />
        <Cardos
          img="https://images.pexels.com/photos/12906891/pexels-photo-12906891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Hello"
          content="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum"
          gridarea="img5"
        />
      </ContenirGiftscard>
    </ConteinerArticles>
  );
}

export default Articles;
