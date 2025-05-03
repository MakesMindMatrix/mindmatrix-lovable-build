
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Task, TaskStatus } from "@/types/tasks";
import TaskColumn from "./TaskColumn";
import { toast } from "sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

interface TasksContainerProps {
  notStartedTasks: Task[];
  inProgressTasks: Task[];
  completedTasks: Task[];
  onTaskMove: (taskId: string, newStatus: TaskStatus) => void;
}

const TasksContainer: React.FC<TasksContainerProps> = ({
  notStartedTasks,
  inProgressTasks,
  completedTasks,
  onTaskMove,
}) => {
  // Handle drag end event
  const handleDragEnd = (result: DropResult) => {
    try {
      const { source, destination } = result;
      
      // Return if dropped outside a droppable area
      if (!destination) return;
      
      // Return if dropped in the same position
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }
      
      // Get the task that was dragged
      let draggedTask: Task | undefined;
      let sourceStatus: TaskStatus = "Not Started";
      
      if (source.droppableId === "not-started") {
        draggedTask = notStartedTasks[source.index];
        sourceStatus = "Not Started";
      } else if (source.droppableId === "in-progress") {
        draggedTask = inProgressTasks[source.index];
        sourceStatus = "Inprogress";
      } else if (source.droppableId === "completed") {
        draggedTask = completedTasks[source.index];
        sourceStatus = "Completed";
      }
      
      if (!draggedTask) return;
      
      // Determine the new status based on destination
      let newStatus: TaskStatus = sourceStatus;
      if (destination.droppableId === "not-started") {
        newStatus = "Not Started";
      } else if (destination.droppableId === "in-progress") {
        newStatus = "Inprogress";
      } else if (destination.droppableId === "completed") {
        newStatus = "Completed";
      }
      
      // Update the task status
      onTaskMove(draggedTask.id, newStatus);
      
    } catch (error) {
      console.error("Error in handleDragEnd:", error);
      toast.error("Failed to update task status");
    }
  };

  return (
    <ErrorBoundary>
      <div className="flex-1 overflow-y-auto">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-3 gap-4 min-h-[calc(100vh-350px)]">
            {/* Not Started Column */}
            <ErrorBoundary>
              <TaskColumn 
                title="Not Started" 
                tasks={notStartedTasks} 
                colorClass="bg-orange-400" 
                actionLabel="Read Now" 
                actionVariant="primary"
                droppableId="not-started"
              />
            </ErrorBoundary>
            
            {/* In Progress Column */}
            <ErrorBoundary>
              <TaskColumn 
                title="Inprogress" 
                tasks={inProgressTasks} 
                colorClass="bg-blue-400" 
                actionLabel="Resume" 
                actionVariant="primary"
                droppableId="in-progress"
              />
            </ErrorBoundary>
            
            {/* Completed Column */}
            <ErrorBoundary>
              <TaskColumn 
                title="Completed" 
                tasks={completedTasks} 
                colorClass="bg-green-400" 
                showCompletedBadge
                droppableId="completed"
              />
            </ErrorBoundary>
          </div>
        </DragDropContext>
      </div>
    </ErrorBoundary>
  );
};

export default TasksContainer;
