import React from "react";
import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";
import TextField, { TextFieldProps } from "@/components/TextField";

interface TextFieldControllerProps<T extends FieldValues>
  extends Omit<TextFieldProps, "onChange" | "value"> {
  name: Path<T>;
  label?: string;
  errorMessage?: string;
}

const TextFieldController = <T extends FieldValues>({
  name,
  label,
  errorMessage,
  ...props
}: TextFieldControllerProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          label={label}
          helperText={(errors[name]?.message as string) || errorMessage}
        />
      )}
    />
  );
};

export default TextFieldController;
