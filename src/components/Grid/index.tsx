import React from "react";
import clsx from "clsx";

export interface GridProps {
  spacing?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: React.ReactNode;
  className?: string;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
}

const spacingClasses: { [key: number]: string } = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
};
const xswidthClasses: { [key: number]: string } = {
  1: "xs:grid-cols-1",
  2: "xs:grid-cols-2",
  3: "xs:grid-cols-3",
  4: "xs:grid-cols-4",
  5: "xs:grid-cols-5",
  6: "xs:grid-cols-6",
  7: "xs:grid-cols-7",
  8: "xs:grid-cols-8",
  9: "xs:grid-cols-9",
  10: "xs:grid-cols-10",
  11: "xs:grid-cols-11",
  12: "xs:grid-cols-12",
};
const smwidthClasses: { [key: number]: string } = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
};
const mdwidthClasses: { [key: number]: string } = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
};
const lgwidthClasses: { [key: number]: string } = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
};
const xlwidthClasses: { [key: number]: string } = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
  7: "xl:grid-cols-7",
  8: "xl:grid-cols-8",
  9: "xl:grid-cols-9",
  10: "xl:grid-cols-10",
  11: "xl:grid-cols-11",
  12: "xl:grid-cols-12",
};

const Grid: React.FC<GridProps> = ({
  spacing = 0,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  className,
  justifyContent = "flex-start",
  alignItems = "stretch",
}) => {
  const responsiveClasses = clsx(
    xs && xswidthClasses[xs],
    sm && smwidthClasses[sm],
    md && mdwidthClasses[md],
    lg && lgwidthClasses[lg],
    xl && xlwidthClasses[xl]
  );

  const justifyClasses = `justify-${justifyContent}`;
  const alignClasses = `items-${alignItems}`;

  return (
    <div
      className={clsx(
        "grid",
        spacing && spacingClasses[spacing],
        responsiveClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
