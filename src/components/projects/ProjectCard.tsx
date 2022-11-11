import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { theme } from "../../theme/theme";

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
  const { ref, inView } = useInView();
  return (
    <ProjectCardStyled onClick={onClick}>
      <div ref={ref} className={`${inView ? "isVisible" : ""}`}>
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
  background-color: #f9f5f5;
  height: 290px;
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    transform: scale(1);
    z-index: 2;
  }
  &:hover .infos {
    opacity: 1;
    transform: scaleY(1);
  }
  .infos {
    position: absolute;
    top: 18px;
    left: 15px;
    background: rgba(216, 49, 91, 0.9);
    border-radius: 8px;
    color: white;
    height: 250px;
    width: 380px;
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
        font-size: 1.5rem;
        color: white;
      }

      p {
        font-size: 1rem;
        color: #ececec;
        width: 360px;
      }

      span {
        margin-top: 10px;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        border: 1px solid white;
        padding: 5px 8px 5px 8px;
      }
    }
  }

  div {
    opacity: 0;
  }

  img {
    height: 250px;
    width: 380px;
    border-radius: 8px;
  }

  .isVisible {
    transition: 4s;
    opacity: 1;
  }
`;

export default ProjectCard;
