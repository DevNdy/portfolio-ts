import React, { useState } from "react";
import styled from "styled-components";
import BtnSkill from "../../ui-reusable/BtnSkill";
import SkillWindow from "./SkillWindow";
import { imgTech, imgOther, imgDesign } from "../../text/skillImg";
import { theme } from "../../theme/theme";
import { skills, skillTextTech, skillDesign, skillOther } from "../../text/skillText";

const AboutSkills = () => {
  const [openSkill, setOpenSkill] = useState(0);

  return (
    <AboutSkillsStyled>
      <div className="btnSkills">
        <BtnSkill
          icon={<i className="fa-solid fa-microchip"></i>}
          onMouseEnter={() => setOpenSkill(1)}
        />
        <BtnSkill
          icon={<i className="fa-solid fa-pencil"></i>}
          onMouseEnter={() => setOpenSkill(2)}
        />
        <BtnSkill
          icon={<i className="fa-solid fa-plus"></i>}
          onMouseEnter={() => setOpenSkill(3)}
        />
      </div>
      {openSkill === 1 ? (
        <SkillWindow imgSkill={imgTech} title="Technologies" description={skillTextTech} />
      ) : openSkill === 2 ? (
        <SkillWindow imgSkill={imgDesign} title="Design" description={skillDesign} />
      ) : openSkill === 3 ? (
        <SkillWindow imgSkill={imgOther} title="Autres" description={skillOther} />
      ) : (
        <SkillWindow imgSkill={[]} title="Mes Skills" description={skills} />
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
    height: 320px;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (max-width: 800px) {
    margin-top: 10px;
    height: 380px;
    max-width: 460px;
    flex-direction: column;
    align-items: center;
    .btnSkills {
      height: 60px;
      width: 400px;
      flex-direction: row;
    }
  }
`;

export default AboutSkills;
