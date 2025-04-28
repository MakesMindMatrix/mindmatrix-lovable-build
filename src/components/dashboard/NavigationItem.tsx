
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
    <button
      className={`flex gap-2 items-center py-4 px-5 w-full rounded-xl min-h-[49px] transition-colors ${
        isActive ? "text-white bg-indigo-300" : "text-stone-500 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default NavigationItem;
