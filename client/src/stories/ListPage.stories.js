import React from "react";

import { ListPage } from "../components/ListPage";

export default {
  title: "Example/ListPage",
  component: ListPage,
};

const Template = (args) => <ListPage {...args} />;

export const ListScreen = Template.bind({});
