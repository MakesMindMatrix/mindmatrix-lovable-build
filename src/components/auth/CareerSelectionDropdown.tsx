
import React from "react";

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
      className={`flex overflow-hidden gap-5 justify-between px-4 py-3 ${
        className ? className : "mt-4"
      } w-full text-base ${textColorClass} rounded-md rotate-[2.7755575615628914e-17rad] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:max-w-full`}
      role="button"
      aria-haspopup="listbox"
      tabIndex={0}
    >
      <span className="rotate-[-2.7755575615628914e-17rad]">{label}</span>
      <img
        src={iconUrl}
        className="object-contain shrink-0 my-auto aspect-[1.55] w-[17px]"
        alt={selected ? "Selected" : "Dropdown arrow"}
      />
    </div>
  );
};

export default CareerSelectionDropdown;
