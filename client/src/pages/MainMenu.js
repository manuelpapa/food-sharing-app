import React from "react";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { ColorPageLayout } from "../components/PageLayout";
import { Link } from "react-router-dom";

const Logo = styled.img`
  margin-top: 2em;
  max-width: 30%;
  transition: all 0.3s ease-out;
`;

const Menu = styled.a`
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

export function MainMenu() {
  return (
    <>
      <ColorPageLayout>
        <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
        <Menu>
          <Link to="/offers">Angebote</Link>
          <Link to="/createoffer">Essen anbieten</Link>
          <Link to="/usersection">Mein Bereich</Link>
        </Menu>
      </ColorPageLayout>
    </>
  );
}
