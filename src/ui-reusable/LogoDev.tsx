import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const LogoDev = () => {
  return (
    <LogoDevStyled>
      @DevNdy <span>Bienvenue</span>
    </LogoDevStyled>
  );
};

const LogoDevStyled = styled.span`
  height: 2.2rem;
  width: 7rem;
  padding: 30px 10px 0 20px;
  border-right: 0.5px solid ${theme.colors.primaryColor};
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.primaryColor};
    span {
      opacity: 1;
    }
  }

  span {
    transition: 0.5s;
    opacity: 0;
    color: white;
    position: relative;
    top: -30px;
  }
`;

export default LogoDev;
