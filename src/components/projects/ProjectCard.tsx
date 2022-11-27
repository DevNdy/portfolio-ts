import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

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
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.7s;

  div {
    opacity: 0;
    img {
      height: 250px;
      width: 360px;
      border-radius: 8px;
    }
  }

  &:hover {
    transform: scale(1);
    z-index: 2;
  }
  &:hover .infos {
    opacity: 1;
    transform: scaleX(1);
  }
  //anim
  .infos {
    position: absolute;
    top: 18px;
    left: 10px;
    background: rgba(212, 9, 60, 0.958);
    border-radius: 8px;
    color: white;
    height: 250px;
    width: 360px;
    opacity: 0;
    transform: scaleX(0);
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
        width: 340px;
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

  .isVisible {
    transition: 2s;
    opacity: 1;
  }

  @media (max-width: 870px) {
    height: 310px;
    width: 440px;
    div {
      opacity: 0;
      img {
        height: 280px;
        width: 400px;
        border-radius: 8px;
      }
    }

    .infos {
      top: 13px;
      left: 20px;
      height: 280px;
      width: 400px;
    }
  }

  @media (max-width: 599px) {
    height: 250px;
    width: 340px;
    div {
      opacity: 0;
      img {
        height: 220px;
        width: 320px;
        border-radius: 8px;
      }
    }

    .infos {
      top: 13px;
      left: 10px;
      height: 220px;
      width: 320px;

      a {
        h3 {
          margin: 10px 0 0 0;
        }

        p {
          width: 310px;
        }

        span {
          height: 15px;
          font-size: 13px;
          margin: 0;
        }
      }
    }
  }
`;

export default ProjectCard;
