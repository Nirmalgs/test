import React, { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import clsx from "clsx";

export interface LinkProps {
  label: string;
  href: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  target?: string;
  className?: string
}

const VLink: React.FC<LinkProps> = ({
  label,
  href,
  size,
  disabled = false,
  onClick,
  target = "_self",
  className
}) => {
  const baseClasses = clsx(
    "text-[#0671E0] underline-offset-2 hover:underline focus:text-[#0053AD] focus:underline ",
    disabled && "text-[#ABBED1] pointer-events-none"
  );
  const sizeClasses = clsx(
    size === "small" && "text-xs",
    size === "medium" && "text-xm",
    size === "large" && "text-lg"

  );

  return (
    <Link
      href={href}
      className={clsx(baseClasses, sizeClasses, className)}
      prefetch
      onClick={onClick}
      target = {target}
    >
      {label}
    </Link>
  );
};

export default VLink;
