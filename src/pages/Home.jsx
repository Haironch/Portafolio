import React from "react";
import styled from "styled-components";
import { colors } from "../assets/styles";
import Bodyhero from "./pages_components/Bodyhero";
import Navbar from "../components/Navbar";
import Skills from "./pages_components/Skills";
import Skillsgallery from "./pages_components/Skillsgallery";
import Articles from "./pages_components/Articles";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.bgDark};
  overflow-x: hidden;

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
  position: relative;
  width: 100%;
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <MainContent>
        <Bodyhero />
        <Skills />
        <Skillsgallery />
        <Articles />
      </MainContent>
      <Footer />
    </HomeContainer>
  );
}

export default Home;