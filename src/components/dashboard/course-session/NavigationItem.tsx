
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
      className={`flex overflow-hidden flex-col justify-center items-start px-5 py-4 w-full rounded-xl rotate-[4.5911985324664784e-10rad] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] ${
        isActive ? "bg-white" : ""
      }`}
    >
      <div className="flex gap-2 items-center rotate-[-4.5911985324664784e-10rad]">
        <img
          src={icon}
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt={`${text} icon`}
        />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </div>
  );
};

export default NavigationItem;
