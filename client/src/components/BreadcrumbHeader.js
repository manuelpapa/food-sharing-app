import React from "react";
import { Link, useHistory } from "react-router-dom";
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
  margin: 0 1em;
  justify-content: space-between;
  & > a {
    display: flex;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

function BreadcrumbHeader() {
  const history = useHistory();

  return (
    <BreadcrumbHeaderContainer>
      <BackButton>
        <Link onClick={() => history.goBack()}>
          <img src={ArrowLeft} alt="zurück" />
        </Link>
      </BackButton>
      <Title>Details</Title>
    </BreadcrumbHeaderContainer>
  );
}

export default BreadcrumbHeader;

/*
SET FETCHED TITLE AS TITLE

import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
import { fetchResult } from "../api/results";

const BreadcrumbHeaderContainer = styled.header`
  display: grid;
  grid-template: 4em 1fr / 4em 1fr;
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
  margin: 0 1em;
  justify-content: space-between;
  & > a {
    display: flex;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

function BreadcrumbHeader() {
  const { title } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const offer = await fetchResult(title);
      setResults(offer);
      setIsLoading(false);
    }
    fetchData();
  }, [title]);
  if (isLoading || results === null) {
    //return <LoadingScreen />;
    console.log("loading screen");
  }
  return (
    <BreadcrumbHeaderContainer>
      <BackButton>
        <Link onClick={() => history.goBack()}>
          <img src={ArrowLeft} alt="zurück" />
        </Link>
      </BackButton>
      <Title>{results.map((result) => `${result.title}`)}</Title>
    </BreadcrumbHeaderContainer>
  );
}

export default BreadcrumbHeader;
*/
