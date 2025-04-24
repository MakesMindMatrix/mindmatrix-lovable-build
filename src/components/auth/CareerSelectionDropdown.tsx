
import React from "react";
import { cn } from "@/lib/utils";

interface CareerSelectionDropdownProps {
  label: string;
  selected?: boolean;
  placeholder?: boolean;
  iconUrl: string;
  className?: string;
}

const CareerSelectionDropdown: React.FC<CareerSelectionDropdownProps> = ({
  label,
  selected = false,
  placeholder = false,
  iconUrl,
  className = "",
}) => {
  const textColorClass = selected ? "text-white" : "text-indigo-300";

  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3 w-full",
        "bg-white/10 backdrop-blur-sm rounded-md",
        "hover:bg-white/20 transition-colors cursor-pointer",
        textColorClass,
        className
      )}
      role="button"
      aria-haspopup="listbox"
      tabIndex={0}
    >
      <span>{label}</span>
      <img
        src={iconUrl}
        className="h-4 w-4 object-contain"
        alt={selected ? "Selected" : "Dropdown arrow"}
      />
    </div>
  );
};

export default CareerSelectionDropdown;
