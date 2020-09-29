import React from "react";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { ColorPageLayout } from "../components/PageLayout";
import { WhiteButton } from "../components/Button";
import { Link } from "react-router-dom";

const Logo = styled.img`
  max-width: 30%;
  transition: all 0.3s ease-out;
`;

const Title = styled.div`
  text-align: center;
  margin: 2em 5em;
`;

const Description = styled.div`
  text-align: center;
  justify-content: center;
  margin: 0 5em;

  p {
    padding-bottom: 0.5em;
    font-size: 0.9em;
  }
`;

export function CreatedPrompt() {
  return (
    <ColorPageLayout showFooter>
      <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
      <Title>
        <h1>Erfolgreich serviert!</h1>
      </Title>
      <Description>
        <h3>
          Vielen Dank, dass du das Essen vor dem Müll rettest und jemand anderem
          dabei noch eine Freude bereitest.
        </h3>
      </Description>
      <Link to="/usersection">
        <WhiteButton>Meine Angebote</WhiteButton>
      </Link>
    </ColorPageLayout>
  );
}
