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
    height: 60px;
    width: 60px;
    padding: 5px;
    border-radius: 50%;
    border: none;
    color: ${theme.colors.primaryColor};
    font-size: 30px;
    background-color: white;

    cursor: pointer;
    &:hover {
      border-radius: 50%;
      transform: rotate(0deg);
      box-shadow: none;
    }
  }

  .isVisible {
    border-radius: 10%;
    transition: 1s;
    transform: rotate(180deg);
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 5px, rgba(255, 188, 230, 0.3) 1px 2px 10px,
      rgba(3, 3, 3, 0.2) 1px 2px 2px;
  }
`;

export default BtnSkill;
