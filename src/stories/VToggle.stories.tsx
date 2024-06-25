import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import VToggle, { VToggleProps } from "@/components/VToggle";

export default {
  title: "UI Components/VToggle",
  component: VToggle,
  argTypes: {
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof VToggle>;

const Template: StoryFn<VToggleProps> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <VToggle
      {...args}
      checked={checked}
      onChange={(newChecked) => {
        setChecked(newChecked);
        args.onChange(newChecked);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  disabled: false,
};

export const Focus = Template.bind({});
Focus.args = {
  disabled: false,
};
