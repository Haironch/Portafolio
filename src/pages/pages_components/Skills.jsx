import React from "react";
import styled from "styled-components";
import { colors, fonts, media } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";
import { 
  Layers, 
  Server, 
  Database
} from 'lucide-react';

const SkillsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.bgLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
  scroll-margin-top: 77px;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    min-height: auto;
  }

  ${media.ms} {
    padding: 4rem 2rem;
  }

  ${media.mm} {
    padding: 5rem 4rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 3rem auto 0;
  padding: 0 1rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const CardWrapper = styled.div`
  background: ${colors.bgDark};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: auto;
  min-height: 420px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
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

  .icon-container {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.primary}15;
    border-radius: 50%;
    transition: all 0.3s ease;

    svg {
      width: 40px;
      height: 40px;
      color: ${colors.primary};
      stroke-width: 1.5px;
      transition: all 0.3s ease;
    }
  }

  &:hover .icon-container {
    transform: scale(1.1);
    background: ${colors.primary}25;

    svg {
      transform: scale(1.1);
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
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.primary}33;
      transform: translateY(-2px);
    }
  }
`;

const CardBody = styled.div`
  padding: 2rem;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    Icon: Layers,
    years: 4,
    projects: 15,
    tags: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    description:
      "Especializado en crear interfaces modernas y responsivas con enfoque en la experiencia de usuario y rendimiento."
  },
  {
    type: "Backend",
    title: "Desarrollo Backend",
    Icon: Server,
    years: 4,
    projects: 12,
    tags: ["Node.js", "Java", "Express", "Spring Boot"],
    description:
      "Experiencia en desarrollo de APIs RESTful, microservicios y arquitecturas escalables."
  },
  {
    type: "Bases de Datos",
    title: "Gestión de Datos",
    Icon: Database,
    years: 4,
    projects: 10,
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    description:
      "Diseño e implementación de bases de datos relacionales y NoSQL con enfoque en optimización y seguridad."
  }
];

function SkillCard({ skill }) {
  const Icon = skill.Icon;
  
  return (
    <CardWrapper>
      <CardHeader>
        <div className="icon-container">
          <Icon />
        </div>
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
  const description =
    "Desarrollador Full Stack con 4 años de experiencia y pensum académico cerrado. Especializado en tecnologías web modernas, desarrollo backend robusto y gestión eficiente de bases de datos.";

  return (
    <SkillsWrapper id="skills">
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