import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import List from "../components/List";
import { fetchResults } from "../api/results";
import ArrowSrc from "../assets/icons/arrowRight.svg";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
import fruitsSrc from "../assets/icons/fruits.svg";
import { PageLayout } from "../components/PageLayout";

const ListItem = styled.a`
  display: grid;
  grid-template: 5em 1fr 1em / 4em 1fr 4em;
  align-items: center;
  margin-top: 1em;
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
  }
  h3,
  p {
    padding-bottom: 0.5em;
  }
  p {
    font-size: 0.9em;
  }
  span {
    padding-right: 1em;
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
      <PageLayout showFooter>
        <List>
          {results.map((result) => (
            <ListItem key={result.id} href={`/offers/${result.id}`}>
              <CategoryImage src={fruitsSrc} alt="offer title" />
              <Description>
                <h3>{result.title}</h3>
                <p>
                  <img src={LocationSrc} alt="locationpicker icon" />
                  {result.city}
                </p>
                <p>
                  <span>
                    <img src={DateSrc} alt="calendar icon" />
                    {result.date}
                  </span>
                  <span>
                    <img src={TimeSrc} alt="clock icon" />
                    {result.time}&nbsp;Uhr
                  </span>
                </p>
              </Description>
              <ArrowIcon src={ArrowSrc} alt="offer title" />
            </ListItem>
          ))}
        </List>
      </PageLayout>
    </>
  );
}
