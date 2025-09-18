"use client";
import React from "react";
interface Tab {
  label: string;
}
interface TabsProps {
  tabs: Tab[];
  activeIndex: number;
  onTabChange: (index: number) => void;
}

const TabsComponent: React.FC<TabsProps> = ({ tabs, activeIndex, onTabChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-10">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`border-[.1px] border-[#0a0a0a30] rounded-lg px-8 py-1 text-xl font-medium transition: all 0.2s ease 
            ${index === activeIndex
              ? "bg-[#6F4E37] text-white"
              : "bg-[#F5F3EE] text-[#6F4E37] hover:bg-[#6F4E37] hover:text-white"
            }
            `}
          onClick={() => onTabChange(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
export default TabsComponent;
