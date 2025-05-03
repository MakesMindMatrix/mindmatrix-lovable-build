
import React from "react";

interface TaskStatusIconProps {
  iconSrc: string;
  bgColor: string;
  iconWidth: string;
  iconAspectRatio: string;
  padding?: string;
}

const TaskStatusIcon: React.FC<TaskStatusIconProps> = ({
  iconSrc,
  bgColor,
  iconWidth,
  iconAspectRatio,
  padding = "p-1",
}) => {
  return (
    <div className={`flex overflow-hidden gap-2.5 items-center justify-center ${bgColor} w-4 h-4 rounded-[100px] ${padding}`}>
      <img
        src={iconSrc}
        className={`object-contain self-stretch my-auto w-[${iconWidth}] aspect-[${iconAspectRatio}]`}
        alt="Status icon"
      />
    </div>
  );
};

export default TaskStatusIcon;
