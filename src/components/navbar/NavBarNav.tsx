import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const NavBarNav = () => {
  return (
    <NavBarNavStyled>
      <ul>
        <li>- Accueil</li>
        <li>- Mes projets</li>
        <li>- Plus sur moi</li>
        <li>- Contact</li>
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
