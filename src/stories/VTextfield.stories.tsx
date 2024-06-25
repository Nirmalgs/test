import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useTranslation } from "react-i18next";
import VTextField, { TextFieldProps } from "@/components/VTextField";

export default {
  title: "UI Components/VTextField",
  component: VTextField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  return (
    <VTextField
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
      label={args.label || "defaultLabel"}

    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "textfield",
  label: "welcome", 
  placeholder: "Enter text...",
  type:"input",
//   helperText: "Remind password"
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "textfield-disabled",
  label: "Disabled TextField", 
  value: "Disabled",
  disabled: true,
};

// export const Required = Template.bind({});
// Required.args = {
//   name: "textfield-required",
//   label: "Required TextField", // This key will be used to fetch the translated label
//   value: "",
//   required: true,
//   placeholder: "Required...",
// };

// export const Password = Template.bind({});
// Password.args = {
//   name: "textfield-password",
//   label: "Password TextField", // This key will be used to fetch the translated label
//   value: "",
//   type: "password",
//   placeholder: "Enter your password...",
//   icon: 'Danger'
// };
