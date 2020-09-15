import React from "react";
import GlobalStyles from "../GlobalStyles";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import LogoSrc from "../assets/images/secondBite_Logo.svg";
import styled from "@emotion/styled";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: var(--bg-main-gradient);
`;

const Logo = styled.img`
  margin-top: 6em;
  max-width: 30vw;
`;

const Main = styled.div`
  margin-top: 6em;
  display: flex;
  place-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  flex-direction: column;
  position: fixed;
  bottom: 1em;
`;

export function MainMenu() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Container>
          <BreadcrumbHeader />
          <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
          <Main>
            <menuLinks>Angebote</menuLinks>
            <menuLinks>Essen anbieten</menuLinks>
            <menuLinks>Mein Bereich</menuLinks>
          </Main>
          <Footer>
            <small>© Manuel Papa 2020</small>
          </Footer>
        </Container>
      </BrowserRouter>
    </>
  );
}
