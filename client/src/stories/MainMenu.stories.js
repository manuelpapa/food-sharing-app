import React from "react";

import { MainMenu } from "../pages/MainMenu";

export default {
  title: "Example/MainMenu",
  component: MainMenu,
};

const Template = (args) => <MainMenu {...args} />;

export const MainMenuScreen = Template.bind({});
