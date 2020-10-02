import React from "react";
import { useForm } from "react-hook-form";
import LogoSrc from "../assets/icons/logo.svg";
import styled from "@emotion/styled";
import { registerUser } from "../api/auth";
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
  small,
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
    margin-bottom: 1em;
    padding-bottom: 0.1em;
    :focus {
      outline: none;
    }
    :invalid,
    :required {
      border: 1px solid #de3a3a;
    }
  }
  small {
    color: #de3a3a;
  }
  p {
    font-size: 0.9em;
  }
`;

const Header = styled.header`
  flex-direction: column;
  padding: 1em 0em 0em;
  h1 {
    margin: 0;
  }
  img {
    flex-direction: column;
    padding: 0.5em 0;
    max-width: 20vw;
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

export function Register() {
  const { register, handleSubmit, setError, errors } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      if (response.status === 200) {
        history.push("/user/login");
      } else if (response.status === 400) {
        setError("response", { type: "manual", message: response.statusText });
      }
    } catch (error) {
      setError("response", {
        type: "manual",
        message: "Ein Fehler ist aufgetreten",
      });
    }
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
          <h4>Teller statt Tonne.</h4>
          <p>
            Mehr als 10 Millionen Tonnen Lebensmittel landen alleine in
            Deutschland jedes Jahr im Müll!
          </p>
          <p>
            Tritt uns bei und hilf uns dabei, Essbares vor Ablauf zu verteilen.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              name="name"
              type="name"
              ref={register({
                required: true,
              })}
            />
            {errors.name && <small>Bitte ausfüllen</small>}
            <input
              placeholder="Email"
              name="email"
              type="email"
              ref={register({
                required: true,
              })}
            />
            {errors.email && <small>Bitte ausfüllen</small>}
            <input
              placeholder="Passwort"
              name="password"
              type="password"
              ref={register({
                required: true,
              })}
            />
            {errors.password && <small>Bitte ausfüllen</small>}
            {errors.response && <small>{errors.response.message}</small>}
            <Button type="submit">Registrieren</Button>
            <small>
              <a href="/user/login/">Du bist schon dabei? Hier einloggen</a>
            </small>
          </form>
        </Main>
      </Container>
    </>
  );
}
