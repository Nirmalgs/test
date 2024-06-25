import React from "react";
import clsx from "clsx";
import VIcon, { ViconProps } from "../VIcon";

export interface IconButtonProps {
  icon: ViconProps["icon"];
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  iconColor?: string;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  small: "p-1",
  medium: "p-2",
  large: "p-3",
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = "medium",
  variant = "primary",
  iconColor = "currentColor",
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
        "flex items-center justify-center rounded-[5px] focus:outline-none",
        sizeClasses[size],
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300":
            variant === "primary" && !disabled && !loading,
          "bg-gray-100 text-blue-600 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300":
            variant === "secondary" && !disabled && !loading,
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <span>{label}</span>{" "}
          <VIcon
            icon={icon}
            size={size === "small" ? 16 : size === "large" ? 24 : 20}
            iconColor={iconColor}
          />
        </>
      )}
    </button>
  );
};

export default IconButton;
