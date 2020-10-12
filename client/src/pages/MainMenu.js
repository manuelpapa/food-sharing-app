import React from "react";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { ColorPageLayout } from "../components/PageLayout";
import { Link } from "react-router-dom";

const Logo = styled.img`
  margin-top: 2em;
  max-width: 7em;
  transition: all 0.3s ease-out;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2em;
  font-family: "SFUIbold";
  letter-spacing: -0.05em;
  font-size: 2em;
  color: #000000;
  padding-bottom: 1em;
  a {
    color: black;
  }
`;

const Footer = styled.footer`
  display: grid;
  font-family: "SFUIbold";
  letter-spacing: -0.05em;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 2em;
  width: 100vw;
  a {
    color: black;
  }
`;

export function MainMenu() {
  return (
    <>
      <ColorPageLayout>
        <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
        <Menu>
          <Link to="/offers">Angebote</Link>
          <Link to="#">Essen anbieten</Link>
          <Link to="/usersection">Mein Bereich</Link>
        </Menu>
        <Footer>
          <Link to="/Login">Logout</Link>
        </Footer>
      </ColorPageLayout>
    </>
  );
}
