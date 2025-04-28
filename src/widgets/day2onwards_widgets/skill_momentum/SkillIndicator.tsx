
"use client";

import React from "react";

interface SkillIndicatorProps {
  currentLevel: number;
  goalLevel: number;
  skillName: string;
  position: {
    left: string;
    top: string;
  };
}

export const SkillIndicator: React.FC<SkillIndicatorProps> = ({
  currentLevel,
  goalLevel,
  skillName,
  position,
}) => {
  return (
    <div
      className="flex absolute flex-col gap-1 items-center"
      style={{ left: position.left, top: position.top }}
    >
      <div className="px-1 py-px text-xs font-bold text-orange-600 bg-stone-800">
        {currentLevel}
      </div>
      <div className="px-1 py-px text-xs font-bold text-lime-400 bg-lime-900">
        {goalLevel}
      </div>
      <span className="text-xs font-bold text-white">{skillName}</span>
    </div>
  );
};

