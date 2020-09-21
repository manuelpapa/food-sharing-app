import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/icons/arrowLeft.svg";

const BreadcrumbHeaderContainer = styled.header`
  display: grid;
  grid-template: 4em 1fr / 4em 1fr 4em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: var(--bg-main-gradient);
`;

const Title = styled.h3`
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

function BreadcrumbHeader() {
  const history = useHistory();

  return (
    <BreadcrumbHeaderContainer>
      <BackButton onClick={() => history.goBack()}>
        <img src={ArrowLeft} alt="zurück" />
      </BackButton>
      <Title>Details</Title>
    </BreadcrumbHeaderContainer>
  );
}

export default BreadcrumbHeader;
