import React from "react";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: var(--bg-main-gradient);
`;

const Logo = styled.img`
  margin-top: 6em;
  max-width: 30vw;
  transition: all 0.3s ease-out;
`;

const Main = styled.div`
  margin-top: 6em;
  display: flex;
  place-items: center;
  flex-direction: column;
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

const Button = styled.button`
  font-family: "SFUIbold";
  font-size: 1em;
  color: #000000;
  border: 0;
  border-radius: 3em;
  padding: 1em 2em;
  margin: 2em 0em 0.5em;
  display: inline-block;
  line-height: 1;
  background-image: #ffffff;
  cursor: pointer;
`;

export function Success() {
  return (
    <>
      <Container>
        <BreadcrumbHeader />
        <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
        <Main>
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
        </Main>
        <Footer />
      </Container>
    </>
  );
}
