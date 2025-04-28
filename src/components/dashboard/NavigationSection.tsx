
import React, { ReactNode } from "react";
import NavigationItem from "./NavigationItem";

interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

interface NavigationSectionProps {
  title: string;
  items: NavigationItemProps[];
  className?: string;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <section className={`w-full whitespace-nowrap ${className}`}>
      <h2 className="text-sm">{title}</h2>
      <div className="mt-4 w-full text-base space-y-2">
        {items.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={item.isActive}
          />
        ))}
      </div>
    </section>
  );
};

export default NavigationSection;
