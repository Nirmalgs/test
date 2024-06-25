import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown, { DropdownProps } from "@/components/DropDown";

export default {
  title: "UI Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "dropdown",
  value: "",
  options: [
    { label: "Select an Option", value: "" },
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
  error: "", // Example error message
};
