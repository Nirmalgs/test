import React from "react";
import clsx from "clsx";

export interface VTabProps {
  disabled?: boolean;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

const VTab: React.FC<VTabProps> = ({ disabled, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 transition-colors duration-200 border-b appearance-none",
        {
          "text-blue-600 border-b-2 border-blue-600": active,
          "opacity-50 cursor-not-allowed border-gray-400": disabled,
          "hover:text-blue-500 text-gray-600 border-b-2 dark:hover:border-blue-600 hover:border-blue-600":
            !disabled && !active,
          "focus:outline-none focus:ring-blue-500 focus:border-blue-500":
            !disabled,
        }
      )}
    >
      {label}
    </button>
  );
};

export default VTab;
