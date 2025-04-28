
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
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:bg-gray-50"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default NavigationItem;
