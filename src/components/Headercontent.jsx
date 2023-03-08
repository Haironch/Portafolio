import styled from "styled-components";
import { colors, fonts, media } from "../assets/styles";
const Content = styled.div`
  ${media.ms} {
    text-align: center;
    margin-bottom: 64px;
    .title {
      color: ${colors.title};
      font-family: ${fonts.title};
      font-size: 3em;
    }

    .subtitle {
      color: ${colors.primary};
      font-family: ${fonts.content};
      font-size: 2em;
    }

    .description {
      width: 80%;
      margin: 0 auto;
      color: ${colors.content};
      font-size: 1.3em;
    }
  }
`;

function Headercontent({ title, subtitle, description }) {
  return (
    <Content>
      <p className="subtitle">{subtitle}</p>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </Content>
  );
}

export default Headercontent;
