
import React from "react";

interface TasksLegendProps {
  notStartedCount: number;
  inProgressCount: number;
  completedCount: number;
}

const TasksLegend: React.FC<TasksLegendProps> = ({ 
  notStartedCount, 
  inProgressCount, 
  completedCount 
}) => {
  return (
    <div className="flex items-center justify-end mb-4 gap-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
        <span className="text-white text-sm">Not Started / {notStartedCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
        <span className="text-white text-sm">Inprogress / {inProgressCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
        <span className="text-white text-sm">Completed / {completedCount}</span>
      </div>
    </div>
  );
};

export default TasksLegend;
