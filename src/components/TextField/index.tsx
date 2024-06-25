import React, { useState } from "react";

export interface TextFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  helperText?: string | React.ReactElement;
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "password";
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  helperText,
  disabled,
  required,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 flex flex-col justify-between">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-lg bg-fieldBgColor placeholder:text-placeHolder placeholder:text-xs"
          disabled={disabled}
          required={required}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {helperText && <span className="text-red-500 text-sm">{helperText}</span>}
    </div>
  );
};

export default TextField;
