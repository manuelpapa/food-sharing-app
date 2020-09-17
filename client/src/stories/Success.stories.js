import React from "react";

import { Success } from "../pages/Success";

export default {
  title: "Example/Success",
  component: Success,
};

const Template = (args) => <Success {...args} />;

export const SuccessScreen = Template.bind({});
