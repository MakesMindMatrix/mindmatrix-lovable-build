
import React from "react";

interface PreviousDateCardProps {
  day: number;
  weekday: string;
  onClick: () => void;
  isSelected: boolean;
  missedTasks?: number;
  coinsRedeemable?: number;
}

const PreviousDateCard: React.FC<PreviousDateCardProps> = ({
  day,
  weekday,
  onClick,
  isSelected,
  missedTasks = 5,
  coinsRedeemable = 80,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md py-2 px-3 min-w-[110px] cursor-pointer transition-all border border-red-500
        ${isSelected ? "border-2" : "border"}
        bg-red-50/20 hover:bg-red-50/30`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mb-1">
        <span className="text-white text-sm font-medium">{weekday}</span>
        <span className="text-white text-2xl font-medium">{day}</span>
      </div>

      <div className="flex items-center justify-between w-full mt-1">
        <div className="flex flex-col items-center">
          <span className="bg-white/20 rounded-full h-5 w-5 flex items-center justify-center">
            <span className="text-white text-xs">!</span>
          </span>
          <span className="text-white text-xs">{missedTasks}</span>
          <span className="text-white/70 text-[10px]">Total Missed Tasks</span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="bg-white/20 rounded-full h-5 w-5 flex items-center justify-center">
            <span className="text-white text-xs">$</span>
          </span>
          <span className="text-white text-xs">{coinsRedeemable}%</span>
          <span className="text-white/70 text-[10px]">Coins Redeemable</span>
        </div>
      </div>
    </div>
  );
};

export default PreviousDateCard;
