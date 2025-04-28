
import React from "react";
import NavigationItem from "./NavigationItem";
import { NavigationItemProps, NavigationSectionProps } from "@/types/navigation";

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <div className={className}>
      <h2 className="px-4 text-xs font-medium text-gray-500 mb-2">{title}</h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;
