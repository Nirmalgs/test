import VIcon, { ViconProps } from "@/components/VIcon";
import { Meta, StoryFn } from "@storybook/react/*";

export default {
  title: "UI Components/VIcon",
  component: VIcon,
} as Meta;

const Template: StoryFn<ViconProps> = (args) => <VIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "Hide",
  size: 30,
  iconColor: "#0671E0",
};

export const RightArow = Template.bind({});
RightArow.args = {
  icon: "RightArrow",
  size: 30,
  iconColor: "#0671E0",
};
