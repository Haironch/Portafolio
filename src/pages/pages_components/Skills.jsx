import styled from "styled-components";

import { skills } from "../../assets/data";
import { colors, fonts, media } from "../../assets/styles";
import Headercontent from "../../components/Headercontent";

const SkillsWrapper = styled.div`
  ${media.ms} {
    width: 100%;
    height: auto;
    background-color: ${colors.bgLight};
    box-sizing: border-box;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid red;
  height: auto;
  justify-content: space-between;
  margin-top: 56px;
`;

function Skills() {
  const title = "Informacion";
  const subtitle = "Lo que se hacer";
  const description =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sitadas";
  return (
    <SkillsWrapper>
      <Headercontent
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <CardsContainer>
        {skills.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </CardsContainer>
    </SkillsWrapper>
  );
}

// sub components
const CardWrapper = styled.div`
  ${media.ms} {
    margin: 0 auto;
    margin-bottom: 36px;
    border: 1px solid white;
    width: 300px;
    height: 400px;
    box-sizing: border-box;
  }
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  color: ${colors.title};
  background-color: ${colors.bgDark};

  figure {
    width: 100px;
    height: 100px;
    margin: 0;

    img {
      width: 100%;
      height: auto;
      -webkit-filter: invert(100%); /* Safari/Chrome */
      filter: invert(100%);
    }
  }
  .card-title,
  .number-projects {
    font-family: ${fonts.title};
    margin: 0;
  }
  .card-title {
    margin: 12px 0;
    margin-bottom: 6px;
    font-size: 1.5em;
  }
  .number-projects {
    font-size: 1.1em;
  }
`;
const CardBody = styled.div`
  ${media.ms} {
    text-align: center;
    height: calc(100% - 240px);
    flex-direction: column;
    font-family: ${fonts.content};

    .years-experience,
    .card-body-content {
      margin: 0;
    }
    .years-experience {
      color: ${colors.primary};
      font-size: 4em;
      font-weight: 900;
    }
    .card-body-content {
      color: ${colors.title};
      font-size: 1em;
      text-transform: uppercase;
    }
  }
`;
function SkillCard({ skill }) {
  return (
    <CardWrapper>
      <CardHeader>
        <figure>
          <img src={skill.img} alt="" />
        </figure>
        <h3 className="card-title">{skill.title}</h3>
        <p className="number-projects">{skill.proyects} realizados</p>
      </CardHeader>
      <CardBody>
        <p className="years-experience"> 8+</p>
        <p className="card-body-content">{skill.clients} satisfechos</p>
      </CardBody>
    </CardWrapper>
  );
}

export default Skills;
