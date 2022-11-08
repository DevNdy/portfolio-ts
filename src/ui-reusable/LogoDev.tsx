import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const LogoDev = () => {
  return <LogoDevStyled>@DevNdy</LogoDevStyled>;
};

const LogoDevStyled = styled.span`
  height: 4rem;
  width: 7rem;
  border-right: 1px solid ${theme.colors.primaryColor};
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    color: white;
    background-color: ${theme.colors.primaryColor};
  }
`;

export default LogoDev;
