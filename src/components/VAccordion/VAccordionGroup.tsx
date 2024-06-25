import React, { useState, useEffect } from "react";
import VAccordion from "@/components/VAccordion";

interface VAccordionGroupProps {
  items: { title: string; content: React.ReactNode; isOpen?: boolean }[];
  defaultOpenIndex?: number;
}

const VAccordionGroup: React.FC<VAccordionGroupProps> = ({
  items,
  defaultOpenIndex,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null
  );

  useEffect(() => {
    if (defaultOpenIndex !== undefined) {
      setOpenIndex(defaultOpenIndex);
    }
  }, [defaultOpenIndex]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200 space-y-2">
      {items.map((item, index) => (
        <VAccordion
          key={index}
          header={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default VAccordionGroup;
