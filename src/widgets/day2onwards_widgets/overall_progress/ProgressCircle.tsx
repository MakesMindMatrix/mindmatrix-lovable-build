
import React from "react";

interface ProgressCircleProps {
  percentage: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage }) => {
  // Calculate the circumference and the offset based on percentage
  const radius = 45; // Increased from 40 to 45 for larger circle
  const strokeWidth = 3;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <figure className="flex overflow-hidden flex-col justify-center items-center self-stretch px-6 py-6 my-auto text-white whitespace-nowrap w-[130px] relative">
      <svg
        className="absolute"
        width={radius * 2 + strokeWidth}
        height={radius * 2 + strokeWidth}
      >
        {/* Background circle */}
        <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
        {/* Progress circle */}
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          transform={`rotate(-90 ${radius + strokeWidth / 2} ${
            radius + strokeWidth / 2
          })`}
        />
      </svg>
      <div className="w-[80px] z-10 text-center mt-1">
        <p className="text-4xl font-semibold">{percentage}%</p>
        <figcaption className="text-xs font-medium tracking-tight">
          Completed
        </figcaption>
      </div>
    </figure>
  );
};

export default ProgressCircle;
