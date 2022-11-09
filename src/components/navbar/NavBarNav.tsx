import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import { theme } from "../../theme/theme";

const NavBarNav = () => {
  const { refHome, refProjects, refAbout, refContact } = useContext(AppContext);

  return (
    <NavBarNavStyled>
      <ul>
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
`;

export default NavBarNav;
