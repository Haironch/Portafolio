import styled from "styled-components";
import { colors, fonts } from "../assets/styles";
import Headercontent from "./Headercontent";
import Contactlink from "./footersubcomponets/Contactlink";

const Footerwrapper = styled.div`
  padding-top: 100px;
  box-sizing: border-box;
  height: 700px;
  width: auto;

  .Contactlinks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid olivedrab;
    width: 800px;
    height: 200px;
    margin: 0 auto;
  }
  .subfooter {
    margin-top: 130px;
    border-top: 15px solid ${colors.primary};
    height: 50px;
    display: flex;
    justify-content: center;
  }
`;

function Footer() {
  return (
    <Footerwrapper id="footer">
      <Headercontent
        title="hola"
        subtitle="Sed ut perspiciatis"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids "
      />
      <div className="Contactlinks">
        <Contactlink
          texto="Twitter"
          url="https://twitter.com/?lang=es"
          icon="twitter"
        />
        <Contactlink
          texto="Linkedin"
          url="https://gt.linkedin.com/"
          icon="linkedin"
        />
        <Contactlink texto="Github" url="https://github.com/" icon="github" />
        <Contactlink
          texto="Whatsapp"
          url="https://www.whatsapp.com/?lang=es"
          icon="whatsapp"
        />
        <Contactlink
          texto="Telegram"
          url="https://web.telegram.org/k/"
          icon="telegram"
        />
      </div>
      <div className="subfooter">
        <p> Copyrigth</p>
      </div>
    </Footerwrapper>
  );
}
export default Footer;
