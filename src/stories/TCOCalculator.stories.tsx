import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormProvider } from "react-hook-form";
import TCOCalculator from "../../src/widgets/TCO/TCOCalculator";
import useTCO from "../hooks/useTCO";

export default {
  title: "Widgets/TCOCalculator",
  component: TCOCalculator,
} as Meta;

const Template: StoryFn = () => {
  const { methods } = useTCO();

  return (
    <FormProvider {...methods}>
      <TCOCalculator />
    </FormProvider>
  );
};

export const Default = Template.bind({});
