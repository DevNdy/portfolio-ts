import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

interface SkillWindowProps {
  imgSkill: string[];
  title: string;
}

const SkillWindow = ({ imgSkill, title }: SkillWindowProps) => {
  return (
    <SkillWindowStyled>
      <h3>{title}</h3>
      <div className="divImg">
        {imgSkill.map((e: string, i: number) => (
          <img key={i} src={e} alt="skill" />
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

  h3 {
    font-size: 30px;
    color: ${theme.colors.gray};
  }

  .divImg {
    height: 210px;
    width: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    img {
      height: 40px;
      margin: 0 25px 0 25px;
    }
  }
`;

export default SkillWindow;
