import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";

export default {
  title: "SearchHeader",
  component: SearchHeader,
};

const Template = () => (
  <Router>
    <SearchHeader />
  </Router>
);

export const MainSearchHeader = Template.bind({});
