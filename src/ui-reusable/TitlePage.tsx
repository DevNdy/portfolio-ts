import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";
import { useInView } from "react-intersection-observer";

interface TitleProps {
  title: string;
}

const TitlePage = ({ title }: TitleProps) => {
  const { ref, inView } = useInView();
  return (
    <TitlePageStyled>
      <h2 ref={ref} className={`${inView ? "isVisible" : ""}`}>
        {title} <span>...</span>
      </h2>
    </TitlePageStyled>
  );
};

const TitlePageStyled = styled.div`
  h2 {
    margin: 150px 0 40px;
    font-size: 40px;
    font-weight: 500;
    color: ${theme.colors.title};
    opacity: 0;

    span {
      font-size: 45px;
      color: ${theme.colors.primaryColor};
    }
  }
  .isVisible {
    transition: 3s;
    opacity: 1;
  }

  @media (max-width: 1100px) {
    h2 {
      margin: 130px 0 40px;
      font-size: 30px;

      span {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 599px) {
    h2 {
      margin: 130px 0 40px;
      font-size: 23px;

      span {
        font-size: 23px;
      }
    }
  }
`;

export default TitlePage;
