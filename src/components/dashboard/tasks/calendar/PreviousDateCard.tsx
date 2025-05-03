
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
      className={`flex flex-col justify-center px-2 py-2.5 rounded-md bg-pink-950 bg-opacity-50 min-w-[110px] cursor-pointer shadow-[0px_1px_30px_rgba(69,42,124,0.1)] ${
        isSelected ? "border-2 border-white" : "border border-red-500"
      }`}
      onClick={onClick}
    >
      <div className="flex gap-5 justify-between pr-px pl-3 w-full">
        <div className="flex flex-col items-center mb-1">
          <span className="text-white text-sm font-medium">{weekday}</span>
          <span className="text-white text-2xl font-medium">{day}</span>
        </div>
        <div className="flex gap-3 items-center">
          <TaskStatusIndicator
            iconSrc="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/abfe19a73923827a1c2cd18a0e0c9a30685e6c7a?placeholderIfAbsent=true"
            iconWidth="18px"
            iconAspectRatio="5.99"
            bgColor="bg-white"
            value={missedTasks.toString()}
            valueColor="text-white"
            label="Total Missed Tasks"
            padding="pt-3.5 pl-4"
          />
          <TaskStatusIndicator
            iconSrc="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/8dc4bae11cfa15404f9babf9da76cf0b11ca296a?placeholderIfAbsent=true"
            iconWidth="5px"
            iconAspectRatio="0.83"
            bgColor="bg-pink-200"
            value={`${coinsRedeemable}%`}
            valueColor="text-pink-200"
            label="Coins Redeemable"
            padding="pr-1.5 pl-1.5"
          />
        </div>
      </div>
    </article>
  );
};

export default PreviousDateCard;
