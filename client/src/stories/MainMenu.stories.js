import React from "react";

import { MainMenu } from "../components/MainMenu";

export default {
  title: "Example/MainMenu",
  component: MainMenu,
};

const Template = (args) => <MainMenu {...args} />;

export const MainMenuScreen = Template.bind({});
