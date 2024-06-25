import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useTranslation } from "react-i18next";
import Button, { ButtonProps } from "@/components/Button";

export default {
  title: "UI Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    iconColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args} label={args.label || "defaultLabel"} />
);
// const { t } = useTranslation();
export const Content = Template.bind({});
Content.args = {
  icon: "Check",
  size: "medium",
  variant: "content",
  iconColor: "text-white",
  iconPosition: "end",
  disabled: false,
  loading: false,
  label: "Primary",
};

export const Outline = Template.bind({});
Outline.args = {
  icon: "Check",
  size: "medium",
  variant: "outline",
  iconColor: "text-outlineColor",
  iconPosition: "end",
  disabled: false,
  loading: false,
  label: "Secondary",
};

export const Text = Template.bind({});
Text.args = {
  icon: "Check",
  size: "medium",
  variant: "text",
  iconColor: "text-outlineColor",
  iconPosition: "end",
  disabled: false,
  loading: false,
  label: "Tertiary",
};
