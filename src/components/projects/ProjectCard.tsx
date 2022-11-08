import React from "react";
import styled from "styled-components";

interface ArticleProps {
  img: string;
  name: string;
  description: string;
  onClick: () => {} | void;
  url: string;
}

const ProjectCard: React.FC<ArticleProps> = ({ onClick, name, description, url, img }) => {
  return (
    <ProjectCardStyled onClick={onClick}>
      <div>
        <img src={img} alt="profile" />
      </div>
      <div className="infos">
        <a href={url} target="_blank" rel="noreferrer">
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      </div>
    </ProjectCardStyled>
  );
};

const ProjectCardStyled = styled.div`
  border-radius: 4px;
  transition: 0.3s;
  margin: 15px 0 0 15px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
  &:hover .infos {
    opacity: 1;
    transform: scaleY(1);
  }
  .infos {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(216, 49, 91, 0.9);
    color: white;
    height: 400px;
    width: 550px;
    display: flex;
    opacity: 0;
    transform: scaleY(0);
    transition: 0.7s;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    a {
      text-decoration: none;
      h3 {
        font-size: 3rem;
        color: white;
      }
    }
  }
  img {
    height: 400px;
    width: 550px;
    border-radius: 10px;
  }
`;

export default ProjectCard;
