import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const SocialNetworksWidget = () => {
  return (
    <SocialNetworksWidgetStyled>
      <a href="https://github.com/DevNdy" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github iGitHub"></i>
      </a>
      <a href="https://linkedin.com/in/kévin-naudy-b18a9b249" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin iLinkdin"></i>
      </a>
      <a
        href={`https://twitter.com/dev_ndy?t=BJsZoZ5vebP6gCCpW9zn7A&s=09`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter iTwitter"></i>
      </a>
    </SocialNetworksWidgetStyled>
  );
};

const SocialNetworksWidgetStyled = styled.div`
  position: fixed;
  left: 0;
  top: 35%;
  height: 250px;
  width: 70px;
  background-color: white;
  border: 0.5px solid ${theme.colors.primaryColor};
  border-left: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;

  i {
    height: 30px;
    width: 30px;
    text-align: center;
    padding: 9px;
    border-radius: 50%;
    color: ${theme.colors.primaryColor};
    font-size: 30px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 5px 5px, rgba(201, 201, 201, 0.3) 1px 1px 10px;
    transition: 0.8s;
    &:hover {
      box-shadow: none;
    }
  }

  @media (max-width: 1100px) {
    height: 50px;
    width: 270px;
    top: 0px;
    left: 10px;
    border: none;
    flex-direction: row;
    padding: 0;
    z-index: 50;

    i {
      height: 13px;
      width: 13px;
      font-size: 14px;
    }
  }
`;

export default SocialNetworksWidget;
