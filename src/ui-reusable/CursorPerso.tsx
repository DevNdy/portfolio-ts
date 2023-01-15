import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

type CursorProps = {
  cursorRef: any;
};

const CursorPerso = ({ cursorRef }: CursorProps) => {
  return (
    <CursorPersoStyled ref={cursorRef}>
      <div className="centerCursor"></div>
    </CursorPersoStyled>
  );
};

const CursorPersoStyled = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  pointer-events: none;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .centerCursor {
    height: 8px;
    width: 8px;
    background-color: ${theme.colors.primaryColor};
    border-radius: 50%;
    border: 1px solid white;
  }
`;

export default CursorPerso;
