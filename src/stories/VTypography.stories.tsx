import { Meta, StoryFn } from "@storybook/react";
import VTypography, { VTypographyProps } from "@/components/VTypography";

export default {
  title: "UI Components/VTypography",
  component: VTypography,
} as Meta<typeof VTypography>;

const Template: StoryFn<VTypographyProps> = (args) => {
  return <VTypography {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: "d_grey",
  variant: "h1",
  children: "Text with typography",
};
