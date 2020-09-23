import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BreadcrumbHeader } from "../components/BreadcrumbHeader";

export default {
  title: "BreadcrumbHeader",
  component: BreadcrumbHeader,
};

const Template = () => (
  <Router>
    <BreadcrumbHeader />
  </Router>
);

export const MainBreadcrumbHeader = Template.bind({});
