import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { theme } from "../../theme/theme";
import { projects } from "../../text/projectsText";
import { ProjectsProps } from "../../text/projectsText";

const ProjectsList = () => {
  return (
    <ProjectsListStyled>
      {projects.map((e: ProjectsProps) => (
        <ProjectCard
          key={e.id}
          name={e.name}
          onClick={() => {}}
          description={e.description}
          url={e.url}
          img={e.img}
          responsive={e.responsive ? "Responsive" : "! Pas Responsive !"}
        />
      ))}
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
    color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default ProjectsList;
