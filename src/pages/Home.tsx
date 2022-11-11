import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import HomeLeftSide from "../components/home/HomeLeftSide";
import HomeRightSide from "../components/home/HomeRightSide";
import { AppContext } from "../context/Context";

const Home = () => {
  const { refHome } = useContext(AppContext);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <HomeStyled ref={refHome}>
      <HomeLeftSide />
      {isTabletOrMobile ? <></> : <HomeRightSide />}
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Home;
