
import React from "react";
import TaskStatusIndicator from "./TaskStatusIndicator";

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
    <article 
      className={`flex flex-col justify-center px-2 py-2.5 rounded-md bg-pink-950 bg-opacity-50 w-[180px] h-[110px] cursor-pointer shadow-[0px_1px_30px_rgba(69,42,124,0.1)] ${
        isSelected ? "border-2 border-white" : "border border-red-500"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col w-full">
        {/* Date display */}
        <div className="flex items-center mb-2 justify-center">
          <span className="text-white text-xl font-medium">
            {weekday} {day}
          </span>
        </div>
        
        {/* Stats display */}
        <div className="flex justify-between items-center px-2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mb-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/abfe19a73923827a1c2cd18a0e0c9a30685e6c7a?placeholderIfAbsent=true"
                alt=""
                className="w-[18px] aspect-[5.99]"
              />
            </div>
            <span className="text-white text-sm font-medium">{missedTasks}</span>
            <span className="text-white text-xs">Missed Tasks</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-pink-200 rounded-full flex items-center justify-center mb-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/8dc4bae11cfa15404f9babf9da76cf0b11ca296a?placeholderIfAbsent=true"
                alt=""
                className="w-[5px] aspect-[0.83]"
              />
            </div>
            <span className="text-pink-200 text-sm font-medium">{coinsRedeemable}%</span>
            <span className="text-white text-xs">Coins Redeemable</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PreviousDateCard;
