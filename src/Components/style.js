import styled from "styled-components";
import logoGamifica from "./logo.svg";
import { React } from "react";

export const Container = styled.div`
  display: flex;
  position: fixed;
  height: 70px;
  max-width: 100%;
  z-index: 100;
  right: 0;
  top: 0;
  left: 0;
  background-color: #030303 15%;
  
`;

export const Appbarcontainer = styled.div`
  height: 32px;
  max-width: 1255px;
  position: fixed;
  top: 32px;
  left: 130px;
  z-index: 100;


`; 
export const LogoContainer = styled.div`
  flex-wrap: nowrap;
  position: fixed;
  height: 28px;
  width: 28px;
`;

export const MenuNav = styled.div`
  display: flex;
  top: 0px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 32px;
  min-width: 1255px;
  position: relative;


  a {
    flex: 1;
    margin: 2px;
    background: border-box;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
    font: "Lato";
  }
`;

export const NavSection = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  gap: 28px;
`;

export const IntroSection = styled.div`
  display: flex;
  height: 430px;
  width: 1255px;
  position: absolute;
  background-color: transparent;
  margin: 132px;
  top: 0px;
  gap: 50px;
`;

export const ImageBox = styled.div`
  background-color: black;
  height: 400px;
  width: 800px;
  position: absolute;
  border-radius: 20px;
  
  

  img {
    align-content: center;
    height: 300px;
    width: 300px;
    margin-top: 750px;
  }
`;

export const TextBox = styled.div`
  background-color: transparent;
  height: 400px;
  width: 800px;
  right: 0px;
  position: absolute;
`;

export const InputRow = styled.div`
  display: flex;
  position: relative;
  top: 30px;

  input {
    line-height: 7vh;
    border-radius: 20px;
    border: 1px solid;
    font-size: 1.5rem;
    width: 15vw;
  }

  svg {
    cursor: pointer;
  }

  button {
    border-color: rgb(4, 196, 242);
    color: rgb(4, 196, 242);
    display: flex;
    position: absolute;
    height: 28px;
    width: 300px;
    right: 0px;
    top: 380px;
    

  }
`;

  export const ButtonSection = styled.div `
    display: flex;
    position: absolute;
    height: 28px;
    width: 300px;
    right: 0px;
    top: 370px;
    z-index: 0;
    
  `;


export const NomeDoc = styled.div `

    height: 22px;
    font-size: 20px;
    font-weight: 450;
    color: white;
    font: "Lato";
    align-content: center;
    margin: 0;
    position: absolute;
    right: 0;
    display: flex;
    background-color: transparent;
  
  p {
    margin: 0;
  }
` 