import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

interface BtnSkillProps {
  icon: any;
  onClick: () => void;
}

const BtnSkill = ({ icon, onClick }: BtnSkillProps) => {
  return <BtnSkillStyled onClick={onClick}>{icon}</BtnSkillStyled>;
};

const BtnSkillStyled = styled.button`
  height: 80px;
  width: 80px;
  padding: 5px;
  border-radius: 10%;
  border: none;
  color: ${theme.colors.primaryColor};
  font-size: 40px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 5px, rgba(255, 188, 230, 0.3) 1px 2px 10px,
    rgba(3, 3, 3, 0.2) 1px 2px 2px;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    box-shadow: none;
  }
`;

export default BtnSkill;
