
import React from "react";

interface NavigationItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  text,
  isActive = false,
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-col justify-center items-start px-4 py-3 my-1 w-full rounded-xl ${
        isActive ? "bg-white/20" : ""
      }`}
    >
      <div className="flex gap-2 items-center">
        <img
          src={icon}
          className="object-contain shrink-0 w-4 aspect-square"
          alt={`${text} icon`}
        />
        <span className="text-white">{text}</span>
      </div>
    </div>
  );
};

export default NavigationItem;
