import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import cryptoImg from "../../assets/images/crypto.png";
import immoImg from "../../assets/images/immo.png";
import portfolioImg from "../../assets/images/portfolio.png";
import christmasImg from "../../assets/images/christmas.png";
import infosImg from "../../assets/images/infos.png";
import mtcImg from "../../assets/images/mtc.png";

const ProjectsList = () => {
  return (
    <ProjectsListStyled>
      <ProjectCard
        name="Cryptomonnaies"
        onClick={() => {}}
        description="helllo"
        url="null"
        img={cryptoImg}
      />
      <ProjectCard
        name="Cryptomonnaies"
        onClick={() => {}}
        description="helllo"
        url="null"
        img={immoImg}
      />
      <ProjectCard
        name="Cryptomonnaies"
        onClick={() => {}}
        description="helllo"
        url="null"
        img={christmasImg}
      />
      <ProjectCard
        name="Cryptomonnaies"
        onClick={() => {}}
        description="helllo"
        url="null"
        img={portfolioImg}
      />
      <ProjectCard
        name="Cryptomonnaies"
        onClick={() => {}}
        description="helllo"
        url="null"
        img={infosImg}
      />

      <h4>D'autres projets à venir...</h4>
    </ProjectsListStyled>
  );
};

const ProjectsListStyled = styled.div`
  margin-bottom: 20px;
  padding: 10px 30px 10px 10px;
  border-radius: 12px;
  background-color: #f4f3f3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  h4 {
    font-size: 30px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default ProjectsList;
