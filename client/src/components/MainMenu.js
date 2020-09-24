import React from "react";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { BrowserRouter } from "react-router-dom";
import { ColorPageLayout } from "./PageLayout";

const Logo = styled.img`
  max-width: 30%;
  transition: all 0.3s ease-out;
`;

const Footer = styled.div`
  flex-direction: column;

  justify-content: center;
  bottom: 1em;
`;

const MenuLink = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "SFUIbold";
  letter-spacing: -0.05em;
  font-size: 2em;
  color: #000000;
  padding-bottom: 1em;
`;

export function MainMenu() {
  return (
    <>
      <BrowserRouter>
        <ColorPageLayout>
          <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
          <MenuLink>Angebote</MenuLink>
          <MenuLink>Essen anbieten</MenuLink>
          <MenuLink>Mein Bereich</MenuLink>
          <Footer>
            <small>© Manuel Papa 2020</small>
          </Footer>
        </ColorPageLayout>
      </BrowserRouter>
    </>
  );
}
