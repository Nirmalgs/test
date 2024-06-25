import React from "react";
import clsx from "clsx";

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  disableGutters?: boolean;
  fixed?: boolean;
  className?: string;
}

const maxWidthClasses: { [key: string]: string } = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const VContainer: React.FC<ContainerProps> = ({
  children,
  maxWidth = "lg",
  disableGutters = false,
  fixed = false,
  className,
}) => {
  const maxWidthClass = maxWidthClasses[maxWidth] || maxWidthClasses["lg"];
  const paddingClasses = disableGutters ? "" : "px-4 sm:px-6 md:px-8";
  const fixedClass = fixed ? "mx-auto" : "";

  return (
    <div
      className={clsx(
        "w-full",
        maxWidthClass,
        paddingClasses,
        fixedClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default VContainer;
