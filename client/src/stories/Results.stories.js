import React from "react";

import { Results } from "../pages/Results";

export default {
  title: "Example/Results",
  component: Results,
};

const Template = (args) => <Results {...args} />;

export const ResultsScreen = Template.bind({});
