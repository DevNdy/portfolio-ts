import React from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { theme } from "../theme/theme";

const LoaderPage = () => {
  return (
    <LoaderPageStyled>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color={`${theme.colors.primaryColor}`}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderPageStyled>
  );
};

const LoaderPageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LoaderPage;
