
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskCard from "./TaskCard";
import { Task } from "@/types/tasks";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  colorClass: string;
  actionLabel?: string;
  actionVariant?: "primary" | "secondary";
  showCompletedBadge?: boolean;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ 
  title, 
  tasks, 
  colorClass, 
  actionLabel, 
  actionVariant,
  showCompletedBadge = false
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-1 h-6 ${colorClass} rounded-sm`}></div>
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
      
      <div className="flex-1 bg-transparent overflow-hidden border-0">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                actionLabel={actionLabel}
                actionVariant={actionVariant}
                showCompletedBadge={showCompletedBadge}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TaskColumn;
