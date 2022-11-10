import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const NavBarMenuIcon = () => {
  return <NavBarMenuIconStyled>hello</NavBarMenuIconStyled>;
};

const NavBarMenuIconStyled = styled.div`
  position: absolute;
  right: 20px;
  top: 70px;
  height: 200px;
  width: 480px;
  background-color: ${theme.colors.primaryColor};
  border-radius: 12px;
`;

export default NavBarMenuIcon;
