import React from "react";
import Calendar from "../../Images/Icons/Calendar.svg";
import Check from "../../Images/Icons/Check.svg";
import Cross from "../../Images/Icons/Cross.svg";
import Danger from "../../Images/Icons/Danger.svg";
import Down from "../../Images/Icons/Down.svg";
import DownArrow from "../../Images/Icons/DownArrow.svg";
import Hide from "../../Images/Icons/Hide.svg";
import Left from "../../Images/Icons/Left.svg";
import LeftArrow from "../../Images/Icons/LeftArrow.svg";
import Loading from "../../Images/Icons/Loading.svg";
import Minus from "../../Images/Icons/Minus.svg";
import Plus from "../../Images/Icons/Plus.svg";
import Right from "../../Images/Icons/Right.svg";
import RightArrow from "../../Images/Icons/RightArrow.svg";
import Search from "../../Images/Icons/Search.svg";
import Unhide from "../../Images/Icons/Unhide.svg";
import Up from "../../Images/Icons/Up.svg";
import UpArrow from "../../Images/Icons/UpArrow.svg";
import clsx from "clsx";




const icons = {
  Calendar,
  Check,
  Danger,
  Down,
  DownArrow,
  Hide,
  Left,
  LeftArrow,
  Loading,
  Minus,
  Plus,
  Right,
  RightArrow,
  Search,
  Cross,
  Unhide,
  Up,
  UpArrow,
};

export type IconType = keyof typeof icons;

export interface ViconProps {
  icon: IconType;
  size?: number;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
}

const VIcon: React.FC<ViconProps> = ({
  icon,
  size = 20,
  className,
  onClick
}) => {
  const Icon = icons[icon];

  return (
    <Icon
      className={clsx("inline-block", className)}
      style={{ width: size, height: size }}
      onClick = {onClick}
    />
  );
};

export default VIcon;
