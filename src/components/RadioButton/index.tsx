import React, { useState } from "react";

export interface RadioButtonProps {
  title?: string;
  value: string;
  options: string[];
  error?: string;
  onChange: (e: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  value,
  options,
  error,
  onChange,
}) => {
  return (
    <div>
      {title && <h3 className="text-xs uppercase font-normal">{title}</h3>}
      <div className="flex gap-3 mt-[6px]">
        {options.map((option) => (
          <div>
            <div
              className={`w-12 h-10 flex justify-center items-center rounded-lg	border-[1px] border-borderColor ${value === option ? "bg-radioSelect" : ""}`}
              onClick={(e) => {
                onChange(option);
              }}
            >
              <span className="align-middle text-xs	text-[#454545]">
                {option}
              </span>
            </div>
          </div>
        ))}
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default RadioButton;
