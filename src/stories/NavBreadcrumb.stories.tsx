import NavBreadcrumb, {
  BreadcrumbsProps,
} from "@/components/NavigationBreadcrumb";
import { Meta, StoryFn } from "@storybook/react/*";
import React from "react";

export default {
  title: "UI Components/Navigation Breadcrumbs",
  component: NavBreadcrumb,
} as Meta;

const Template: StoryFn<BreadcrumbsProps> = (args) => (
  <NavBreadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  breadcrumbs: [{ label: "Home", url: "/" }],
};

export const Multiple = Template.bind({});
Multiple.args = {
  breadcrumbs: [
    { label: "Home", url: "/" },
    { label: "List", url: "/" },
    { label: "Details", url: "/" },
  ],
};
