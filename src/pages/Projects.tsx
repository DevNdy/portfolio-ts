import React, { useContext } from "react";
import styled from "styled-components";
import ProjectsList from "../components/projects/ProjectsList";
import { AppContext } from "../context/Context";
import { theme } from "../theme/theme";

const Projects = () => {
  const { refProjects } = useContext(AppContext);
  return (
    <ProjectsStyled ref={refProjects}>
      <h2>
        Quelques réalisations <span>...</span>
      </h2>
      <ProjectsList />
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 150px 0 80px;
    font-size: 40px;
    font-weight: 500;
    color: ${theme.colors.title};

    span {
      font-size: 45px;
      color: ${theme.colors.primaryColor};
    }
  }
`;

export default Projects;
