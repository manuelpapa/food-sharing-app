import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import List from "../components/List";
import { PageLayout } from "../components/PageLayout";
import { fetchOffers, fetchReservations } from "../api/results";
import ArrowSrc from "../assets/icons/arrowRight.svg";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
import fruitsSrc from "../assets/icons/fruits.svg";

const ListItem = styled.a`
  display: grid;
  grid-template: 6em 1fr 1em / 3em 1fr 4em;
  align-items: center;
  margin-top: 1.2em;
  border-bottom: 1px solid #eeeeee;
  text-align: left;
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
    font-size: 0.8em;
  }
  span {
    padding-right: 1em;
  }
`;

const ArrowIcon = styled.img`
  grid-column: 3 / 4;
  max-height: 1em;
`;

export function UserSection() {
  const [reservations, setReservations] = useState([]);
  const [offers, setOffers] = useState([]);
  // TODO: get userId from auth-token
  const userId = "1";

  useEffect(() => {
    async function fetchData() {
      const fetchedReservations = await fetchReservations(userId);
      setReservations(fetchedReservations);
      const fetchedOffers = await fetchOffers(userId);
      setOffers(fetchedOffers);
    }
    fetchData();
  }, []);

  return (
    <PageLayout showFooter>
      <List>
        <h2>Reservierungen</h2>
        {reservations.map((reservation) => (
          <ListItem key={reservation.id} href={`/offers/${reservation.id}`}>
            <CategoryImage src={fruitsSrc} alt="offer title" />
            <Description>
              <h3>{reservation.title}</h3>
              <p>
                <img src={LocationSrc} alt="locationpicker icon" />
                {reservation.city}
              </p>
              <p>
                <span>
                  <img src={DateSrc} alt="calendar icon" />
                  {reservation.date}
                </span>
                <span>
                  <img src={TimeSrc} alt="clock icon" />
                  {reservation.time}&nbsp;Uhr
                </span>
              </p>
            </Description>
            <ArrowIcon src={ArrowSrc} alt="offer title" />
          </ListItem>
        ))}
      </List>
      <List>
        <h2>Angebote</h2>
        {offers.map((offer) => (
          <ListItem key={offer.id} href={`/offers/${offer.id}`}>
            <CategoryImage src={fruitsSrc} alt="offer title" />
            <Description>
              <h3>{offer.title}</h3>
              <p>
                <img src={LocationSrc} alt="locationpicker icon" />
                {offer.city}
              </p>
              <p>
                <span>
                  <img src={DateSrc} alt="calendar icon" />
                  {offer.date}
                </span>
                <span>
                  <img src={TimeSrc} alt="clock icon" />
                  {offer.time}&nbsp;Uhr
                </span>
              </p>
            </Description>
            <ArrowIcon src={ArrowSrc} alt="offer title" />
          </ListItem>
        ))}
      </List>
    </PageLayout>
  );
}
