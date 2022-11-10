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
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 470px;
    width: 400px;
    height: 580px;
    opacity: 0;
  }

  .isVisible {
    transition: 5s;
    opacity: 1;
  }
`;

export default HomeRightSide;
