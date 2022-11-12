import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";

interface NavBarNavProps {
  menu: boolean;
}

const NavBarNav = ({ menu }: NavBarNavProps) => {
  const { refHome, refProjects, refAbout, refContact } = useContext(AppContext);

  return (
    <NavBarNavStyled>
      <ul className={`${menu ? "menuOpen" : "menuClose"}`}>
        <li onClick={() => refHome.current.scrollIntoView({ behavior: "smooth" })}>- Accueil</li>
        <li onClick={() => refProjects.current.scrollIntoView({ behavior: "smooth" })}>
          - Mes projets
        </li>
        <li onClick={() => refAbout.current.scrollIntoView({ behavior: "smooth" })}>
          - Plus sur moi
        </li>
        <li onClick={() => refContact.current.scrollIntoView({ behavior: "smooth" })}>- Contact</li>
      </ul>
    </NavBarNavStyled>
  );
};

const NavBarNavStyled = styled.nav`
  height: 4rem;

  ul {
    margin: 0;
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 4rem;
      width: 150px;
      padding: 0 20px 0 20px;
      background-color: white;
      list-style: none;
      color: ${theme.colors.gray};
      font-size: 21px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.8s;
      &:hover {
        background-color: ${theme.colors.primaryColor};
        color: white;
      }
    }
  }

  @media (max-width: 1100px) {
    position: absolute;
    top: 7vh;
    left: 0;
    height: 140px;
    width: 100vw;
    max-width: 100vw;

    .menuOpen {
      height: 100%;
      width: 99vw;
      max-width: 100vw;
      z-index: -1;
      transition: 1s;
      transform: translateY(0%);
      border-bottom: 1px solid ${theme.colors.primaryColor};
      background-color: white;
      padding-bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        position: relative;
        left: -30px;
        width: 120px;
        font-size: 16px;
        font-weight: 600;
        margin: 5px 0 5px 5px;
        opacity: 1;
        transition: 0.3s;
      }
    }
    .menuClose {
      position: relative;
      left: -30px;
      height: 100%;
      width: 99vw;
      max-width: 100vw;
      z-index: 0;
      transition: 1s;
      transform: translateY(-95%);
      border-bottom: 1px solid ${theme.colors.primaryColor};
      background-color: white;
      padding-bottom: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        transition: 0.5s;
        opacity: 0;
        font-size: 16px;
        font-weight: 400;
        margin: 10px 0 0 5px;
      }
    }
  }

  @media (max-width: 599px) {
    top: 8vh;
  }
`;

export default NavBarNav;
