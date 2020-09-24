import React from "react";

import { ReservedPrompt } from "../pages/ReservedPrompt";

export default {
  title: "Example/ReservedPrompt",
  component: ReservedPrompt,
};

const Template = (args) => <ReservedPrompt {...args} />;

export const Reserved = Template.bind({});
