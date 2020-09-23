import React from "react";
import { BreadcrumbHeader, WhiteBreadcrumbHeader } from "./BreadcrumbHeader";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  input,
  select {
    border: solid 1px var(--font-semi-dark);
    padding: 0.5em;
    background-color: #ffffff;
  }
  p,
  input,
  select {
    font-size: 1em;
    margin: 0em;
    font-family: "SFUIreg";
    color: var(--font-semi-dark);
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

const ColorContainer = styled(Container)`
  display: flex;
  text-align: center;
  justify-content: center;
  background-image: var(--bg-main-gradient);
`;

export const ColorPageLayout = ({ children, showFooter }) => {
  return (
    <ColorContainer>
      <WhiteBreadcrumbHeader />
      <Main>{children}</Main>
      {showFooter && <Footer />}
    </ColorContainer>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  showFooter: PropTypes.bool,
};
ColorPageLayout.propTypes = {
  children: PropTypes.node,
  showFooter: PropTypes.bool,
};