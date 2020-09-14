import React from "react";

import { Login } from "../components/Login";

export default {
  title: "Example/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const LoginPage = Template.bind({});
