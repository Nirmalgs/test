import React, { useState } from "react";
import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";

import VTextField, {
  TextFieldProps,
  helperType,
  iconPosition,
} from "@/components/VTextField";
import { IconType } from "@/components/VIcon";
import clsx from "clsx";

interface TextFieldControllerProps<T extends FieldValues>
  extends Omit<TextFieldProps, "onChange" | "value"> {
  name: Path<T>;
  label?: string;
  errorMessage?: string;
}

const VTextFieldController = <T extends FieldValues>({
  name,
  label,
  errorMessage,
  ...props
}: TextFieldControllerProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const [type, setType] = useState(props.type || "text");

  const getValidation: {
    [key in helperType]: {
      helperIcon: IconType;
      helperClassNames: string;
      helperText?: string;
    };
  } = {
    warning: {
      helperIcon: "Danger",
      helperClassNames: clsx("text-yellow-800"),
      helperText: "Warning",
    },
    success: {
      helperIcon: "Check",
      helperClassNames: clsx("text-green-600"),
      helperText: "Success",
    },
    error: {
      helperIcon: "Cross",
      helperClassNames: clsx("text-red-600"),
      helperText: "Error",
    },
    loading: {
      helperIcon: "Loading",
      helperClassNames: clsx(),
      helperText: "Loading",
    },
  };

  let customizeProps = {
    ...props,
    ...(props.helperType ? getValidation[props.helperType] : {}),
    ...(props.type == "password"
      ? {
          icon: type == "password" ? "Hide" : ("Unhide" as IconType),
          iconPosition: "right" as iconPosition,
        }
      : {}),
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <VTextField
          {...field}
          {...props}
          {...customizeProps}
          type={type}
          label={label}
          helperText={
            customizeProps.helperText || (errors[name]?.message as string)
          }
          onClickIcon={() => {
            if (props.type == "password") {
              type == "password" ? setType("text") : setType("password");
            }
          }}
        />
      )}
    />
  );
};

export default VTextFieldController;
