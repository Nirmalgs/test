import React from "react";
import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";
import Dropdown, { DropdownProps } from "@/components/DropDown";

interface DropdownControllerProps<T extends FieldValues>
  extends Omit<DropdownProps, "onChange" | "value"> {
  name: Path<T>;
  label?: string;
  errorMessage?: string;
}

const DropdownController = <T extends FieldValues>({
  name,
  label,
  errorMessage,
  ...props
}: DropdownControllerProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Dropdown
          {...field}
          {...props}
          label={label}
          error={(errors[name]?.message as string | undefined) || errorMessage}
        />
      )}
    />
  );
};

export default DropdownController;
