import React from "react";
import styled from "styled-components";
import { colors, fonts, media } from "../assets/styles";
import Headercontent from "./Headercontent";
import Contactlink from "./footersubcomponets/Contactlink";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${colors.bgDark};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  box-sizing: border-box;

  ${media.ms} {
    padding: 3rem 1rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  ${media.ms} {
    gap: 1rem;
    padding: 1rem;
  }
`;

const SubFooter = styled.div`
  position: relative;
  padding-top: 2rem;
  margin-top: auto;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 1200px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary},
      transparent
    );
  }

  p {
    color: ${colors.title};
    font-family: ${fonts.content};
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.8;
  }
`;

const socialLinks = [
  { texto: "Twitter", url: "https://twitter.com/?lang=es", icon: "twitter" },
  { texto: "LinkedIn", url: "https://gt.linkedin.com/", icon: "linkedin" },
  { texto: "GitHub", url: "https://github.com/", icon: "github" },
  { texto: "WhatsApp", url: "https://www.whatsapp.com/?lang=es", icon: "whatsapp" },
  { texto: "Telegram", url: "https://web.telegram.org/k/", icon: "telegram" }
];

function Footer() {
  return (
    <FooterWrapper>
      <Headercontent
        title="Contacto"
        subtitle="Conectemos"
        description="¿Tienes un proyecto en mente? Me encantaría colaborar contigo. Encuentra mis redes sociales a continuación o envíame un mensaje directo."
      />
      <ContactLinks>
        {socialLinks.map((link, index) => (
          <Contactlink
            key={index}
            texto={link.texto}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </ContactLinks>
      <SubFooter>
        <p>© {new Date().getFullYear()} Hairon Chávez. Todos los derechos reservados.</p>
      </SubFooter>
    </FooterWrapper>
  );
}

export default Footer;