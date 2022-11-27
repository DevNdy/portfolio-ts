import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { useInView } from "react-intersection-observer";

interface SkillWindowProps {
  imgSkill: string[];
  title: string;
  description: string[];
}

const SkillWindow = ({ imgSkill, title, description }: SkillWindowProps) => {
  const { ref, inView } = useInView();
  return (
    <SkillWindowStyled>
      <span ref={ref} className={`${inView ? "isVisible" : ""}`}>
        <h3>{title}</h3>
        <div className="divImg">
          {imgSkill.map((e: string, i: number) => (
            <img key={i} src={e} alt="skill" />
          ))}
        </div>
        <div className="infoSkill">
          {description.map((e: string, i: number) => (
            <h3 key={i}>{e}</h3>
          ))}
        </div>
      </span>
    </SkillWindowStyled>
  );
};

const SkillWindowStyled = styled.div`
  margin-left: 100px;

  span {
    height: 253px;
    width: 500px;
    background-color: #f9f5f5;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
      transform: scale(1.01);
      z-index: 2;
    }
    &:hover .infoSkill {
      opacity: 1;
      transform: scaleY(1);
    }
    h3 {
      font-size: 30px;
      color: ${theme.colors.gray};
    }

    .divImg {
      width: 500px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      img {
        height: 40px;
        margin: 10px 25px 30px 25px;
      }
    }

    .infoSkill {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(212, 9, 60, 0.958);
      border-radius: 8px;
      color: white;
      height: 253px;
      width: 500px;
      opacity: 0;
      transform: scaleY(0);
      transition: 0.7s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        margin: 10px 0 0 0;
        font-weight: 800;
        font-size: 17px;
        color: #ececec;
        opacity: 1;
      }
    }
  }

  .isVisible {
    transition: 3s;
    opacity: 1;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    span {
      width: 470px;

      .infoSkill {
        width: 470px;
      }

      .divImg {
        max-width: 470px;
        img {
          height: 30px;
          width: 30px;
        }
      }
    }
  }

  @media (max-width: 599px) {
    margin-left: 0;
    span {
      width: 330px;

      .infoSkill {
        width: 330px;
      }
      .divImg {
        max-width: 330px;
        img {
          height: 27px;
          width: 27px;
        }
      }
    }
  }
`;

export default SkillWindow;
