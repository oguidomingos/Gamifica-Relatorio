import React, { useState } from "react";
import styled from "styled-components";
import { signOut } from "../GoogleAuth/authUtils";
import * as S from "./style";
import {
  Container,
  LogoContainer,
  MenuNav,
  NomedoEvento,
  NavSection,
  RightMenu,
  Appbarcontainer,
  NomeDoc
} from "./style";
import logogamifica1 from "./logo.svg";
import Grid from "./Layout/Grid.js";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <Container>
      <Appbarcontainer>
        <MenuNav>
          <NavSection>
            <img src={logogamifica1} />
            <a> Audiência </a>
            <a> Estatíssticas </a>
            <a> Highlights </a>
            <a> Feedback </a>
          </NavSection>
          <NomeDoc>
            <p>Relatório Nome do Evento</p>{" "}
          </NomeDoc>
        </MenuNav>
      </Appbarcontainer>
    </Container>
  );
};

export default Header;
