import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import LogoDev from "../../ui-reusable/LogoDev";
import NavBarNav from "./NavBarNav";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <NavBarStyled>
      {isTabletOrMobile ? <></> : <LogoDev />}
      <NavBarNav menu={menu} />
      {isTabletOrMobile ? (
        <span>
          <i
            onClick={() => setMenu(!menu)}
            className={`${
              menu === false
                ? `fa-solid fa-bars ${menu ? "iconOpen" : "iconClose"} `
                : `fa-solid fa-xmark ${menu && "iconOpen"}`
            }`}
          ></i>
        </span>
      ) : (
        <i className="fa-solid fa-phone iPhone">
          <span className="spanAnim">+336 41 98 17 08</span>
        </i>
      )}
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

  .iPhone {
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
    .spanAnim {
      position: relative;
      top: -20px;
      font-family: sans-serif;
      font-size: 14px;
      color: white;
      transition: 0.5s;
      opacity: 0;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
    border-bottom: 0;

    span {
      width: 100%;
      text-align: end;
      z-index: 30;
      i {
        cursor: pointer;
        font-size: 22px;
        margin-right: 30px;
        color: ${theme.colors.primaryColor};
      }
    }
    .iconOpen {
      transition: 1s;
      transform: rotate(90deg);
    }
    .iconClose {
      transition: 1s;
      transform: rotate(0deg);
    }
  }
`;

export default NavBar;
