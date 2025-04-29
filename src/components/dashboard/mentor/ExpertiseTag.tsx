
import React from "react";

interface ExpertiseTagProps {
  text: string;
  bgColor: string;
  className?: string;
}

const ExpertiseTag: React.FC<ExpertiseTagProps> = ({
  text,
  bgColor,
  className = "",
}) => {
  return (
    <div
      className={`gap-2.5 self-stretch px-4 py-2.5 text-base ${bgColor} rounded-xl w-full ${className}`}
    >
      {text}
    </div>
  );
};

export default ExpertiseTag;
