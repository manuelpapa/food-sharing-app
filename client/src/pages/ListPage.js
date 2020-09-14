import React from "react";
import GlobalStyles from "../GlobalStyles";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { BrowserRouter } from "react-router-dom";
import List from "../components/List";

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

export function ListPage() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <BrowserRouter>
          <SearchHeader />
          <Main>
            <List>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
              <ListItem>wadegi</ListItem>
            </List>
          </Main>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}
