// Home.jsx
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
  /* Aseguramos que las secciones tengan suficiente padding para compensar el navbar fijo */
  section {
    scroll-margin-top: 77px; /* Altura del navbar */
    padding: 2rem 0;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <MainContent>
        <section id="bodyhero">
          <Bodyhero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="skillsgallery">
          <Skillsgallery />
        </section>

        <section id="articles">
          <Articles />
        </section>
      </MainContent>

      <sectior id="footer">
        <Footer />
      </sectior>
    </HomeContainer>
  );
}

export default Home;
