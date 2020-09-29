import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/icons/arrowLeft.svg";
import LogoSrc from "../assets/icons/logo.svg";

const BreadcrumbHeaderContainer = styled.header`
  display: grid;
  grid-template: 4em 1fr / 4em 1fr 4em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: var(--bg-main-gradient);
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 2.5em;
  margin-top: 0.6em;
`;

const Title = styled.div`
  font-family: "SFUIheavy";
  letter-spacing: -0.05em;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const BackButton = styled.nav`
  padding: 0.7em 0.2em;
  display: flex;
  align-items: center;
  margin: 0 1em;
  justify-content: space-between;
  & > img {
    display: flex;
    height: 1em;
    cursor: pointer;
  }
`;

export function BreadcrumbHeader() {
  const history = useHistory();

  return (
    <BreadcrumbHeaderContainer>
      <BackButton onClick={() => history.goBack()}>
        <img src={ArrowLeft} alt="zurück" />
      </BackButton>
      <Logo src={LogoSrc} alt="A logo of a lifebuoy inside of a cloche" />
    </BreadcrumbHeaderContainer>
  );
}

const WhiteBreadcrumbHeaderContainer = styled(BreadcrumbHeaderContainer)`
  display: grid;
  grid-template: 4em 1fr / 4em 1fr 4em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: #ffffff;
`;

export function WhiteBreadcrumbHeader() {
  const history = useHistory();

  return (
    <WhiteBreadcrumbHeaderContainer>
      <BackButton onClick={() => history.goBack()}>
        <img src={ArrowLeft} alt="zurück" />
      </BackButton>
      <Title>Second Bite</Title>
    </WhiteBreadcrumbHeaderContainer>
  );
}
