import React from "react";
import clsx from "clsx";
import VIcon from "../VIcon"; // Adjust the import path as needed

export interface VCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "w-[16px] h-[16px]",
  medium: "w-[24.059px] h-[24.059px]",
  large: "w-[32px] h-[32px]",
};

const VCheckbox: React.FC<VCheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  size = "medium",
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => !disabled && onChange(!checked)}
          disabled={disabled}
          className={clsx(
            "border rounded focus:outline-none appearance-none",
            sizeClasses[size],
            {
              "bg-[#083A81] border-[#083A81]": checked && !disabled,
              "bg-white border-gray-300": !checked && !disabled,
              "border-gray-400": !checked && !disabled,
              "bg-gray-200 border-gray-200 opacity-50 cursor-not-allowed":
                disabled,
              "focus:border-black border-10": !checked && !disabled,
            }
          )}
          style={{ borderRadius: "4.812px" }}
        />
        {checked && (
          <VIcon
            icon="Check"
            size={size === "small" ? 16 : size === "large" ? 32 : 24.059}
            className="absolute left-0 top-0 pointer-events-none"
            iconColor="white"
          />
        )}
      </div>
      {label && <span className="mt-[-8px]">{label}</span>}
    </label>
  );
};

export default VCheckbox;
