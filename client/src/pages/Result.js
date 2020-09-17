import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import Footer from "../components/Footer";
import { fetchResultObject } from "../api/results";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
import fruitsSrc from "../assets/icons/fruits.svg";

const Main = styled.div`
  margin: 6em 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.a`
  align-items: center;

  border-bottom: 1px solid #eeeeee;
  text-decoration: none;
  color: var(--font-semi-dark);
  background: red;
`;

const CategoryImage = styled.img`
  max-height: 6em;
`;

const Description = styled.div`
  background: hotpink;

  img {
    height: 1.2em;
    padding-right: 0.3em;
    margin-bottom: -0.2em;
  }
  h1,
  p {
    padding-bottom: 0.5em;
  }
  p {
    font-size: 0.9em;
  }
`;
const Tags = styled.div`
  background: orange;
`;
const Location = styled.div`
  background: yellow;
`;

export function Result() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const offers = await fetchResultObject();
      setResults(offers);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || results === null) {
    return <div>loading...</div>;
  }

  return (
    <>
      <BreadcrumbHeader />
      <Main>
        <ListItem key={results.id} href={`/offers/${results.id}`}>
          <CategoryImage src={fruitsSrc} alt="offer title" />
          <Description>
            <h1>{results.title}</h1>
            <Tags>{results.tags}</Tags>
            <Location>
              <img src={LocationSrc} alt="locationpicker icon" />
              <li>{results.location.street}</li>
              <li>{results.location.zip}</li>
              <li> {results.location.city}</li>
            </Location>
            <p>
              <img src={DateSrc} alt="calendar icon" />
              {results.date}
            </p>
            <p>
              <img src={TimeSrc} alt="clock icon" />
              {results.time}&nbsp;Uhr
            </p>
          </Description>
        </ListItem>
      </Main>
      <Footer />
    </>
  );
}
