import React, { useState } from "react";
import styled from "styled-components";
import imgDev from "../../assets/images/dev.png";

const HomeRightSide = () => {
  const [hoverImg, setHoverImg] = useState<boolean>(false);

  return (
    <HomeRightSideStyled>
      <img
        onMouseEnter={() => setHoverImg(true)}
        className={`${hoverImg ? "imgHover" : ""}`}
        src={imgDev}
        alt="développeur"
      />
    </HomeRightSideStyled>
  );
};

const HomeRightSideStyled = styled.div`
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 470px;
    width: 500px;
    height: 680px;
    transition: 1s;
  }

  .imgHover {
    transition: 2s;
    transform: scale(0.8);
  }
`;

export default HomeRightSide;
