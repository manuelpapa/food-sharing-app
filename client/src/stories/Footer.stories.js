import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Example/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
