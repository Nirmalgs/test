import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import VRadioButton, { VRadioButtonProps } from "@/components/VRadioButton";

export default {
  title: "UI Components/VRadioButton",
  component: VRadioButton,
  argTypes: {
    onChange: { action: "changed" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
  },
} as Meta<typeof VRadioButton>;

const Template: StoryFn<VRadioButtonProps> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <VRadioButton
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
  label: "Default Radio Button",
  checked: false,
  disabled: false,
  name: "example",
  value: "default",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Radio Button",
  checked: true,
  disabled: false,
  name: "example",
  value: "checked",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Radio Button",
  checked: false,
  disabled: true,
  name: "example",
  value: "disabled",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Disabled Checked Radio Button",
  checked: true,
  disabled: true,
  name: "example",
  value: "disabledChecked",
};

export const MultipleRadioButtons: StoryFn<VRadioButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <form>
      <VRadioButton
        {...args}
        name="group"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={(newChecked) => {
          setSelectedValue("option1");
          args.onChange(newChecked);
        }}
        label="Option 1"
      />
      <VRadioButton
        {...args}
        name="group"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={(newChecked) => {
          setSelectedValue("option2");
          args.onChange(newChecked);
        }}
        label="Option 2"
      />
      <VRadioButton
        {...args}
        name="group"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={(newChecked) => {
          setSelectedValue("option3");
          args.onChange(newChecked);
        }}
        label="Option 3"
      />
    </form>
  );
};

MultipleRadioButtons.args = {
  disabled: false,
  name: "example",
  value: "multiple",
};
