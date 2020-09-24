import React from "react";

import { Create } from "../pages/Create";

export default {
  title: "Example/Create",
  component: Create,
};

const Template = (args) => <Create {...args} />;

export const CreateOffer = Template.bind({});
