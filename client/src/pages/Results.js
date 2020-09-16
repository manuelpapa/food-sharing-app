import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "@emotion/styled";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";
import List from "../components/List";
import { fetchResults } from "../api/results";
import ArrowSrc from "../assets/icons/arrowRight.svg";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
import fruitsSrc from "../assets/icons/fruits.svg";

const Main = styled.div`
  margin: 4em 0;
  display: grid;
`;

const ListItem = styled.a`
  display: grid;
  grid-template: 4em 1fr 1em / 3em 1fr 1em;
  align-items: center;
  margin: 1em;
  border-bottom: 1px solid #eeeeee;
  text-decoration: none;
  color: var(--font-semi-dark);
`;

const CategoryImage = styled.img`
  grid-column: 1 / 2;
  max-height: 2em;
`;

const Description = styled.div`
  grid-column: 2 / 3;
  padding-left: 1em;

  img {
    height: 1.2em;
    padding-right: 0.3em;
    margin-bottom: -0.2em;
  }
  h3,
  p {
    padding-bottom: 0.5em;
  }
  p {
    font-size: 0.9em;
  }
`;

const ArrowIcon = styled.img`
  grid-column: 3 / 4;
  max-height: 1em;
`;

export function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const offers = await fetchResults();
      setResults(offers);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || results === null) {
    //return <LoadingScreen />;
    console.log("loading screen");
  }

  /*
  const filteredResults = results.filter((result) => {
    return result.title.toLowerCase().match(query.toLowerCase());
  });*/

  return (
    <>
      <BrowserRouter>
        <SearchHeader />
        <Main>
          <List>
            {results.map((result) => (
              <ListItem key={result.id} href={`/offers/${result.id}`}>
                <CategoryImage src={fruitsSrc} alt="offer title" />
                <Description>
                  <h3>{result.title}</h3>
                  <p>
                    <img src={LocationSrc} alt="locationpicker icon" />
                    {result.location}
                  </p>
                  <p>
                    <img src={DateSrc} alt="calendar icon" />
                    {result.pickup_date}&nbsp;
                    <img src={TimeSrc} alt="clock icon" />
                    {result.pickup_time}&nbsp;Uhr
                  </p>
                </Description>
                <ArrowIcon src={ArrowSrc} alt="offer title" />
              </ListItem>
            ))}
          </List>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
