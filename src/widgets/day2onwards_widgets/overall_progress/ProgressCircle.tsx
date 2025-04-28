
import React from "react";

interface ProgressCircleProps {
  percentage: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage }) => {
  return (
    <figure className="flex overflow-hidden flex-col justify-center items-center self-stretch px-8 py-9 my-auto text-white whitespace-nowrap w-[153px]">
      <div className="w-[69px]">
        <p className="text-4xl font-semibold">{percentage}%</p>
        <figcaption className="text-xs font-medium tracking-tight">
          Completed
        </figcaption>
      </div>
    </figure>
  );
};

export default ProgressCircle;
