import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import styled from "@emotion/styled";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import Footer from "../components/Footer";
import List from "../components/List";
import { fetchResult } from "../api/results";
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
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const offers = await fetchResult();
      setResults(offers);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || results === null) {
    //return <LoadingScreen />;
    console.log("loading screen");
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <BreadcrumbHeader />
        <Main>
          <List>
            {results.map((result) => (
              <ListItem key={result.id} href={`/offers/${result.id}`}>
                <CategoryImage src={fruitsSrc} alt="offer title" />
                <Description>
                  <h1>{result.title}</h1>
                  <Tags>{result.tags}</Tags>
                  <Location>
                    <img src={LocationSrc} alt="locationpicker icon" />
                    {result.location.street}
                    {result.location.zip}
                    {result.location.city}
                  </Location>
                  <p>
                    <img src={DateSrc} alt="calendar icon" />
                    {result.date}
                  </p>
                  <p>
                    <img src={TimeSrc} alt="clock icon" />
                    {result.time}&nbsp;Uhr
                  </p>
                </Description>
              </ListItem>
            ))}
          </List>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
