import RadioButton, { RadioButtonProps } from "@/components/RadioButton";
import { Meta, StoryFn } from "@storybook/react/*";
import React from "react";

export default {
  title: "UI Components/Radio Button",
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Radio Button",
  options: ["Yes", "No"],
  error: "",
};
