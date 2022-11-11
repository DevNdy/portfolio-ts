import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";
import { useInView } from "react-intersection-observer";

interface BtnSkillProps {
  icon: any;
  onMouseEnter: () => void;
}

const BtnSkill = ({ icon, onMouseEnter }: BtnSkillProps) => {
  const { ref, inView } = useInView();
  return (
    <BtnSkillStyled onMouseEnter={onMouseEnter}>
      <button ref={ref} className={`${inView ? "isVisible" : ""}`}>
        {icon}
      </button>
    </BtnSkillStyled>
  );
};

const BtnSkillStyled = styled.div`
  button {
    opacity: 0;
    height: 60px;
    width: 60px;
    padding: 5px;
    border-radius: 10%;
    border: none;
    color: ${theme.colors.primaryColor};
    font-size: 30px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 5px, rgba(255, 188, 230, 0.3) 1px 2px 10px,
      rgba(3, 3, 3, 0.2) 1px 2px 2px;
    cursor: pointer;
    &:hover {
      box-shadow: none;
    }
  }

  .isVisible {
    transition: 1.5s;
    opacity: 1;
  }
`;

export default BtnSkill;
