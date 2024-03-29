import styled from "styled-components";
import imgDev from "../../assets/images/dev.png";
import { useInView } from "react-intersection-observer";

const HomeRightSide = () => {
  const { ref, inView } = useInView();

  return (
    <HomeRightSideStyled>
      <img ref={ref} className={`${inView ? "isVisible" : ""}`} src={imgDev} alt="développeur" />
    </HomeRightSideStyled>
  );
};

const HomeRightSideStyled = styled.div`
  height: 450px;
  width: 400px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 470px;
    width: 400px;
    height: 580px;
    transform: scale(0);
  }

  .isVisible {
    transition: 2s;
    transform: scale(1);
  }
`;

export default HomeRightSide;
