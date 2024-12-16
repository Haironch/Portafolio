// Layout.jsx
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

  /* Reset de márgenes y padding */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* Box-sizing heredado */
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
  margin-top: 77px; /* Altura del navbar */

  /* Control de overflow */
  > * {
    max-width: 100%;
  }

  /* Aseguramos que las secciones tengan suficiente espacio */
  section {
    scroll-margin-top: 77px;
    padding: 2rem 0;
  }
`;

function Layout({ children }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
}

export default Layout;