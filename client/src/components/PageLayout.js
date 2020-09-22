import React from "react";
import BreadcrumbHeader from "./BreadcrumbHeader";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  p,
  input,
  select {
    font-size: 1em;
    font-family: "SFUIreg";
    color: var(--font-semi-dark);
    padding: 0.5em;
    margin: 0em;
    background-color: #ffffff;
  }
`;

const Main = styled.div`
  margin: 5em 0;
`;

export const PageLayout = ({ children, showFooter }) => {
  return (
    <Container>
      <BreadcrumbHeader />
      <Main>{children}</Main>
      {showFooter && <Footer />}
    </Container>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  showFooter: PropTypes.bool,
};
