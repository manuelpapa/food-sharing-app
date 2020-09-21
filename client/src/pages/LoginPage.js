import React from "react";
import { useForm } from "react-hook-form";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";

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

export function LoginPage() {
  const { login, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Header>
          <h1>Second Bite</h1>
          <p>Saviors of food and waste.</p>

          <img src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
        </Header>
        <Main>
          <h4>Im Namen der Mundgerechtigkeit.</h4>
          <p>
            Mehr als 10 Millionen Tonnen Lebensmittel landen alleine in
            Deutschland jedes Jahr im Müll!
          </p>
          <p>
            Hilf mit Müll zu vermeiden und teile, was noch köstlich und gut ist.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Email" name="email" ref={login} />
            <input placeholder="Password" name="pwd" ref={login} />
            <button type="submit">Submit</button>
          </form>
          <small>Registrieren</small>
        </Main>
        <Footer>
          <small>© Manuel Papa 2020</small>
        </Footer>
      </Container>
    </>
  );
}
