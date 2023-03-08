import styled from "styled-components";

import { colors } from "../assets/styles";
import Bodyhero from "./pages_components/Bodyhero";
import Navbar from "../components/Navbar";
import Skills from "./pages_components/Skills";
import Skillsgallery from "./pages_components/Skillsgallery";
import Articles from "./pages_components/Articles";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: ${colors.bgDark};
  box-sizing: border-box;
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Bodyhero />
      <Skills />
      {/*<Skillsgallery />
      <Articles />
      <Footer />*/}
    </HomeContainer>
  );
}

export default Home;
