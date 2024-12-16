import React from 'react';
import styled from "styled-components";
import { colors } from "../assets/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.bgDark};
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  /* Reset de márgenes y padding que puedan causar scroll */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* Asegurar que todo el contenido hijo respete el box-sizing */
  *, *:before, *:after {
    box-sizing: border-box;
  }

  /* Scroll Behavior */
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${colors.bgDark};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 4px;
    
    &:hover {
      background: ${colors.primary}dd;
    }
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  position: relative;
  /* Compensar el navbar fijo */
  margin-top: 77px; 

  /* Asegurarse que el contenido no cause overflow horizontal */
  > * {
    max-width: 100%;
  }

  /* Debug visual temporal */
  /* > * {
    outline: 1px solid rgba(255, 0, 0, 0.2);
  } */
`;

function Layout({ children }) {
  // Prevenir scroll al cargar
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;