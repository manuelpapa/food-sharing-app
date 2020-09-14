import React from "react";

import { Page } from "../components/Login";
import * as HeaderStories from "./Header.stories";

export default {
  title: "Example/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
