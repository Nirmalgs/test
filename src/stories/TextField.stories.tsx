import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField, { TextFieldProps } from "../components/TextField";
import { useTranslation } from "react-i18next";

export default {
  title: "UI Components/TextField",
  component: TextField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
      label={t(args.label || "defaultLabel")}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "textfield",
  label: "welcome",
  placeholder: "Enter text...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "textfield-disabled",
  label: "Disabled TextField",
  value: "Disabled",
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  name: "textfield-required",
  label: "Required TextField",
  value: "",
  required: true,
  placeholder: "Required...",
};

export const Password = Template.bind({});
Password.args = {
  name: "textfield-password",
  label: "Password TextField",
  value: "",
  type: "password",
  placeholder: "Enter your password...",
};
