
import React from "react";

interface FutureDateCardProps {
  day: number;
  weekday: string;
  onClick: () => void;
  isSelected: boolean;
}

const FutureDateCard: React.FC<FutureDateCardProps> = ({
  day,
  weekday,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md py-2 px-3 w-[70px] h-[110px] cursor-pointer transition-all
        ${isSelected 
          ? "bg-white/20 border-2 border-white" 
          : "bg-white/20 border border-white/30 hover:bg-white/30"
        }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-white text-base font-medium text-center">
          {weekday}
        </span>
        <span className="text-white text-sm mt-1 text-center">
          {day}
        </span>
      </div>
    </div>
  );
};

export default FutureDateCard;
