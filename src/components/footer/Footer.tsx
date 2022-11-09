import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="divLeft">
        <h4>KEVIN NAUDY</h4>
        <h4>
          Développeur web React <span>Toulouse - Haute-Garonne</span>
        </h4>
      </div>
      <div>
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
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  height: 150px;
  max-width: 100vw;
  background-color: ${theme.colors.primaryColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .divLeft {
    h4 {
      color: white;
      font-weight: 400;
      display: flex;
      flex-direction: column;
    }
  }
  i {
    font-size: 40px;
    margin: 0 15px 0 15px;
    cursor: pointer;
  }
  .iGitHub {
    color: white;
    &:hover {
      color: black;
    }
  }
  .iLinkdin {
    color: white;
    &:hover {
      color: black;
    }
  }
  .iTwitter {
    color: white;
    &:hover {
      color: black;
    }
  }
`;

export default Footer;
