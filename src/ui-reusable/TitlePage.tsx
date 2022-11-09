import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

interface TitleProps {
  title: string;
}

const TitlePage = ({ title }: TitleProps) => {
  return (
    <TitlePageStyled>
      {title} <span>...</span>
    </TitlePageStyled>
  );
};

const TitlePageStyled = styled.h2`
  margin: 150px 0 40px;
  font-size: 40px;
  font-weight: 500;
  color: ${theme.colors.title};

  span {
    font-size: 45px;
    color: ${theme.colors.primaryColor};
  }
`;

export default TitlePage;
