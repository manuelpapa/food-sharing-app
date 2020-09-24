import React from "react";

import { CreatedPrompt } from "../pages/CreatedPrompt";

export default {
  title: "Example/CreatedPrompt",
  component: CreatedPrompt,
};

const Template = (args) => <CreatedPrompt {...args} />;

export const Created = Template.bind({});
