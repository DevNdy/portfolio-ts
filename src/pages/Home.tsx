import React, { useContext } from "react";
import styled from "styled-components";
import HomeLeftSide from "../components/home/HomeLeftSide";
import HomeRightSide from "../components/home/HomeRightSide";
import { AppContext } from "../context/Context";

const Home = () => {
  const { refHome } = useContext(AppContext);
  return (
    <HomeStyled ref={refHome}>
      <HomeLeftSide />
      <HomeRightSide />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export default Home;
