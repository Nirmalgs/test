import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import VDropdown, { VDropdownProps } from "@/components/VDropdown";

export default {
  title: "UI Components/VDropdown",
  component: VDropdown,
} as Meta;

const options = [
  { label: "Label 1", value: "1" },
  { label: "Label 2", value: "2" },
  { label: "Label 3", value: "3" },
  { label: "Label 4", value: "4" },
];

const Template: StoryFn<VDropdownProps> = (args) => <VDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  title: "List Value",
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  options,
  multiple: true,
  title: "MultiSelect",
};

export const Searchable = Template.bind({});
Searchable.args = {
  options,
  searchable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options,
  disabled: true,
  title: "Disabled",
};
