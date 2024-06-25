import React from "react";
import clsx from "clsx";

export interface VToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const VToggle: React.FC<VToggleProps> = ({ checked, onChange, disabled }) => {
  return (
    <button
      type="button"
      className={clsx(
        "relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none",
        {
          "bg-white": !checked && !disabled,
          "bg-blue-500": checked && !disabled,
          "bg-blue-200": disabled,
          "border-blue-500 hover:border-blue-400 focus:ring-2 focus:ring-blue-300":
            !checked && !disabled,
          "border border-gray-300": !checked && !disabled,
          "border-2 border-black focus:border-black": !checked && !disabled,
          "cursor-not-allowed opacity-50": disabled,
          "cursor-pointer": !disabled,
        }
      )}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
    >
      <span className="sr-only">Toggle</span>
      <span
        className={clsx(
          "inline-block w-4 h-4 transform rounded-full transition-transform",
          {
            "bg-gray-400": !checked && !disabled,
            "hover:bg-blue-400": !checked && !disabled,
            "focus:bg-gray-700": !checked && !disabled,
            "bg-white": checked && !disabled,
            "bg-gray-500": disabled,
            "translate-x-1": !checked,
            "translate-x-6": checked,
          }
        )}
      />
    </button>
  );
};

export default VToggle;
