
import React from "react";

interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Calculate the width of the progress bar based on the percentage
  const progressWidth = Math.floor((246 * progress) / 100);

  return (
    <svg
      width="246"
      height="16"
      viewBox="0 0 246 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="progress-bar"
    >
      <rect y="3.14453" width="246" height="10" fill="#8D8EA0"></rect>
      <rect y="3.14453" width={progressWidth} height="10" fill="#6E7CF9"></rect>
      <circle
        cx={progressWidth - 1}
        cy="8.07447"
        r="6.74044"
        fill="#151B1B"
        stroke="#BFD5E8"
        strokeWidth="2.37898"
      ></circle>
    </svg>
  );
};

export default ProgressBar;
