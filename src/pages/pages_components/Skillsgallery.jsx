import { useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";

const SkillsgalleryWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.bgDark};
  padding: 3rem 4rem; /* Reducido de 6rem a 3rem */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto 0; /* Reducido de 3rem a 2rem */
  width: 100%;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem; /* Reducido de 3rem a 2rem */
`;

const TabButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.active ? colors.primary : colors.title};
  font-family: ${fonts.title};
  font-size: 1.1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 1.5rem;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: all 0.5s ease;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  grid-column: ${props => props.span};
  grid-row: ${props => props.rowSpan};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 2;
  }

  .title {
    color: white;
    font-family: ${fonts.title};
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
  }

  .description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    margin: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }

    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const galleryData = {
  desarrolloweb: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Desarrollo full-stack con React y Node.js",
      image: "https://plus.unsplash.com/premium_photo-1671129471248-82d1ba9dab31",
      span: "1 / 7",
      rowSpan: "1 / 3"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Interface de administración con gráficos en tiempo real",
      image: "https://images.unsplash.com/photo-1678188053660-a0c36ecb9bdf",
      span: "7 / 13",
      rowSpan: "1 / 2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Diseño responsivo con animaciones avanzadas",
      image: "https://images.unsplash.com/photo-1678156529666-5017b01a642a",
      span: "7 / 10",
      rowSpan: "2 / 3"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "CMS personalizado con editor rich text",
      image: "https://images.unsplash.com/photo-1678025275990-fc029162ec5d",
      span: "10 / 13",
      rowSpan: "2 / 3"
    }
  ],
  disenouxui: [
    // Similar structure for UX/UI projects
  ],
  aplicacionesdeescritorio: [
    // Similar structure for desktop applications
  ]
};

function Skillsgallery() {
  const [activeTab, setActiveTab] = useState("desarrolloweb");
  const [isVisible, setIsVisible] = useState(true);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    }, 500);
  };

  const tabs = [
    { id: "desarrolloweb", label: "Desarrollo Web" },
    { id: "disenouxui", label: "Diseño UX/UI" },
    { id: "aplicacionesdeescritorio", label: "Apps de Escritorio" }
  ];

  return (
    <SkillsgalleryWrapper>
      <Headercontent
        title="PROYECTOS"
        subtitle="PORTAFOLIO"
        description="Explora mi colección de proyectos en desarrollo web, diseño UX/UI y aplicaciones de escritorio. Cada proyecto refleja mi compromiso con la calidad y la innovación."
      />
      <GalleryContainer>
        <TabsContainer>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabsContainer>
        <GalleryGrid visible={isVisible}>
          {galleryData[activeTab]?.map(item => (
            <GalleryItem
              key={item.id}
              span={item.span}
              rowSpan={item.rowSpan}
            >
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryContainer>
    </SkillsgalleryWrapper>
  );
}

export default Skillsgallery;