
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskCard from "./TaskCard";
import { Task } from "@/types/tasks";
import { ClipboardList } from "lucide-react";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  colorClass: string;
  actionLabel?: string;
  actionVariant?: "primary" | "secondary";
  showCompletedBadge?: boolean;
  droppableId: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ 
  title, 
  tasks, 
  colorClass, 
  actionLabel, 
  actionVariant,
  showCompletedBadge = false,
  droppableId
}) => {
  console.log(`Rendering TaskColumn: ${title} with ${tasks?.length || 0} tasks`);
  
  // Empty state component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center h-[200px] bg-white/10 rounded-lg border border-white/20 p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
        <ClipboardList className="h-6 w-6 text-white/70" />
      </div>
      <div className="bg-blue-500/30 rounded-full px-3 py-1 text-sm text-white mb-2">
        {title}
      </div>
      <p className="text-white text-lg">No Tasks in {title.toLowerCase()}</p>
    </div>
  );
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-1 h-6 ${colorClass} rounded-sm`}></div>
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
      
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className={`flex-1 bg-transparent overflow-hidden border-0 ${
              snapshot.isDraggingOver ? "bg-white/10" : ""
            } rounded-md`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ScrollArea className="h-[calc(100vh-350px)]">
              <div className="space-y-4 p-1">
                {tasks && tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${snapshot.isDragging ? "opacity-70" : ""}`}
                        >
                          <TaskCard 
                            task={task} 
                            actionLabel={actionLabel}
                            actionVariant={actionVariant}
                            showCompletedBadge={showCompletedBadge}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <EmptyState />
                )}
                {provided.placeholder}
              </div>
            </ScrollArea>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;
