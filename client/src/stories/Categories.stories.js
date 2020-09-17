import React from "react";

import { Categories } from "../pages/Categories";

export default {
  title: "Example/Categories",
  component: Categories,
};

const Template = (args) => <Categories {...args} />;

export const CategoriesScreen = Template.bind({});
