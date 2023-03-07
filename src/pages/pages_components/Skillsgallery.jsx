import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";
import Navigation from "./Subcomponets/Navigation";
import Gallery from "./Subcomponets/Gallery";

const SkillsgalleryWreapper = styled.div`
  padding: 100px 80px;
  width: 100%;
  height: auto;
  background-color: ${colors.bgDark};
  box-sizing: border-box;
`;

function Skillsgallery() {
  const [menu, setMenu] = useState("desarrolloweb");

  function verifyMenu() {
    switch (menu) {
      case "desarrolloweb":
        return (
          <Gallery
            img1="https://plus.unsplash.com/premium_photo-1671129471248-82d1ba9dab31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1614&q=80"
            img2="https://images.unsplash.com/photo-1678188053660-a0c36ecb9bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            img3="https://images.unsplash.com/photo-1678156529666-5017b01a642a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            img4="https://images.unsplash.com/photo-1678025275990-fc029162ec5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        );
      case "disenouxui":
        return (
          <Gallery
            img1="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            img2="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            img3="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80"
            img4="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          />
        );
      case "aplicacionesdeescritorio":
        return (
          <Gallery
            img1="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            img2="https://images.unsplash.com/photo-1619597455322-4fbbd820250a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            img3="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            img4="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        );
    }
  }

  return (
    <SkillsgalleryWreapper>
      <Headercontent
        title="SERCICIOS DE HAIRON"
        subtitle="PORTAFOLIO"
        description="knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker"
      />
      <div>
        <Navigation setMenu={setMenu} />
        {verifyMenu()}
      </div>
    </SkillsgalleryWreapper>
  );
}

export default Skillsgallery;
