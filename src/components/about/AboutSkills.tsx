import React, { useState } from "react";
import styled from "styled-components";
import BtnSkill from "../../ui-reusable/BtnSkill";
import SkillWindow from "../../ui-reusable/SkillWindow";
import { imgTech, imgOther, imgDesign } from "../../text/skillImg";
import { theme } from "../../theme/theme";

const AboutSkills = () => {
  const [openSkill, setOpenSkill] = useState(0);

  return (
    <AboutSkillsStyled>
      <div className="btnSkills">
        <BtnSkill
          icon={<i className="fa-solid fa-microchip"></i>}
          onClick={() => setOpenSkill(1)}
        />
        <BtnSkill icon={<i className="fa-solid fa-pencil"></i>} onClick={() => setOpenSkill(2)} />
        <BtnSkill icon={<i className="fa-solid fa-plus"></i>} onClick={() => setOpenSkill(3)} />
      </div>
      {openSkill === 1 ? (
        <SkillWindow imgSkill={imgTech} title="Technologie" />
      ) : openSkill === 2 ? (
        <SkillWindow imgSkill={imgDesign} title="Design" />
      ) : openSkill === 3 ? (
        <SkillWindow imgSkill={imgOther} title="Autres" />
      ) : (
        <span className="divSkills">Mes Skills</span>
      )}
    </AboutSkillsStyled>
  );
};

const AboutSkillsStyled = styled.div`
  min-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .btnSkills {
    height: 400px;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .divSkills {
    height: 320px;
    width: 500px;
    margin-left: 100px;
    left: 100px;
    background-color: #f4f3f3;
    border-radius: 12px;
    font-size: 35px;
    color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default AboutSkills;
