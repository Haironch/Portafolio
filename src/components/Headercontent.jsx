import styled from "styled-components";
import { colors, fonts } from "../assets/styles";
const Content = styled.div`
  text-align: center;
  margin-bottom: 64px;
  .title {
    color: ${colors.title};
    font-family: ${fonts.title};
  }

  .subtitle {
    color: ${colors.primary};
    font-family: ${fonts.content};
  }

  .description {
    width: 50%;
    margin: 0 auto;
    color: ${colors.content};
  }
`;

function Headercontent({ title, subtitle, description }) {
  return (
    <Content>
      <strong className="subtitle">{subtitle}</strong>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </Content>
  );
}

export default Headercontent;
