import React from "react";
import { useForm } from "react-hook-form";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { fetchToken } from "../api/auth";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1,
  h3,
  h4,
  p,
  input,
  select {
    text-align: center;
  }
  input,
  select {
    border: none;
    border-bottom: solid 1px var(--font-semi-dark);
    padding: 0.5em;
    font-size: 0.8em;
    margin: 0;
    color: var(--font-semi-dark);
  }
  input {
    text-align: center;
    padding-bottom: 0.1em;
    :focus {
      outline: none;
    }
    :invalid,
    :required {
      border: 1px solid #de3a3a;
    }
  }
`;

const Header = styled.header`
  flex-direction: column;
  padding: 1em 0em;
  h1 {
    margin: 0;
  }
  img {
    flex-direction: column;
    padding: 0.5em 0;
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
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export function LoginPage() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const response = fetchToken(data);
    if (response) {
      history.push("/offers");
    }
    console.log(errors);
  };

  return (
    <>
      <Container>
        <Header>
          <h1>Second Bite</h1>
          <h3>Saviors of food and waste.</h3>

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
            <input
              placeholder="Email"
              name="email"
              type="email"
              ref={register({
                required: true,
              })}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              ref={register({
                required: true,
              })}
            />
            <Button type="submit">Login</Button>
          </form>
        </Main>
      </Container>
    </>
  );
}
