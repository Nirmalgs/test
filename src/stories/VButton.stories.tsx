import { StoryFn, Meta } from "@storybook/react";
import VButton, { VButtonProps } from "@/components/VButton";
export default {
  title: "UI Components/VButton",
  component: VButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof VButton>;

const Template: StoryFn<VButtonProps> = (args) => <VButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
