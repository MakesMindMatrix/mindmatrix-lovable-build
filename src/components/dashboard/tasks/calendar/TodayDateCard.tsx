
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
    <section 
      className={`flex flex-col justify-center px-3 py-2.5 bg-white rounded-md w-[180px] h-[110px] cursor-pointer shadow-[0px_1px_30px_rgba(69,42,124,0.1)] ${
        isSelected ? "border-2 border-blue-500" : "border-2 border-white"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col w-full">
        {/* Date display */}
        <div className="flex items-center mb-2 justify-center pt-1">
          <span className="text-blue-700 text-lg font-medium text-center">
            {weekday} {day}
          </span>
        </div>
        
        {/* Stats display */}
        <div className="flex justify-between items-center px-2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-700 rounded-full flex items-center justify-center mb-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7123c25456326e4e8fc145528fa7e9601bfbf7f5?placeholderIfAbsent=true"
                alt=""
                className="w-[18px] aspect-[5.99]"
              />
            </div>
            <span className="text-blue-700 text-sm font-medium text-center">{assignedTasks}</span>
            <span className="text-blue-700 text-xs text-center">Today's Tasks</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mb-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6b73e7a8f582d13c89f8f990333cee9eea9657e2?placeholderIfAbsent=true"
                alt=""
                className="w-[5px] aspect-[0.83]"
              />
            </div>
            <span className="text-blue-700 text-sm font-medium text-center">{totalCoins}</span>
            <span className="text-blue-700 text-xs text-center">Total Coins</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayDateCard;
