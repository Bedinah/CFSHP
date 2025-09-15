"use client"; // 👈 make this a Client Component

import React, { useState } from "react";

interface Tab {
  label: string;
}

interface TabsProps {
  tabs: Tab[];
}

const TabsComponent: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`border-[.1px] border-[#0a0a0a30] rounded-xl px-6 py-2 text-base font-medium
            ${
              index === activeIndex
                ? "bg-amber-50 text-[#0a0a0a]"
                : "bg-white text-[#0a0a0a]"
            }
            hover:bg-amber-50`}
          onClick={() => setActiveIndex(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
export default TabsComponent;
