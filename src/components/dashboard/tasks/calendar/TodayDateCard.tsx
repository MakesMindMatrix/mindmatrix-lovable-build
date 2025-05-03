
import React from "react";

interface TodayDateCardProps {
  day: number;
  weekday: string;
  onClick: () => void;
  isSelected: boolean;
  assignedTasks?: number;
  totalCoins?: number;
}

const TodayDateCard: React.FC<TodayDateCardProps> = ({
  day,
  weekday,
  onClick,
  isSelected,
  assignedTasks = 7,
  totalCoins = 250,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md py-2 px-3 min-w-[110px] cursor-pointer transition-all
        ${isSelected ? "border-2 border-blue-500" : ""}
        bg-white`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mb-1">
        <span className="text-blue-600 text-sm font-medium">{weekday}</span>
        <span className="text-blue-600 text-2xl font-medium">{day}</span>
      </div>

      <div className="flex items-center justify-between w-full mt-1">
        <div className="flex flex-col items-center">
          <span className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </span>
          <span className="text-blue-600 text-xs">{assignedTasks}</span>
          <span className="text-blue-700/70 text-[10px]">Today's Assigned Tasks</span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center">
            <span className="text-white text-xs">$</span>
          </span>
          <span className="text-blue-600 text-xs">{totalCoins}</span>
          <span className="text-blue-700/70 text-[10px]">Total Coins</span>
        </div>
      </div>
    </div>
  );
};

export default TodayDateCard;
