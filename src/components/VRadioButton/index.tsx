import React from "react";
import clsx from "clsx";

export interface VRadioButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  name: string;
  value: string;
}

const VRadioButton: React.FC<VRadioButtonProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  name,
  value,
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={() => !disabled && onChange(!checked)}
          disabled={disabled}
          className={clsx(
            "w-5 h-5 border-2 rounded-full focus:outline-none appearance-none",
            {
              "border-black ": !checked && !disabled,
              "border-gray-300": !checked && disabled,
              "bg-white": !checked && !disabled,
              "bg-gray-300": !checked && disabled,
              "bg-white border-black": checked && !disabled,
              "opacity-50 cursor-not-allowed": disabled,
            }
          )}
        />
        {checked && (
          <span className="absolute w-3 h-3 bg-black rounded-full left-1 top-1"></span>
        )}
        {disabled && (
          <span className="absolute w-3 h-3  bg-white rounded-full left-1 top-1"></span>
        )}
        {checked && disabled && (
          <span className="absolute w-3 h-3  bg-gray-400 rounded-full left-1 top-1"></span>
        )}
      </div>
      {label && (
        <span className={disabled ? "text-gray-400" : "text-gray-700"}>
          {label}
        </span>
      )}
    </label>
  );
};

export default VRadioButton;
