import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../assets/styles";

// assets
import imgHero from "../../assets/imgs/man-hero.png";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  width: 100%;
  height: 900px;
  box-sizing: border-box;

  & > p {
    color: blue;
    margin-left: 16px;
    font-size: 1em;
    font-family: ${fonts.content};
  }
`;
const Contacto = styled.div`
  align-self: flex-start;
  margin-top: 10%;
  width: 20%;
  h1 {
    margin: 0;
    color: ${colors.title};
    font-size: 3em;
    font-family: ${fonts.title};
    font-weight: 900;

    span {
      color: orange;
    }
  }
  .social {
    margin: 28px 0;
    color: ${colors.title};
    font-family: ${fonts.content};

    a {
      margin-right: 8px;
      color: ${colors.title};
      text-decoration: none;
    }

    div a:nth-of-type(2) {
      margin-left: 8px;
    }
  }
  .btn-cta {
    width: 150px;
    height: 36px;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    transition: 300ms background;

    &:hover {
      color: ${colors.bgDark};
      background-color: ${colors.primary};
    }

    i {
      margin-left: 8px;
    }
  }
`;
const Img = styled.figure`
  display: flex;
  align-items: flex-end;
  margin: 0;
  width: 40%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;
const Description = styled.div`
  align-self: flex-start;
  margin-top: 10%;
  width: 20%;
  font-family: ${fonts.title};

  .title {
    margin: 0;
    margin: 8px 0;
    color: ${colors.title};
    font-size: 2em;
  }
  .subtitle {
    color: ${colors.primary};
    text-transform: uppercase;
  }
  .content {
    color: ${colors.content};
  }
`;

function Bodyhero() {
  const skills = "UI/UX Designer, Full Stack Web Developer";
  const description =
    "Esta es una descripción de las habilidades que manejo y de las tecnologias que utilizo";
  return (
    <HeroContainer>
      <Contacto>
        <h1>
          Hairon <br /> Chávez<span>.</span>{" "}
        </h1>
        <div className="social">
          <div>
            <a href="https://instagram.com">instagram</a> |
            <a href="https://linkedin.com">linkedin</a>
          </div>
          <div>
            <a href="https://github.com">github</a> |
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
        <button className="btn-cta">
          Contactame
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </Contacto>

      <Img>
        <img src={imgHero} alt="" width="300" height="450" />
      </Img>
      <Description>
        <strong className="subtitle">Introducción</strong>
        <h2 className="title">{skills}</h2>
        <p className="content">{description}</p>
      </Description>
    </HeroContainer>
  );
}

export default Bodyhero;
