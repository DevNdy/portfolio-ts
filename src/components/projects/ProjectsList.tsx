import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { theme } from "../../theme/theme";
import { projects } from "../../text/projectsText";
import { ProjectsProps } from "../../text/projectsText";
import { useInView } from "react-intersection-observer";

const ProjectsList = () => {
  const { ref, inView } = useInView();
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
      <h4 ref={ref} className={`${inView ? "isVisible" : ""}`}>
        D'autres projets à venir...
      </h4>
    </ProjectsListStyled>
  );
};

const ProjectsListStyled = styled.div`
  margin: 0 0 20px;
  padding: 10px 30px 10px 10px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  h4 {
    height: 100%;
    font-size: 30px;
    font-weight: 400;
    color: ${theme.colors.gray};
    background-color: #f9f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    position: relative;
    top: -40px;
  }

  .isVisible {
    transition: 2s;
    opacity: 1;
  }

  @media (max-width: 1100px) {
    padding-right: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    h4 {
      font-size: 22px;
    }
  }

  @media (max-width: 870px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export default ProjectsList;
