
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Task } from "../types";

interface TaskBadgesProps {
  tasks: Task[];
  activeTask: string;
  onTaskSelect: (taskId: string) => void;
}

const TaskBadges: React.FC<TaskBadgesProps> = ({ tasks, activeTask, onTaskSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {tasks.map((task) => (
        <Badge
          key={task.id}
          variant="outline"
          className={`cursor-pointer py-1 px-3 ${
            activeTask === task.id 
              ? "bg-amber-500/30 border-amber-400" 
              : "bg-transparent border-white/20"
          } hover:bg-white/10 transition-colors`}
          onClick={() => onTaskSelect(task.id)}
        >
          {task.title}
        </Badge>
      ))}
    </div>
  );
};

export default TaskBadges;
