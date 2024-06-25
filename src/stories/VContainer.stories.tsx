import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import VContainer, { ContainerProps } from "@/components/VContainer";

export default {
  title: "UI Components/Container",
  component: VContainer,
  argTypes: {
    maxWidth: {
      control: { type: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    },
    disableGutters: { control: "boolean" },
    fixed: { control: "boolean" },
  },
} as Meta<typeof VContainer>;

const Template: StoryFn<ContainerProps> = (args) => (
  <VContainer {...args}>
    <div className="bg-gray-200 h-64">
      <p className="text-center">Container Content</p>
    </div>
  </VContainer>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: "lg",
  disableGutters: false,
  fixed: false,
};
