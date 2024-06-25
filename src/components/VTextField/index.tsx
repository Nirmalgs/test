import React, { useRef, useState } from "react";
import VIcon, { IconType } from "../VIcon";
import clsx from "clsx";

export type helperType = "warning" | "error" | "success" | "loading";
export type iconPosition = "left" | "right";

export interface TextFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  type?: "input" | "password" | "text";
  icon?: IconType;
  iconPosition?: iconPosition;
  helperType?: helperType;
  helperIcon?: IconType;
  helperClassNames?: string;
  onClickIcon?: () => void;
}

const VTextField: React.FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  helperText,
  disabled,
  required,
  type = "input",
  icon,
  iconPosition,
  helperType,
  helperIcon,
  helperClassNames,
  onClickIcon,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div>
      <div
        className={clsx(
          "group flex items-center min-h-12 rounded-lg px-4 gap-2 bg-fieldBgColor",
          {
            "pointer-events-none !bg-fieldBgColor": disabled,
            "flex-row": iconPosition == "left",
            "flex-row-reverse": iconPosition == "right",
            "border bg-transparent": focused && !helperType,
            "hover:border border-fieldBorderColor": !helperType,
            "bg-yellow-100": helperType == "warning",
            "bg-red-100": helperType == "error",
            // "bg-fieldBgColor": helperType == "loading",
          }
        )}
      >
        {icon && (
          <VIcon
            className={clsx({
              "text-fieldDisabled": disabled,
              "text-[#0671E0]": focused && !helperType,
              "group-hover:text-[#0671E0]": !helperType,
            })}
            iconColor="red"
            icon={icon}
            onClick={onClickIcon}
          />
        )}

        <div className="relative w-full">
          {label && (
            <label
              className={clsx(
                disabled ? "text-fieldDisabled" : "text-fieldColor",
                "flex items-center h-full w-full",
                "transition-all duration-300 ease-in-out",
                focused || value ? "text-xs leading-3	" : "h-full absolute"
              )}
              onClick={() => inputRef.current?.focus()}
            >
              {label}
            </label>
          )}
          <input
            ref={inputRef}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={focused || !label ? placeholder : ""}
            className={clsx(
              "w-full outline-none bg-transparent ",
              "placeholder:text-placeHolder placeholder:text-xs"
            )}
            disabled={disabled}
            required={required}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>
      <div>
        {helperIcon && helperText && (
          <VIcon
            className={clsx(helperClassNames, {
              "text-fieldDisabled": disabled,
            })}
            icon={helperIcon}
            size={12}
          />
        )}
        {helperText && (
          <span
            className={clsx("text-xs pl-2", helperClassNames, {
              "text-fieldDisabled": disabled,
            })}
          >
            {helperText}
          </span>
        )}
      </div>

      {/* <span className="text-red-500 text-sm">{helperText}</span> */}
    </div>
  );
};

export default VTextField;
