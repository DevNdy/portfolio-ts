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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
    box-shadow: rgba(0, 0, 0, 0.4) -1px -5px 1px, rgba(201, 201, 201, 0.3) 1px 1px 1px;
  }

  @media (max-width: 599px) {
    button {
      height: 40px;
      width: 40px;
    }
  }
`;

export default BtnSkill;
