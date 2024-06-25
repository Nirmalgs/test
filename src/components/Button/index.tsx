import React from "react";
import clsx from "clsx";
import VIcon, { ViconProps } from "../VIcon";

export interface ButtonProps {
  icon: ViconProps["icon"];
  size?: "small" | "medium" | "normal";
  iconPosition?: "start" | "end";
  variant?: "content" | "outline" | "text";
  iconColor?: string;
  bgColor?: string;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  small: "px-5 py-2",
  medium: "px-5 py-3",
  normal: "px-5 py-3",
};

const fontClasses = {
  small: "text-sm not-italic font-normal leading-4 w-full",
  medium: "text-base not-italic font-normal leading-normal w-full",
  normal: "text-lg not-italic font-normal leading-normal w-full",
};

const Button: React.FC<ButtonProps> = ({
  icon,
  size = "medium",
  iconPosition = "start",
  variant = "content",
  iconColor = "currentColor",
  bgColor = "currentBgColor",
  disabled = false,
  loading = false,
  label = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "flex items-center justify-center focus:outline-none",
        {
          "flex-row": iconPosition == "start",
          "flex-row-reverse": iconPosition == "end",
        },
        sizeClasses[size],
        {
          "bg-buttonColor text-white rounded-[12px] hover:bg-buttonHover":
            variant === "content" && !disabled && !loading,
          "bg-white text-outlineColor rounded border-[1px] border-outlineColor hover:bg-outlineBgColor focus:border-buttonBorderColor focus:border-2 focus:bg-outlineBgColor":
            variant === "outline" && !disabled && !loading,
          "bg-white text-outlineColor rounded hover:bg-outlineBgColor border-outlineColor focus:border-2 focus:border-solid focus:border-buttonBorderColor":
            variant === "text" && !disabled && !loading,

          "text-white rounded bg-buttonColor":
            variant === "content" && !disabled && loading,
          "text-outlineColor rounded bg-outlineBgColor":
            (variant === "outline" || variant === "text") &&
            !disabled &&
            loading,

          "cursor-not-allowed bg-buttonDisabled text-white rounded-[12px]":
            variant === "content" && disabled,
          "cursor-not-allowed bg-oulineDisable text-outlineIconDisable rounded":
            (variant === "outline" || variant === "text") && disabled,
        }
      )}
    >
      {loading ? (
        <>
          <span className={clsx(fontClasses[size], "mx-2")}>{label}</span>{" "}
          {icon && (
            <VIcon
              icon="Loading"
              size={size === "small" ? 16 : size === "normal" ? 24 : 20}
              iconColor={iconColor}
            />
          )}
        </>
      ) : (
        <>
          {icon && (
            <VIcon
              icon={icon}
              size={size === "small" ? 16 : size === "normal" ? 24 : 20}
              iconColor={iconColor}
            />
          )}
          <span className={clsx(fontClasses[size], "mx-2")}>{label}</span>{" "}
        </>
      )}
    </button>
  );
};

export default Button;
