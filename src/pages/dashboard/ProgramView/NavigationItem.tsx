
import React from "react";

interface NavigationItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  text,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 my-1 w-full rounded-xl ${
        isActive ? "bg-white/10" : ""
      } hover:bg-white/20 transition-colors cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={icon}
        className="w-4 h-4 object-contain"
        alt={`${text} icon`}
      />
      <span className="text-white">{text}</span>
    </div>
  );
};

export default NavigationItem;
