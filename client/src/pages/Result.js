import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import { fetchOffer } from "../api/results";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
import fruitsSrc from "../assets/icons/fruits.svg";
import Button from "../components/Button";
import Tag from "../components/Tag";
import { PageLayout } from "../components/PageLayout";

const ListItem = styled.a`
  color: var(--font-semi-dark);
`;

const CategoryImage = styled.img`
  max-height: 8em;
  margin-bottom: 2em;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 2em;
`;

const Description = styled.div`
  justify-content: center;

  img {
    height: 1.2em;
    padding-right: 0.3em;
    margin-bottom: -0.2em;
  }
  p {
    padding-bottom: 0.5em;
    font-size: 0.9em;
  }
`;

const Location = styled.div`
  margin-bottom: 2em;
  p:nth-child(2) {
    padding-left: 1.2em;
  }
  p:last-child {
    padding-left: 1.2em;
  }
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
        <Tags>
          {offers.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
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
