import React from "react";
import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";
import RadioButton, { RadioButtonProps } from "@/components/RadioButton";

interface RadioButtonControllerProps<T extends FieldValues>
  extends Omit<RadioButtonProps, "onChange" | "value"> {
  name: Path<T>;
  label?: string;
  errorMessage?: string;
}

const RadioButtonController = <T extends FieldValues>({
  name,
  title,
  errorMessage,
  ...props
}: RadioButtonControllerProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioButton
          {...field}
          {...props}
          title={title}
          error={(errors[name]?.message as string | undefined) || errorMessage}
        />
      )}
    />
  );
};

export default RadioButtonController;
