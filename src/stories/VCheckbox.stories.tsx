import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import VCheckbox, { VCheckboxProps } from "@/components/VCheckbox";

export default {
  title: "UI Components/VCheckbox",
  component: VCheckbox,
  argTypes: {
    onChange: { action: "changed" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta<typeof VCheckbox>;

const Template: StoryFn<VCheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <VCheckbox
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
  label: "Default Checkbox",
  checked: false,
  disabled: false,
  size: "medium",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Checkbox",
  checked: true,
  disabled: false,
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Checkbox",
  checked: false,
  disabled: true,
  size: "medium",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Disabled Checked Checkbox",
  checked: true,
  disabled: true,
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Checkbox",
  checked: false,
  disabled: false,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Checkbox",
  checked: false,
  disabled: false,
  size: "large",
};
