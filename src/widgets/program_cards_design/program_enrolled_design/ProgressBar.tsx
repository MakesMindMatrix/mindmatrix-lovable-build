
import React from "react";

interface ProgressBarProps {
  percentComplete: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentComplete }) => {
  // Calculate width based on percentage
  const progressWidth = `${percentComplete}%`;

  return (
    <div className="flex overflow-hidden flex-col items-start mt-4 w-full bg-white">
      <div
        className="flex shrink-0 h-1 bg-blue-700"
        style={{ width: progressWidth }}
      />
    </div>
  );
};

export default ProgressBar;
