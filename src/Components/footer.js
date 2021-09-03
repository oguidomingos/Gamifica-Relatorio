import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import logo from "../assets/logo.png";

const Footer = () => (
  <FooterContainer>
    
     
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-weight: 500;
  background-color: transparent;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .developed {
    margin-left: 1vw;
    display: flex;
    flex-direction: row;
    align-items: center;

    .logo-container {
      width: 50px;
      height: 100%;
      padding: 0 20px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .source {
    margin-right: 2vw;

    svg {
      margin-right: 0.5vw;
    }
  }
`;
