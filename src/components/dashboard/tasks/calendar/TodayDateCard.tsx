
import React from "react";
import InfoItem from "./InfoItem";

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
      <div className="flex gap-2 items-center w-full justify-between">
        <div className="flex flex-col items-center mb-1">
          <span className="text-blue-700 text-sm font-medium">{weekday}</span>
          <span className="text-blue-700 text-2xl font-medium">{day}</span>
        </div>
        <div className="flex gap-2 items-center">
          <InfoItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7123c25456326e4e8fc145528fa7e9601bfbf7f5?placeholderIfAbsent=true"
            iconContainerClass="pt-3.5 pl-4 w-4 h-4"
            iconClass="aspect-[5.99] w-[18px]"
            value={assignedTasks.toString()}
            label="Today's Tasks"
            maxWidth="w-[86px]"
          />
          <InfoItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6b73e7a8f582d13c89f8f990333cee9eea9657e2?placeholderIfAbsent=true"
            iconContainerClass="justify-center pr-1.5 pl-1.5 w-4 h-4 min-h-4"
            iconClass="aspect-[0.83] w-[5px]"
            value={totalCoins.toString()}
            label="Total Coins"
            maxWidth="w-[60px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TodayDateCard;
