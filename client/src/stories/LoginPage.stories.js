import React from "react";

import { LoginPage } from "../pages/LoginPage";

export default {
  title: "Example/LoginPage",
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const LoginScreen = Template.bind({});
