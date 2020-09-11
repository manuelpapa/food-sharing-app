import React from "react";
import GlobalStyles from "./GlobalStyles";
import Button from "./components/Button";
import InputField from "./components/InputField";
import LogoSrc from "../src/assets/images/secondBite_Logo.svg";
import styled from "@emotion/styled";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h4,
  p {
    text-align: center;
    padding-bottom: 1em;
  }
`;

const Header = styled.header`
  flex-direction: column;
  padding: 3em 0em;
  img {
    flex-direction: column;
    padding: 1em 0;
    max-width: 30vw;
    display: block;
    margin: auto;
  }
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em 3.2em;
`;
const Footer = styled.div`
  flex-direction: column;
  position: fixed;
  bottom: 1em;
`;

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Header>
          <h2>Second Bite</h2>
          <p>Saviors of food and waste.</p>

          <img src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
        </Header>
        <Main>
          <h4>Im Namen der Mundgerechtigkeit.</h4>
          <p>
            Mehr als 10 Millionen Tonnen Lebensmittel landen alleine in
            Deutschland jedes Jahr im Müll.
          </p>
          <p>
            Hilf mit Müll zu vermeiden und teile, was noch köstlich und gut ist.
          </p>
          <InputField>E-Mail</InputField>
          <InputField>Passwort</InputField>
          <Button>Login</Button>
          <small>Registrieren</small>
        </Main>
        <Footer>
          <small>© Manuel Papa 2020</small>
        </Footer>
      </Container>
    </>
  );
}

export default App;
