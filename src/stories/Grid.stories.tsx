import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Grid, { GridProps } from "../components/Grid";
import VTextField from "@/components/VTextField";

export default {
  title: "UI Components/Grid",
  component: Grid,
  argTypes: {
    spacing: { control: "number" },
    xs: { control: "number" },
    sm: { control: "number" },
    md: { control: "number" },
    lg: { control: "number" },
    xl: { control: "number" },
    justifyContent: { control: "text" },
    alignItems: { control: "text" },
  },
} as Meta;

const Template: StoryFn<GridProps> = (args) => (
  <Grid {...args}>
    {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> */}
      <div className="p-4 border">Item 1</div>
    {/* </Grid> */}
    {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> */}
      <div className="p-4 border">Item 2</div>
    {/* </Grid> */}
    {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> */}
      <div className="p-4 border">Item 3</div>
    {/* </Grid> */}
    {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> */}
      <div className="p-4 border">Item 4</div>
    {/* </Grid> */}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  spacing: 2,
  justifyContent: "center",
  alignItems: "center",
};

export const WithTextFields = (args: GridProps) => (
  <Grid spacing={4} xs={1} sm={2} md={3} lg={4} xl={5}>
    <VTextField
      name="textfield1"
      value=""
      onChange={() => {}}
      placeholder="Text Field 1"
    />
    <VTextField
      name="textfield2"
      value=""
      onChange={() => {}}
      placeholder="Text Field 2"
    />
    <VTextField
      name="textfield3"
      value=""
      onChange={() => {}}
      placeholder="Text Field 3"
    />
    <VTextField
      name="textfield4"
      value=""
      onChange={() => {}}
      placeholder="Text Field 4"
    />
    <VTextField
      name="textfield4"
      value=""
      onChange={() => {}}
      placeholder="Text Field 4"
    />
  </Grid>
);
