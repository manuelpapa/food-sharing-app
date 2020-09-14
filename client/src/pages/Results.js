import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import styled from "@emotion/styled";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";
import List from "../components/List";
import { fetchResults } from "../api/results";
import LogoSrc from "../assets/images/secondBite_Logo.svg";
//import SearchInput from "../components/SearchInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h4,
  p {
    text-align: center;
    padding-bottom: 1em;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em 3.2em;
`;

const ListItem = styled.a`
  display: flex;
  padding: 1em;
  border-bottom: 1px solid #eeeeee;
  text-decoration: none;
  color: var(--font-semi-dark);
  align-items: left;
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
      <Container>
        <GlobalStyles />
        <BrowserRouter>
          <SearchHeader />
          <Main>
            <List>
              {results.map((result) => (
                <ListItem key={result.id} href={`/offers/${result.id}`}>
                  <p>{result.id}</p>
                  <img
                    src={LogoSrc}
                    alt="A logo of a lifebuoy inside of a cloche"
                  />
                  <p>{result.title}</p>
                  <p>{result.location}</p>
                  <p>{result.category}</p>

                  <p>{result.pickup_date}</p>
                  <p>{result.pickup_time}</p>
                </ListItem>
              ))}
            </List>
          </Main>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}
