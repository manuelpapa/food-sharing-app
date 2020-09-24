import React from "react";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { ColorPageLayout } from "../components/PageLayout";
import Button from "../components/Button";

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

export function Success() {
  return (
    <ColorPageLayout showFooter>
      <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
      <Title>
        <h1>Erfolgreich reserviert!</h1>
      </Title>
      <Description>
        <h3>
          Bitte sei fair und lasse nicht zu, dass Essen in der Tonne landet.
          Lass den anderen den Vortritt, wenn du doch verhindert bist.
        </h3>
      </Description>
      <Button>Meine Bestellungen</Button>
    </ColorPageLayout>
  );
}
