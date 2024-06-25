import React, { useState } from "react";
import VTab, { VTabProps } from "../VTab";

interface VTabGroupProps {
  tabs: { label: string; disabled?: boolean }[];
}

const VTabGroup: React.FC<VTabGroupProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <VTab
            key={index}
            label={tab.label}
            disabled={tab.disabled}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="mt-4 p-4 border rounded">
        {`Content for ${tabs[activeTab].label}`}
      </div>
    </div>
  );
};

export default VTabGroup;
