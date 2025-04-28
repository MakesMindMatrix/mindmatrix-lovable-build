
import React, { ReactNode } from "react";

interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive,
}) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        isActive 
          ? "bg-blue-100 text-blue-600" 
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default NavigationItem;
