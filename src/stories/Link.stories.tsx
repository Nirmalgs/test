import Link, { LinkProps } from "@/components/VLink";
import { Meta, StoryFn } from "@storybook/react/*";
import React from "react";

export default {
  title: "UI Components/VLink",
  component: Link,
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Link",
  href: "http://www.google.co.in/",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  href: "http://www.google.co.in/",
  disabled: true,
};
