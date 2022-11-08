import React from "react";
import styled from "styled-components";
import imgDev from "../../assets/images/dev.png";

const HomeRightSide = () => {
  return (
    <HomeRightSideStyled>
      <div className="box-wrap">
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <div className="img-box">
          <img src={imgDev} alt="développeur" />
        </div>
      </div>
    </HomeRightSideStyled>
  );
};

const HomeRightSideStyled = styled.div`
  cursor: cell;
  height: 50vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .box-wrap {
    width: 480px;
    height: 700px;
    position: relative;
    transition: all 0.6s ease-out;
    perspective: 800px;
  }
  .box-wrap:hover {
    transition: all 0.3s linear;
    transform: scale(1.1);
  }
  .img-box {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    color: #fff;
    font-size: 90px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.6s ease-out;
    transform: rotateX(0deg) rotateY(0deg);
    perspective: 800px;
    transform-style: preserve-3d;
    img {
      margin-top: 120px;
      width: 435px;
      height: 605px;
      opacity: 1;
    }
  }
  .t_over {
    width: 33.333%;
    height: 33.333%;
    position: absolute;
    z-index: 1;
  }
  .t_over:nth-child(1) {
    left: 0;
    top: 0;
  }
  .t_over:nth-child(2) {
    left: 33.333%;
    top: 0;
  }
  .t_over:nth-child(3) {
    left: 66.666%;
    top: 0;
  }
  .t_over:nth-child(4) {
    left: 0;
    top: 33.333%;
  }
  .t_over:nth-child(5) {
    left: 33.333%;
    top: 33.333%;
  }
  .t_over:nth-child(6) {
    left: 66.666%;
    top: 33.333%;
  }
  .t_over:nth-child(7) {
    left: 0;
    top: 66.666%;
  }
  .t_over:nth-child(8) {
    left: 33.333%;
    top: 66.666%;
  }
  .t_over:nth-child(9) {
    left: 66.666%;
    top: 66.666%;
  }
  .t_over:nth-child(1):hover ~ .img-box {
    transform: rotateX(-20deg) rotateY(20deg);
  }
  .t_over:nth-child(2):hover ~ .img-box {
    transform: rotateX(-20deg) rotateY(0deg);
  }
  .t_over:nth-child(3):hover ~ .img-box {
    transform: rotateX(-20deg) rotateY(-20deg);
  }
  .t_over:nth-child(4):hover ~ .img-box {
    transform: rotateX(0deg) rotateY(20deg);
  }
  .t_over:nth-child(5):hover ~ .img-box {
    transform: rotateX(0deg) rotateY(0deg);
  }
  .t_over:nth-child(6):hover ~ .img-box {
    transform: rotateX(0deg) rotateY(-20deg);
  }
  .t_over:nth-child(7):hover ~ .img-box {
    transform: rotateX(20deg) rotateY(20deg);
  }
  .t_over:nth-child(8):hover ~ .img-box {
    transform: rotateX(20deg) rotateY(0deg);
  }
  .t_over:nth-child(9):hover ~ .img-box {
    transform: rotateX(20deg) rotateY(-20deg);
  }
`;

export default HomeRightSide;
