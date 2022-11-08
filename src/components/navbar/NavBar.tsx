import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import LogoDev from "../../ui-reusable/LogoDev";

const NavBar = () => {
  return (
    <NavBarStyled>
      <LogoDev />
      <i className="fa-solid fa-bars"></i>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100vw;
  background-color: white;
  border-bottom: 1px solid ${theme.colors.primaryColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  i {
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.gray};
    font-size: 25px;
    border-left: 1px solid ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: white;
      background-color: ${theme.colors.primaryColor};
    }
  }
`;

export default NavBar;
