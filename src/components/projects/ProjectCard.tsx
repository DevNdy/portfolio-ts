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
  h3 {
    font-size: 1rem;
    color: orange;
  }
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
    background: rgba(0, 0, 0, 0.7);
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
    span {
      margin: 10px;
      list-style: none;
      font-size: 14px;
      text-align: start;
      .name {
        margin: 0;
        font-weight: 600;
      }
    }
    .date {
      font-style: italic;
      font-size: 12px;
      opacity: 0.9;
      text-align: center;
    }
    button {
      background-color: orange;
      border: none;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
    }
  }
  img {
    height: 400px;
    width: 550px;
    border-radius: 10px;
  }
`;

export default ProjectCard;
