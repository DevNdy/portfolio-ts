import React from "react";
import styled from "styled-components";
import HomeLeftSide from "../components/home/HomeLeftSide";
import HomeRightSide from "../components/home/HomeRightSide";

const Home = () => {
  return (
    <HomeStyled>
      <HomeLeftSide />
      <HomeRightSide />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export default Home;
