
import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Desktop from "@/components/dashboard/day1/Desktop";
import TaskColumn from "@/components/dashboard/tasks/TaskColumn";
import TasksCalendar from "@/components/dashboard/tasks/TasksCalendar";
import TasksLegend from "@/components/dashboard/tasks/TasksLegend";
import { Task, TaskStatus } from "@/types/tasks";
import { toast } from "sonner";

const TasksToday = () => {
  const [activeTab, setActiveTab] = useState<"today" | "missed">("today");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Not Started",
      points: 200,
      type: "Reading",
      startDate: "March 26",
    },
    {
      id: "2",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Not Started",
      points: 200,
      type: "Reading",
      startDate: "March 26",
    },
    {
      id: "3",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Inprogress",
      points: 200,
      type: "Reading",
      startDate: "March 26",
    },
    {
      id: "4",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Inprogress",
      points: 200,
      type: "Reading",
      startDate: "March 26",
    },
    {
      id: "5",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Completed",
      points: 200,
      type: "Reading",
      startDate: "March 26",
      completed: true,
    },
  ]);
  
  // Mock data for calendar days
  const calendarDays = [
    { day: 3, weekday: "MON", current: true },
    { day: 4, weekday: "TUE", current: false },
    { day: 5, weekday: "WED", current: false },
    { day: 6, weekday: "THU", current: false },
    { day: 7, weekday: "FRI", current: false },
    { day: 8, weekday: "SAT", current: false },
    { day: 9, weekday: "SUN", current: false },
    { day: 10, weekday: "TUE", current: false },
    { day: 11, weekday: "WED", current: false },
    { day: 12, weekday: "THU", current: false },
    { day: 13, weekday: "FRI", current: false },
    { day: 14, weekday: "SAT", current: false },
    { day: 15, weekday: "SUN", current: false },
    { day: 16, weekday: "MON", current: false },
  ];
  
  // Filter tasks by status
  const notStartedTasks = tasks.filter(task => task.status === "Not Started");
  const inProgressTasks = tasks.filter(task => task.status === "Inprogress");
  const completedTasks = tasks.filter(task => task.status === "Completed");

  // Handle drag end event
  const handleDragEnd = (result: DropResult) => {
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
      // If moving to completed, set completed flag
      draggedTask.completed = true;
    }
    
    // Update the task status
    const updatedTasks = tasks.map(task => {
      if (task.id === draggedTask?.id) {
        return { ...task, status: newStatus, completed: newStatus === "Completed" ? true : task.completed };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    toast.success(`Task moved to ${newStatus}`);
  };

  return (
    <Desktop activeTab="tasks">
      <div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen p-4 rounded-2xl">
        {/* Tabs */}
        <div className="flex border-b border-white/30 mb-6">
          <button
            className={`py-3 px-6 text-white font-medium relative ${
              activeTab === "today" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => setActiveTab("today")}
          >
            Today's Tasks
          </button>
          <button
            className={`py-3 px-6 text-white/70 font-medium ${
              activeTab === "missed" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => setActiveTab("missed")}
          >
            Missed Tasks
          </button>
        </div>
        
        {/* Calendar */}
        <TasksCalendar calendarDays={calendarDays} />
        
        {/* Legend */}
        <TasksLegend 
          notStartedCount={notStartedTasks.length} 
          inProgressCount={inProgressTasks.length}
          completedCount={completedTasks.length}
        />
        
        {/* Task Columns */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-3 gap-4 h-[calc(100vh-270px)]">
            {/* Not Started Column */}
            <TaskColumn 
              title="Not Started" 
              tasks={notStartedTasks} 
              colorClass="bg-orange-400" 
              actionLabel="Read Now" 
              actionVariant="primary"
              droppableId="not-started"
            />
            
            {/* In Progress Column */}
            <TaskColumn 
              title="Inprogress" 
              tasks={inProgressTasks} 
              colorClass="bg-blue-400" 
              actionLabel="Resume" 
              actionVariant="primary"
              droppableId="in-progress"
            />
            
            {/* Completed Column */}
            <TaskColumn 
              title="Completed" 
              tasks={completedTasks} 
              colorClass="bg-green-400" 
              showCompletedBadge
              droppableId="completed"
            />
          </div>
        </DragDropContext>
      </div>
    </Desktop>
  );
};

export default TasksToday;
