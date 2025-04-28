
import React from "react";
import { NavigationItemProps } from "@/types/navigation";

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive,
}) => {
  return (
    <div
      className={`flex gap-2 items-start py-4 pl-5 rounded-xl min-h-[49px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] ${
        isActive
          ? "pr-24 w-full text-white bg-indigo-300"
          : "pr-20 bg-indigo-300 bg-opacity-0"
      } max-md:pr-5`}
    >
      <img
        src={icon}
        alt={`${label} icon`}
        className="object-contain shrink-0 w-4 aspect-square"
      />
      <span>{label}</span>
    </div>
  );
};

export default NavigationItem;
