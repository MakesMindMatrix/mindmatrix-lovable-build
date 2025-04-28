"use client";

import React from "react";

export interface SkillData {
  name: string;
  currentLevel: number;
  goalLevel: number;
  position?: {
    left: string;
    top: string;
  };
}

interface RadarChartProps {
  skills: SkillData[];
  maxLevel?: number;
  size?: number;
  currentLevelColor?: string;
  goalLevelColor?: string;
  gridColor?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  skills,
  maxLevel = 10,
  size = 230,
  currentLevelColor = "#FA461F",
  goalLevelColor = "#C8FE03",
  gridColor = "#D9D9D0",
}) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;
  const numberOfSkills = skills.length;

  // Calculate positions for each skill point on the radar
  const getCoordinatesForSkill = (
    index: number,
    level: number,
    maxValue: number,
  ) => {
    const angleInRadians = (Math.PI * 2 * index) / numberOfSkills - Math.PI / 2;
    const normalizedLevel = level / maxValue;
    const x = centerX + radius * normalizedLevel * Math.cos(angleInRadians);
    const y = centerY + radius * normalizedLevel * Math.sin(angleInRadians);
    return { x, y };
  };

  // Generate grid circles
  const generateGridCircles = () => {
    const circles = [];
    const levels = 5; // Number of concentric circles

    for (let i = 1; i <= levels; i++) {
      const circleRadius = (radius * i) / levels;
      circles.push(
        <circle
          key={`grid-circle-${i}`}
          cx={centerX}
          cy={centerY}
          r={circleRadius}
          fill="none"
          stroke={gridColor}
          strokeWidth="1"
          strokeDasharray="2 2"
        />,
      );
    }

    return circles;
  };

  // Generate grid lines from center to each vertex
  const generateGridLines = () => {
    return skills.map((_, index) => {
      const { x, y } = getCoordinatesForSkill(index, maxLevel, maxLevel);
      return (
        <line
          key={`grid-line-${index}`}
          x1={centerX}
          y1={centerY}
          x2={x}
          y2={y}
          stroke={gridColor}
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      );
    });
  };

  // Generate the current level polygon
  const generateCurrentLevelPolygon = () => {
    const points = skills
      .map((skill, index) => {
        const { x, y } = getCoordinatesForSkill(
          index,
          skill.currentLevel,
          maxLevel,
        );
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <polygon
        points={points}
        fill="#3F241E"
        fillOpacity="0.15"
        stroke={currentLevelColor}
        strokeWidth="2"
      />
    );
  };

  // Generate the goal level polygon
  const generateGoalLevelPolygon = () => {
    const points = skills
      .map((skill, index) => {
        const { x, y } = getCoordinatesForSkill(
          index,
          skill.goalLevel,
          maxLevel,
        );
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <polygon
        points={points}
        fill={goalLevelColor}
        fillOpacity="0.15"
        stroke={goalLevelColor}
        strokeWidth="2"
      />
    );
  };

  // Calculate positions for skill labels
  const getSkillLabelPosition = (index: number) => {
    const angleInRadians = (Math.PI * 2 * index) / numberOfSkills - Math.PI / 2;
    const labelDistance = radius * 1.2; // Position labels slightly outside the chart
    const x = centerX + labelDistance * Math.cos(angleInRadians);
    const y = centerY + labelDistance * Math.sin(angleInRadians);

    return { x, y };
  };

  return (
    <div className="relative w-full h-full">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="mx-auto"
      >
        {/* Grid circles */}
        {generateGridCircles()}

        {/* Grid lines */}
        {generateGridLines()}

        {/* Goal level polygon */}
        {generateGoalLevelPolygon()}

        {/* Current level polygon */}
        {generateCurrentLevelPolygon()}
      </svg>

      {/* Skill labels */}
      {skills.map((skill, index) => {
        const position = getSkillLabelPosition(index);

        // Calculate if the label should be aligned left, right, or center
        // based on its position around the circle
        const angleInDegrees = (360 * index) / numberOfSkills;
        let textAlign = "center";
        if (angleInDegrees > 45 && angleInDegrees < 135) {
          textAlign = "left";
        } else if (angleInDegrees > 225 && angleInDegrees < 315) {
          textAlign = "right";
        }

        return (
          <div
            key={`skill-label-${index}`}
            className="flex flex-col gap-1 items-center absolute"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: "translate(-50%, -50%)",
              textAlign: textAlign as any,
            }}
          >
            <div className="px-1 py-px text-xs font-bold text-orange-600 bg-stone-800">
              {skill.currentLevel}
            </div>
            <div className="px-1 py-px text-xs font-bold text-lime-400 bg-lime-900">
              {skill.goalLevel}
            </div>
            <span className="text-xs font-bold text-white">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};
