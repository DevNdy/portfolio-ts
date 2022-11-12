import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const TextAnimScroll = () => {
  return <TextAnimScrollStyled>Scroll {"---"}</TextAnimScrollStyled>;
};

const TextAnimScrollStyled = styled.div`
  transform: rotate(90deg);
  width: 60px;
  height: 20px;
  margin-left: 50px;
  font-size: 15px;
  background: linear-gradient(
    to right,
    #c8c8c8 20%,
    ${theme.colors.primaryColor} 40%,
    60%,
    #c8c8c8 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  @media (max-width: 599px) {
    margin-left: 0;
  }
`;

export default TextAnimScroll;
