import React, { useState } from "react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
}

export interface VDropdownProps {
  options: Option[];
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  title?: string;
}

const VDropdown: React.FC<VDropdownProps> = ({
  options,
  multiple = false,
  searchable = false,
  disabled = false,
  title = "Title",
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    if (multiple) {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    } else {
      setSelected([option]);
      setOpen(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative inline-block w-full">
      <div className="relative w-full cursor-pointer border rounded-lg bg-white">
        {!searchable && (
          <div
            className={clsx(
              "absolute top-0.3 bg-transparent left-1 px-2 text-[10px] bg-white z-10",
              open ? "text-gray-400" : "text-gray-400"
            )}
          >
            {title}
          </div>
        )}
        <div
          className={clsx(
            "relative w-full cursor-pointer border rounded-lg bg-white",
            open ? "border-blue-100" : "border-gray-300",
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "hover:border-blue-400 focus-within:ring-2 focus-within:ring-blue-300"
          )}
          onClick={() => setOpen(!open)}
        >
          {searchable ? (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-blue-600 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 10m-7 0a7 7 0 1114 0 7 7 0 01-14 0zM21 21l-4.35-4.35"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 bg-transparent border-none outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : (
            <div className="flex items-center justify-between px-3 py-2">
              <span className={selected.length ? "text-black" : ""}>
                {selected.length
                  ? selected.join(", ")
                  : multiple
                    ? "Select..."
                    : "Label"}
              </span>
              <div className="flex items-center">
                {multiple && selected.length > 0 && (
                  <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 mr-2">
                    {selected.length}
                  </span>
                )}
                <svg
                  className={clsx(
                    "w-4 h-4 text-blue-600 transform transition-transform",
                    open ? "rotate-180" : "rotate-0"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              className={clsx(
                "px-4 py-2 cursor-pointer hover:bg-gray-100",
                selected.includes(option.value) ? "text-blue-600" : "",
                disabled && "cursor-not-allowed text-gray-400"
              )}
              onClick={() => !disabled && handleSelect(option.value)}
            >
              {multiple ? (
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(option.value)}
                    onChange={() => handleSelect(option.value)}
                    disabled={disabled}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ) : searchable ? (
                <span>
                  <span className="font-semibold">
                    {option.label.slice(0, search.length)}
                  </span>
                  <span className="text-gray-500">
                    {option.label.slice(search.length)}
                  </span>
                </span>
              ) : (
                option.label
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VDropdown;
