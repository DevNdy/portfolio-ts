import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import LogoDev from "../../ui-reusable/LogoDev";
import NavBarMenuIcon from "./NavBarMenuIcon";
import NavBarNav from "./NavBarNav";

const NavBar = () => {
  return (
    <NavBarStyled>
      <LogoDev />
      <NavBarNav />
      <i className="fa-solid fa-phone">
        <span>+336 41 98 17 08</span>
      </i>
      {/* <i className="fa-solid fa-bars"></i> */}
    </NavBarStyled>
  );
};

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100vw;
  background-color: white;
  border-bottom: 0.5px solid ${theme.colors.primaryColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 50;

  i {
    width: 9rem;
    height: 2.9rem;
    margin-right: 10px;
    padding-top: 20px;
    color: ${theme.colors.gray};
    font-size: 25px;
    border-left: 0.5px solid ${theme.colors.primaryColor};
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
      position: relative;
      top: -20px;
      font-family: sans-serif;
      font-size: 14px;
      color: white;
      transition: 0.5s;
      opacity: 0;
    }
  }
`;

export default NavBar;
