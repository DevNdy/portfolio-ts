import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

interface SkillWindowProps {
  imgSkill: string[];
  title: string;
  description: string[];
}

const SkillWindow = ({ imgSkill, title, description }: SkillWindowProps) => {
  return (
    <SkillWindowStyled>
      <h3>{title}</h3>
      <div className="divImg">
        {imgSkill.map((e: string, i: number) => (
          <img key={i} src={e} alt="skill" />
        ))}
      </div>
      <div className="infoSkill">
        {description.map((e: string) => (
          <span>{e}</span>
        ))}
      </div>
    </SkillWindowStyled>
  );
};

const SkillWindowStyled = styled.div`
  margin-left: 100px;
  height: 253px;
  width: 500px;
  background-color: #f9f5f5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.7s;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
  &:hover .infoSkill {
    opacity: 1;
    transform: scaleX(1);
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
    background: rgba(216, 49, 91, 0.9);
    border-radius: 8px;
    color: white;
    height: 253px;
    width: 500px;
    opacity: 0;
    transform: scaleX(0);
    transition: 0.7s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      margin-top: 30px;
      font-weight: 600;
      font-size: 22px;
      color: white;
    }
  }
`;

export default SkillWindow;
