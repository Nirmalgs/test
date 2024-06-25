import React from "react";

export interface VButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  variant?: "button" | "link";
}

const VButton: React.FC<VButtonProps> = ({
  label,
  onClick,
  primary = true,
  backgroundColor,
  size = "medium",
  type = "button",
  variant = "button",
}) => {
  const baseClasses =
    "font-bold rounded focus:outline-none focus:shadow-outline";
  const sizeClasses =
    size === "small"
      ? "py-1 px-2 text-sm"
      : size === "large"
        ? "py-3 px-6 text-lg"
        : "py-2 px-4 text-base";

  const primaryClasses = primary
    ? "bg-blue-500 hover:bg-blue-700 text-white"
    : "bg-gray-200 hover:bg-gray-400 text-gray-800";

  const linkClasses = "text-black hover:underline cursor-pointer m-0 w-1";

  return (
    <button
      type={type}
      className={`${baseClasses} ${
        variant === "link" ? linkClasses : `${sizeClasses} ${primaryClasses}`
      }`}
      style={{
        backgroundColor: variant === "link" ? "transparent" : backgroundColor,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default VButton;
