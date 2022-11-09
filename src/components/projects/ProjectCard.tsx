import React from "react";
import styled from "styled-components";

interface ArticleProps {
  img: string;
  name: string;
  description: string;
  onClick: () => {} | void;
  url: string;
  responsive: string;
}

const ProjectCard: React.FC<ArticleProps> = ({
  onClick,
  name,
  description,
  url,
  img,
  responsive,
}) => {
  return (
    <ProjectCardStyled onClick={onClick}>
      <div>
        <img src={img} alt="profile" />
      </div>
      <div className="infos">
        <a href={url} target="_blank" rel="noreferrer">
          <h3>{name}</h3>
          <p>{description}</p>
          <span>{responsive}</span>
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
    border-radius: 8px;
    color: white;
    height: 400px;
    width: 550px;
    opacity: 0;
    transform: scaleY(0);
    transition: 0.7s;

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      h3 {
        font-size: 3rem;
        color: white;
      }

      p {
        color: white;
        width: 400px;
      }

      span {
        margin-top: 40px;
        font-weight: 600;
        color: white;
        border: 1px solid white;
        padding: 5px 8px 5px 8px;
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
