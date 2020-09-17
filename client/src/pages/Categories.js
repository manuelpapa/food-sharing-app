import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import List from "../components/List";
import { fetchResults } from "../api/results";
import breadSrc from "../assets/icons/bread.svg";
// import beansSrc from "../assets/icons/beans.svg";
// import cheeseSrc from "../assets/icons/cheese.svg";
// import dishesSrc from "../assets/icons/dishes.svg";
// import drinksSrc from "../assets/icons/drinks.svg";
// import fastfoodSrc from "../assets/icons/fastfood.svg";
// import fishSrc from "../assets/icons/fish.svg";
// import fruitsSrc from "../assets/icons/fruits.svg";
// import meatSrc from "../assets/icons/meat.svg";
// import milkSrc from "../assets/icons/milk.svg";
// import miscSrc from "../assets/icons/misc.svg";
// import noodlesSrc from "../assets/icons/noodles.svg";
// import nutsSrc from "../assets/icons/nuts.svg";
// import oilSrc from "../assets/icons/oil.svg";
// import potatoesSrc from "../assets/icons/potatoes.svg";
// import sweetsSrc from "../assets/icons/sweets.svg";
// import vegetablesSrc from "../assets/icons/vegetables.svg";

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

export function Categories() {
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
      <BreadcrumbHeader />
      <Main>
        <List>
          {results.map((result) => (
            <ListItem key={result.id} href={`/offers/${result.id}`}>
              <CategoryImage src={breadSrc} alt="offer title" />
              <h2>Kategorie</h2>
            </ListItem>
          ))}
        </List>
      </Main>
    </>
  );
}
