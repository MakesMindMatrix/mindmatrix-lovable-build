
"use client";
import React from "react";

interface NavigationItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`flex gap-2 items-start py-4 pr-5 pl-5 rounded-xl min-h-[49px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] cursor-pointer ${
        isActive ? "bg-indigo-300 text-white" : "bg-opacity-0"
      }`}
      onClick={onClick}
    >
      <img
        src={icon}
        className="object-contain shrink-0 w-4 aspect-square"
        alt={`${label} icon`}
      />
      <span>{label}</span>
    </div>
  );
};

export default NavigationItem;
