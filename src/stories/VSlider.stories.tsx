import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import VSlider, { VSliderProps } from "@/components/VSlider";

export default {
  title: "UI Components/VSlider",
  component: VSlider,
} as Meta;

const Template: StoryFn<VSliderProps> = (args) => <VSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    "/locales/demoImages/truck.png",
    "/locales/demoImages/truck.png",
    "/locales/demoImages/truck.png",
    "/locales/demoImages/truck.png",
  ],
  mainImageWidth: 600,
  mainImageHeight: 600,
  thumbnailWidth: 50,
  thumbnailHeight: 50,
};
