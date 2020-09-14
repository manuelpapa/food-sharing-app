import React from "react";

import { List } from "../components/List";

export default {
  title: "Example/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const ListPage = Template.bind({});
