import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, media } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";

const SkillsWrapper = styled.div`
  ${media.ms} {
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.bgLight};
    padding: 4rem 2rem;
    box-sizing: border-box;
  }

  ${media.mm} {
    padding: 6rem 4rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const CardWrapper = styled.div`
  background: ${colors.bgDark};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 420px;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primary}88);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CardHeader = styled.div`
  padding: 2rem;
  background: ${colors.bgDark};
  position: relative;
  z-index: 1;

  figure {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    transition: transform 0.3s ease;

    img {
      width: 100%;
      height: auto;
      filter: invert(100%);
    }
  }

  .skill-type {
    color: ${colors.primary};
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .card-title {
    color: ${colors.title};
    font-size: 1.8em;
    font-family: ${fonts.title};
    margin: 0;
    text-align: center;
    margin-bottom: 1rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .skill-tag {
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.title};
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85em;
    transition: background 0.3s ease;

    &:hover {
      background: ${colors.primary}33;
    }
  }
`;

const CardBody = styled.div`
  padding: 2rem;
  text-align: center;

  .experience-info {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;
    
    .stat {
      .number {
        color: ${colors.primary};
        font-size: 2.5em;
        font-weight: 700;
        margin: 0;
        line-height: 1;
      }
      
      .label {
        color: ${colors.title};
        font-size: 0.9em;
        margin-top: 0.5rem;
      }
    }
  }

  .description {
    color: ${colors.content};
    font-size: 0.95em;
    line-height: 1.6;
    margin: 0;
  }
`;

const skillsData = [
  {
    type: "Frontend",
    title: "Desarrollo Web",
    icon: "/path/to/web-icon.svg",
    years: 4,
    projects: 15,
    tags: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    description: "Especializado en crear interfaces modernas y responsivas con enfoque en la experiencia de usuario y rendimiento."
  },
  {
    type: "Backend",
    title: "Desarrollo Backend",
    icon: "/path/to/backend-icon.svg",
    years: 4,
    projects: 12,
    tags: ["Node.js", "Java", "Express", "Spring Boot"],
    description: "Experiencia en desarrollo de APIs RESTful, microservicios y arquitecturas escalables."
  },
  {
    type: "Bases de Datos",
    title: "Gestión de Datos",
    icon: "/path/to/database-icon.svg",
    years: 4,
    projects: 10,
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    description: "Diseño e implementación de bases de datos relacionales y NoSQL con enfoque en optimización y seguridad."
  }
];

function SkillCard({ skill }) {
  return (
    <CardWrapper>
      <CardHeader>
        <figure>
          <img src={skill.icon} alt={skill.title} />
        </figure>
        <p className="skill-type">{skill.type}</p>
        <h3 className="card-title">{skill.title}</h3>
        <div className="skill-tags">
          {skill.tags.map((tag, index) => (
            <span key={index} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardBody>
        <div className="experience-info">
          <div className="stat">
            <p className="number">{skill.years}+</p>
            <p className="label">Años</p>
          </div>
          <div className="stat">
            <p className="number">{skill.projects}</p>
            <p className="label">Proyectos</p>
          </div>
        </div>
        <p className="description">{skill.description}</p>
      </CardBody>
    </CardWrapper>
  );
}

function Skills() {
  const title = "Experiencia Profesional";
  const subtitle = "Mis Habilidades";
  const description = "Desarrollador Full Stack con 4 años de experiencia y pensum académico cerrado. Especializado en tecnologías web modernas, desarrollo backend robusto y gestión eficiente de bases de datos.";

  return (
    <SkillsWrapper>
      <Headercontent
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <CardsContainer>
        {skillsData.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </CardsContainer>
    </SkillsWrapper>
  );
}

export default Skills;