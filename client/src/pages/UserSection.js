import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import List from "../components/List";
import { PageLayout } from "../components/PageLayout";
import { fetchOffers, fetchReservations } from "../api/results";
import ArrowSrc from "../assets/icons/arrowRight.svg";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";

const ListItem = styled.a`
  display: grid;
  grid-template: 6em 1fr 1em / 3em 1fr 4em;
  align-items: center;
  margin-top: 1.2em;
  border-bottom: 1px solid #eeeeee;
  text-align: left;
  text-decoration: none;
  color: var(--font-semi-dark);
  :last-child {
    border-bottom: none;
  }
`;

const Title = styled.h2`
  margin-top: 0.5em;
`;

const CategoryImage = styled.img`
  grid-column: 1 / 2;
  max-width: 2em;
  margin-left: 0.6em;
`;

const Description = styled.div`
  grid-column: 2 / 3;
  padding-left: 0.5em;

  img {
    height: 1.3em;
    padding-right: 0.3em;
  }
  h3 {
    padding-bottom: 0;
    font-weight: 600;
  }
  p {
    padding-bottom: 0.5em;
    font-size: 0.8em;
  }
  span {
    padding-right: 0.5em;
  }
`;

const ArrowIcon = styled.img`
  grid-column: 3 / 4;
  max-height: 1em;
`;

export function UserSection() {
  const [reservations, setReservations] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedReservations = await fetchReservations();
      setReservations(fetchedReservations);
      const fetchedOffers = await fetchOffers();
      setOffers(fetchedOffers);
    }
    fetchData();
  }, []);

  return (
    <PageLayout showFooter>
      <List>
        <Title>Reservierungen</Title>
        {reservations.map((reservation) => (
          <ListItem key={reservation._id} href={`/offers/${reservation._id}`}>
            <CategoryImage
              src={`/categories/${reservation.category}.svg`}
              alt="offer title"
            />
            <Description>
              <h3>{reservation.title}</h3>
              <p>
                <img src={LocationSrc} alt="locationpicker icon" />
                {reservation.location.zip} {reservation.location.city}
              </p>
              <p>
                <span>
                  <img src={DateSrc} alt="calendar icon" />
                  {reservation.date}
                </span>
                <span>
                  <img src={TimeSrc} alt="clock icon" />
                  {reservation.start_time} - {reservation.end_time} Uhr
                </span>
              </p>
            </Description>
            <ArrowIcon src={ArrowSrc} alt="offer title" />
          </ListItem>
        ))}
      </List>
      <List>
        <Title>Angebote</Title>
        {offers.map((offer) => (
          <ListItem key={offer._id}>
            <CategoryImage
              src={`/categories/${offer.category}.svg`}
              alt="offer title"
            />
            <Description>
              <h3>{offer.title}</h3>
              <p>
                <img src={LocationSrc} alt="locationpicker icon" />
                {offer.location.zip} {offer.location.city}
              </p>
              <p>
                <span>
                  <img src={DateSrc} alt="calendar icon" />
                  {offer.date}
                </span>
                <span>
                  <img src={TimeSrc} alt="clock icon" />
                  {offer.start_time} - {offer.end_time} Uhr
                </span>
              </p>
            </Description>
            {/* <ArrowIcon src={ArrowSrc} alt="offer title" /> */}
          </ListItem>
        ))}
      </List>
    </PageLayout>
  );
}
