
import React from "react";

interface TasksHeaderProps {
  notStartedCount: number;
  inProgressCount: number;
  completedCount: number;
}

const TasksHeader: React.FC<TasksHeaderProps> = ({
  notStartedCount,
  inProgressCount,
  completedCount,
}) => {
  // Calculate totals
  const totalTasks = notStartedCount + inProgressCount + completedCount;
  const completedTasks = completedCount;

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold text-white">Tasks</h2>
      </div>
      <div className="flex items-center gap-4 text-white text-sm">
        <div className="flex items-center gap-2">
          <span className="bg-white/20 rounded-full p-1">
            <span className="text-white">💰</span>
          </span>
          <span>50Pts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 rounded-full p-1">
            <span className="text-white">⏱️</span>
          </span>
          <span>1hr30min</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 rounded-full p-1">
            <span className="text-white">📋</span>
          </span>
          <span>{completedTasks}/{totalTasks} completed</span>
        </div>
      </div>
    </div>
  );
};

export default TasksHeader;
