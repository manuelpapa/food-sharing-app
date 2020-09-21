import React from "react";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import styled from "@emotion/styled";
import Form from "../components/Form";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  margin-top: 6em;
  display: flex;
  place-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  display: grid;
`;

const CancelButton = styled.button`
  font-family: "SFUIbold";
  font-size: 1em;
  color: #ffffff;
  border: 0;
  border-radius: 3em;
  padding: 1em 2em;
  margin: 2em 0em 0.5em;
  display: inline-block;
  line-height: 1;
  background: #de3a3a;
  cursor: pointer;
`;

export function Create() {
  return (
    <>
      <Container>
        <BreadcrumbHeader />
        <Main>
          <h2>Titel</h2>
          <h2>Titel</h2>
          <h2>Titel</h2>
          <h2>Titel</h2>
          <h2>Abholort</h2>
          <Form />
        </Main>
        <Footer>
          <Button type="submit">Anbieten</Button>
          <CancelButton type="reset">Abbrechen</CancelButton>
        </Footer>
      </Container>
    </>
  );
}
