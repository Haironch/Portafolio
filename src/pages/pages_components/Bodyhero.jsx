import React from "react";
import styled from "styled-components";
import { colors, fonts, media } from "../../assets/styles";
import imgHero from "../../assets/imgs/man-hero.png";

const HeroContainer = styled.div`
  min-height: calc(100vh - 77px);
  background-color: ${colors.bgDark};
  margin-top: 77px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden; /* Prevenir scroll */

  ${media.ms} {
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: 
      "Contactame"
      "Foto";
    padding: clamp(1rem, 5vw, 24px);
    gap: clamp(1rem, 3vw, 2rem);
  }
  
  ${media.mm} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "Contactame Foto";
    padding: clamp(2rem, 5vw, 48px);
    gap: clamp(1.5rem, 3vw, 3rem);
  }
`;

const Contacto = styled.div`
  ${media.ms} {
    grid-area: Contactame;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vh, 2rem);

    h1 {
      margin: 0;
      color: ${colors.title};
      font-size: clamp(2.5em, 5vw, 3.5em);
      font-family: ${fonts.title};
      font-weight: 900;
      letter-spacing: -1px;
      line-height: 1.2;

      span {
        color: ${colors.primary};
        position: relative;
        &:after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: ${colors.primary};
          border-radius: 50%;
          bottom: 8px;
          right: -12px;
        }
      }
    }

    .social {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      align-items: center;

      .social-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
      }

      a {
        color: ${colors.title};
        text-decoration: none;
        transition: all 0.3s ease;
        font-family: ${fonts.content};
        font-size: 1.1em;
        padding: 0.5rem 1rem;
        
        &:hover {
          color: ${colors.primary};
          transform: translateY(-2px);
        }
      }
    }

    .btn-cta {
      padding: 12px 28px;
      color: ${colors.primary};
      border: 2px solid ${colors.primary};
      background-color: transparent;
      text-transform: uppercase;
      font-size: 1.1em;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      border-radius: 4px;
      align-self: center;
      white-space: nowrap;

      &:hover {
        color: ${colors.bgDark};
        background-color: ${colors.primary};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      }

      i {
        margin-left: 8px;
        transition: transform 0.3s ease;
      }

      &:hover i {
        transform: translateX(4px);
      }
    }
  }

  ${media.mm} {
    text-align: left;
    align-self: center;

    .social {
      align-items: flex-start;
      
      .social-row {
        justify-content: flex-start;
      }
    }

    .btn-cta {
      align-self: flex-start;
    }
  }
`;

const Img = styled.figure`
  ${media.ms} {
    grid-area: Foto;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 4px;
      background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
    }

    img {
      width: 100%;
      max-width: min(400px, 90vw);
      height: auto;
      display: block;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  ${media.mm} {
    align-self: center;
    
    img {
      max-width: min(350px, 40vw);
    }
  }
`;

function Bodyhero() {
  return (
    <HeroContainer>
      <Contacto>
        <h1>
          Hairon<br />
          Chávez<span>.</span>
        </h1>
        <div className="social">
          <div className="social-row">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
          <div className="social-row">
            <a href="https://github.com">GitHub</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
        <button className="btn-cta">
          Contáctame
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </Contacto>

      <Img>
        <img src={imgHero} alt="Hairon Chávez" />
      </Img>
    </HeroContainer>
  );
}

export default Bodyhero;