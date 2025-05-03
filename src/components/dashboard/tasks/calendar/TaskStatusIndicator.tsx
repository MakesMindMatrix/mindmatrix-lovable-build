
import React from "react";
import TaskStatusIcon from "./TaskStatusIcon";

interface TaskStatusIndicatorProps {
  iconSrc: string;
  iconWidth: string;
  iconAspectRatio: string;
  bgColor: string;
  value: string;
  valueColor: string;
  label: string;
  padding?: string;
}

const TaskStatusIndicator: React.FC<TaskStatusIndicatorProps> = ({
  iconSrc,
  iconWidth,
  iconAspectRatio,
  bgColor,
  value,
  valueColor,
  label,
  padding,
}) => {
  return (
    <section className="self-stretch my-auto w-[86px]">
      <TaskStatusIcon
        iconSrc={iconSrc}
        bgColor={bgColor}
        iconWidth={iconWidth}
        iconAspectRatio={iconAspectRatio}
        padding={padding}
      />
      <p className={`mt-1 text-xl font-medium tracking-tighter ${valueColor} truncate`}>
        {value}
      </p>
      <p className="mt-1 text-xs font-semibold tracking-tighter text-white truncate">
        {label}
      </p>
    </section>
  );
};

export default TaskStatusIndicator;
