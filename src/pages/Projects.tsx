import React, { useContext } from "react";
import styled from "styled-components";
import ProjectsList from "../components/projects/ProjectsList";
import { AppContext } from "../context/Context";
import { theme } from "../theme/theme";
import TitlePage from "../ui-reusable/TitlePage";

const Projects = () => {
  const { refProjects } = useContext(AppContext);
  return (
    <ProjectsStyled ref={refProjects}>
      <TitlePage title="Quelques réalisations" />
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
`;

export default Projects;
