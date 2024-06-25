import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import VIcon from "../VIcon";

export interface VAccordionProps {
  header: string | React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const VAccordion: React.FC<VAccordionProps> = ({
  header,
  content,
  isOpen = false,
  onToggle,
}) => {
  const [open, setOpen] = useState(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    setOpen(!open);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div
        onClick={handleToggle}
        className="flex justify-between w-full px-4 py-2 text-left text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        {header}

        <VIcon icon={open ? "Up" : "Down"} />
      </div>
      <div
        ref={contentRef}
        className={clsx(
          "transition-all duration-300 ease-in-out overflow-hidden",
          {
            "max-h-0": !open,
            "max-h-screen": open,
          }
        )}
        style={{ maxHeight: open ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="p-4 bg-white">{content}</div>
      </div>
    </div>
  );
};

export default VAccordion;
