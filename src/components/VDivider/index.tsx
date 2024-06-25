import React from "react";
import clsx from "clsx";

export interface VDividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const VDivider: React.FC<VDividerProps> = ({
  orientation = "horizontal",
  className,
}) => {
  return (
    <div
      className={clsx(
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        "bg-gray-300",
        className
      )}
    />
  );
};

export default VDivider;
