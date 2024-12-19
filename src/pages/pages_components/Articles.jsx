import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";

const ConteinerArticles = styled.div`
  padding: 2rem 4rem;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.bgLight};
`;

const ProjectsGrid = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 200px);
  grid-template-areas: 
    "feat1 feat1 feat1 feat2 feat2 feat2 side1"
    "feat1 feat1 feat1 feat2 feat2 feat2 side2"
    "feat1 feat1 feat1 feat2 feat2 feat2 side3";
  gap: 1.5rem;
`;

const FeatureCard = styled.article`
  grid-area: ${props => props.area};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }

  .image-container {
    position: absolute;
    inset: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    z-index: 2;
    transform: translateY(20px);
    transition: transform 0.3s ease;
  }

  .title {
    color: white;
    font-family: ${fonts.title};
    font-size: ${props => props.featured ? '2rem' : '1.5rem'};
    margin: 0 0 0.5rem 0;
  }

  .description {
    color: rgba(255, 255, 255, 0.9);
    font-family: ${fonts.content};
    font-size: 1rem;
    margin: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
    .content {
      transform: translateY(0);
    }
    .description {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SideCard = styled(FeatureCard)`
  .title {
    font-size: 1.2rem;
  }
  .content {
    padding: 1.5rem;
  }
`;

function Articles() {
  const projectsData = [
    {
      id: 1,
      title: "Desarrollo Web Frontend",
      description: "Diseño y desarrollo de interfaces modernas y responsivas con React y Vue.js",
      image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      area: "feat1"
    },
    {
      id: 2,
      title: "Aplicaciones Backend",
      description: "Desarrollo de APIs y servicios escalables con Node.js y Java",
      image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
      area: "feat2"
    },
    {
      id: 3,
      title: "Bases de Datos",
      description: "Gestión y optimización de bases de datos SQL y NoSQL",
      image: "https://cdn.pixabay.com/photo/2021/10/11/17/36/technology-6701404_1280.jpg",
      area: "side1"
    },
    {
      id: 4,
      title: "Cloud Services",
      description: "Despliegue y mantenimiento en AWS y Google Cloud",
      image: "https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637_1280.jpg",
      area: "side2"
    },
    {
      id: 5,
      title: "DevOps",
      description: "Implementación de CI/CD y contenedores Docker",
      image: "https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_1280.jpg",
      area: "side3"
    }
  ];

  return (
    <ConteinerArticles>
      <Headercontent
        title="SERVICIOS"
        subtitle="PORTAFOLIO"
        description="Soluciones tecnológicas integrales para empresas y startups. Especializado en desarrollo web full-stack, arquitectura de software y optimización de rendimiento."
      />
      <ProjectsGrid>
        {projectsData.map(project => (
          project.area.startsWith('feat') ? (
            <FeatureCard 
              key={project.id}
              area={project.area}
              featured={true}
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="content">
                <h3 className="title">{project.title}</h3>
                <p className="description">{project.description}</p>
              </div>
            </FeatureCard>
          ) : (
            <SideCard 
              key={project.id}
              area={project.area}
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="content">
                <h3 className="title">{project.title}</h3>
                <p className="description">{project.description}</p>
              </div>
            </SideCard>
          )
        ))}
      </ProjectsGrid>
    </ConteinerArticles>
  );
}

export default Articles;