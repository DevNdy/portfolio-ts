import React from "react";
import styled from "styled-components";
import BtnSkill from "../../ui-reusable/BtnSkill";

const AboutSkills = () => {
  return (
    <AboutSkillsStyled>
      <BtnSkill icon={<i className="fa-solid fa-microchip"></i>} onClick={() => {}} />
      <BtnSkill icon={<i className="fa-solid fa-pencil"></i>} onClick={() => {}} />
      <BtnSkill icon={<i className="fa-solid fa-plus"></i>} onClick={() => {}} />
    </AboutSkillsStyled>
  );
};

const AboutSkillsStyled = styled.div`
  width: 600px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default AboutSkills;
