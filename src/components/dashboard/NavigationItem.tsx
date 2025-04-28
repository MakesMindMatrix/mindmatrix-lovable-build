
import React from "react";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  icon: React.ReactNode;
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
      className={cn(
        "flex w-full items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
        isActive
          ? "bg-[#a9c3ed] text-white"
          : "text-[#696969] hover:bg-gray-50"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default NavigationItem;
