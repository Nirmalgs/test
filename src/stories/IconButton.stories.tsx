import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import IconButton, {
  IconButtonProps,
} from "@/components/IconButton/IconButton";

export default {
  title: "UI Components/IconButton",
  component: IconButton,
  argTypes: {
    onClick: { action: "clicked" },
    iconColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: "Search",
  size: "medium",
  variant: "primary",
  iconColor: "#e42121",
  disabled: false,
  loading: false,
  label: "Label",
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: "Search",
  size: "medium",
  variant: "secondary",
  iconColor: "#1E1E1E",
  disabled: false,
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: "Search",
  size: "medium",
  variant: "primary",
  iconColor: "#ffffff",
  disabled: true,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  icon: "Search",
  size: "medium",
  variant: "primary",
  iconColor: "#c12e2e",
  disabled: false,
  loading: true,
};
