import React from "react";

import { Result } from "../pages/Result";

export default {
  title: "Example/Result",
  component: Result,
};

const Template = (args) => <Result {...args} />;

export const ResultScreen = Template.bind({});
