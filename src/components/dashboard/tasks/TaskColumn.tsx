
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
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
                  <div className="text-white/70 text-center py-4">No tasks</div>
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
