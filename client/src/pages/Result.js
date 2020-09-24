import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { fetchOffer } from "../api/results";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
// import beansSrc from "../assets/icons/beans.svg";
// import breadSrc from "../assets/icons/bread.svg";
// import cheeseSrc from "../assets/icons/cheese.svg";
// import dishesSrc from "../assets/icons/dishes.svg";
// import drinksSrc from "../assets/icons/drinks.svg";
// import fastfoodSrc from "../assets/icons/fastfood.svg";
// import fishSrc from "../assets/icons/fish.svg";
import fruitsSrc from "../assets/icons/fruits.svg";
// import meatSrc from "../assets/icons/meat.svg";
// import milkSrc from "../assets/icons/milk.svg";
// import miscSrc from "../assets/icons/misc.svg";
// import noodlesSrc from "../assets/icons/noodles.svg";
// import nutsSrc from "../assets/icons/nuts.svg";
// import oilSrc from "../assets/icons/oil.svg";
// import potatoesSrc from "../assets/icons/potatoes.svg";
// import sweetsSrc from "../assets/icons/sweets.svg";
// import vegetablesSrc from "../assets/icons/vegetables.svg";

const ListItem = styled.a`
  color: var(--font-semi-dark);
  h1,
  h2 {
    margin: 0;
  }
`;

const CategoryImage = styled.img`
  max-height: 8em;
  margin-bottom: 2em;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;

const Tag = styled.div`
  font-family: "SFUIreg";
  font-size: 1em;
  color: var(--font-semi-dark);
  border: 1px solid var(--font-semi-dark);
  border-radius: 3em;
  padding: 1em 2em;
  margin: 0 0.5em 0.5em 0.5em;
  display: inline-block;
  line-height: 1;
  background: "white";
  cursor: pointer;
`;

const Description = styled.div`
  margin-top: 1em;
  justify-content: center;

  img {
    height: 1.2em;
    padding-right: 0.3em;
    margin-top: -0.2em;
  }
  p {
    padding-bottom: 0.3em;
    font-size: 0.9em;
  }
`;

const Location = styled.div`
  margin-bottom: 0.5em;
`;

export function Result() {
  const [offers, setOffers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const offers = await fetchOffer();
      setOffers(offers);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || offers === null) {
    return <div>loading...</div>;
  }

  return (
    <PageLayout showFooter>
      <ListItem key={offers.id}>
        <CategoryImage src={fruitsSrc} alt="offer title" />
        <Title>
          <h1>{offers.title}</h1>
          <h2>{offers.category}</h2>
        </Title>
        {offers.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <Description>
          <Location>
            <p>
              <img src={LocationSrc} alt="locationpicker icon" />
              {offers.location.name}
            </p>
            <p>{offers.location.street}</p>
            <p>
              {offers.location.zip}&nbsp;{offers.location.city}
            </p>
          </Location>
          <p>
            <img src={DateSrc} alt="calendar icon" />
            {offers.date}
          </p>
          <p>
            <img src={TimeSrc} alt="clock icon" />
            {offers.time}&nbsp;Uhr
          </p>
        </Description>
      </ListItem>
      <Button>Reservieren</Button>
    </PageLayout>
  );
}
