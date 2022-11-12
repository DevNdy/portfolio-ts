import { useInView } from "react-intersection-observer";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import TextAnimScroll from "../../ui-reusable/TextAnimScroll";

const HomeLeftSide = () => {
  const { ref, inView } = useInView();
  const { ref: refScroll, inView: inViewScroll } = useInView();

  return (
    <HomeLeftSideStyled>
      <h1 ref={ref} className={`${inView ? "isVisible" : ""}`}>
        {" "}
        <span className="spanHey">{"< Hey, je suis"}</span> Kévin Naudy{" "}
        <span className="spanDev">
          {"Développeur Front-end React />"}
          <i className="fa-brands fa-react iReact"></i>
          <img
            className="ts"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
            alt="ts"
          />
        </span>
      </h1>
      <div ref={refScroll} className={`${inViewScroll ? "isVisible" : "divScroll"}`}>
        <TextAnimScroll />
      </div>
    </HomeLeftSideStyled>
  );
};

const HomeLeftSideStyled = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 250px 0 180px 100px;
    color: ${theme.colors.primaryColor};
    font-size: 75px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    .spanHey {
      font-size: 35px;
      color: ${theme.colors.gray};
    }
    .spanDev {
      margin-top: 5px;
      font-size: 25px;
      font-style: italic;
      font-weight: 400;
      color: ${theme.colors.gray};
      display: flex;
      flex-direction: row;
      align-items: center;
      i {
        margin-left: 20px;
        color: ${theme.colors.primaryColor};
      }
      .ts {
        height: 23px;
        margin-left: 5px;
      }
    }
  }

  .isVisible {
    transition: 3s;
    opacity: 1;
  }

  .divScroll {
    opacity: 0;
  }

  @media (max-width: 1100px) {
    width: 100vw;
    h1 {
      margin-left: 0;
      align-items: center;
    }
  }

  @media (max-width: 599px) {
    h1 {
      margin: 200px 0 170px 0;
      font-size: 40px;
      align-items: center;

      .spanHey {
        font-size: 20px;
        color: ${theme.colors.gray};
      }
      .spanDev {
        font-size: 17px;
        align-items: center;

        .ts {
          height: 20px;
        }
      }
    }
  }
`;

export default HomeLeftSide;
