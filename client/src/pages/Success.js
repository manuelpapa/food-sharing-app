import React from "react";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";

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

const MenuLink = styled.a`
  font-family: "SFUIbold";
  letter-spacing: -0.05em;
  font-size: 2em;
  color: #000000;
  padding-bottom: 1em;
`;

export function Success() {
  return (
    <>
      <Container>
        <BreadcrumbHeader />
        <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
        <Main>
          <MenuLink>Angebote</MenuLink>
          <MenuLink>Essen anbieten</MenuLink>
          <MenuLink>Mein Bereich</MenuLink>
        </Main>
        <Footer>
          <small>© Manuel Papa 2020</small>
        </Footer>
      </Container>
    </>
  );
}
