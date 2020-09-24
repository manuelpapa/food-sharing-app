import React from "react";

import { UserSection } from "../pages/UserSection";

export default {
  title: "Example/UserSection",
  component: UserSection,
};

const Template = (args) => <UserSection {...args} />;

export const UserSectionScreen = Template.bind({});
