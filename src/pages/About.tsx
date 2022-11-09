import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Context";
import TitlePage from "../ui-reusable/TitlePage";

const About = () => {
  const { refAbout } = useContext(AppContext);

  return (
    <AboutStyled ref={refAbout}>
      <TitlePage title="En savoir plus sur moi" />
    </AboutStyled>
  );
};

const AboutStyled = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default About;
