
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
      className={`flex gap-2 items-start py-4 pr-5 pl-5 rounded-xl min-h-[49px] cursor-pointer transition-colors duration-200 hover:bg-gray-50 ${
        isActive ? "bg-indigo-300 text-white hover:bg-indigo-300" : "bg-white text-stone-500"
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
