import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { fetchOffer, reserveOffer } from "../api/results";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";

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
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const offerId = pathParts[2];
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const offers = await fetchOffer(offerId);
      setOffers(offers);
      setIsLoading(false);
    }
    fetchData();
  }, [offerId]);

  async function reserveSuccess(offerId) {
    const reservedOffer = await reserveOffer(offerId);
    if (reservedOffer) {
      history.push("/reserved");
    }
  }

  if (isLoading || offers === null) {
    return <div>loading...</div>;
  }
  return (
    <PageLayout showFooter>
      <ListItem key={offers._id}>
        <CategoryImage
          src={`/categories/${offers.category}.svg`}
          alt="offer title"
        />
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
              {offers.location.zip} {offers.location.city}
            </p>
          </Location>
          <p>
            <img src={DateSrc} alt="calendar icon" />
            {offers.date}
          </p>
          <p>
            <img src={TimeSrc} alt="clock icon" />
            {offers.start_time} - {offers.end_time} Uhr
          </p>
        </Description>
      </ListItem>
      <Button onClick={() => reserveSuccess(offerId)}>Reservieren</Button>
    </PageLayout>
  );
}
