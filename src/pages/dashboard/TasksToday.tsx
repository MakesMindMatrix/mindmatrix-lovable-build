
import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Desktop from "@/components/dashboard/day1/Desktop";
import TaskColumn from "@/components/dashboard/tasks/TaskColumn";
import TasksCalendar from "@/components/dashboard/tasks/TasksCalendar";
import TasksLegend from "@/components/dashboard/tasks/TasksLegend";
import { Task, TaskStatus } from "@/types/tasks";
import { toast } from "sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

const TasksToday = () => {
  console.log("Rendering TasksToday component");
  const [activeTab, setActiveTab] = useState<"today" | "missed">("today");
  const [selectedDay, setSelectedDay] = useState<number>(3); // Default selected day
  const [visibleDaysStart, setVisibleDaysStart] = useState<number>(0); // Start index of visible days
  
  // Base tasks array - in a real app, this would be fetched from an API
  const [allTasks, setAllTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Not Started",
      points: 200,
      type: "Reading",
      startDate: "March 26",
      day: 3, // Added day property
    },
    {
      id: "2",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Not Started",
      points: 200,
      type: "Reading",
      startDate: "March 26",
      day: 3, // Added day property
    },
    {
      id: "3",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Inprogress",
      points: 200,
      type: "Reading",
      startDate: "March 26",
      day: 3, // Added day property
    },
    {
      id: "4",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Inprogress",
      points: 200,
      type: "Reading",
      startDate: "March 26",
      day: 3, // Added day property
    },
    {
      id: "5",
      title: "Introduction to AI Prompt Engineering",
      description: "Prompt Engineering",
      status: "Completed",
      points: 200,
      type: "Reading",
      startDate: "March 26",
      day: 3, // Added day property
      completed: true,
    },
    // Adding tasks for other days
    {
      id: "6",
      title: "Advanced Prompt Engineering",
      description: "Advanced techniques",
      status: "Not Started",
      points: 300,
      type: "Reading",
      startDate: "March 27",
      day: 4, // Another day
    },
    {
      id: "7",
      title: "AI System Design",
      description: "System architecture",
      status: "Not Started",
      points: 250,
      type: "Assignment",
      startDate: "March 28",
      day: 5, // Another day
    },
  ]);
  
  // Filter tasks by selected day
  const tasks = allTasks.filter(task => task.day === selectedDay);
  
  useEffect(() => {
    console.log("TasksToday mounted");
    return () => {
      console.log("TasksToday unmounted");
    };
  }, []);
  
  // Handle day selection
  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    toast.info(`Viewing tasks for day ${day}`);
  };
  
  // Handle previous button click
  const handlePrevious = () => {
    if (visibleDaysStart > 0) {
      setVisibleDaysStart(visibleDaysStart - 1);
    } else {
      toast.info("No more previous dates available");
    }
  };
  
  // Handle next button click
  const handleNext = () => {
    if (visibleDaysStart + 14 < 30) { // Assuming a month has up to 30 days
      setVisibleDaysStart(visibleDaysStart + 1);
    } else {
      toast.info("No more future dates available");
    }
  };
  
  // Define visible calendar days based on the start index
  const calendarDays = [
    { day: visibleDaysStart + 3, weekday: "MON", current: visibleDaysStart + 3 === 3 },
    { day: visibleDaysStart + 4, weekday: "TUE", current: false },
    { day: visibleDaysStart + 5, weekday: "WED", current: false },
    { day: visibleDaysStart + 6, weekday: "THU", current: false },
    { day: visibleDaysStart + 7, weekday: "FRI", current: false },
    { day: visibleDaysStart + 8, weekday: "SAT", current: false },
    { day: visibleDaysStart + 9, weekday: "SUN", current: false },
    { day: visibleDaysStart + 10, weekday: "MON", current: false },
    { day: visibleDaysStart + 11, weekday: "TUE", current: false },
    { day: visibleDaysStart + 12, weekday: "WED", current: false },
    { day: visibleDaysStart + 13, weekday: "THU", current: false },
    { day: visibleDaysStart + 14, weekday: "FRI", current: false },
    { day: visibleDaysStart + 15, weekday: "SAT", current: false },
    { day: visibleDaysStart + 16, weekday: "SUN", current: false },
  ];
  
  // Filter tasks by status
  const notStartedTasks = tasks.filter(task => task.status === "Not Started");
  const inProgressTasks = tasks.filter(task => task.status === "Inprogress");
  const completedTasks = tasks.filter(task => task.status === "Completed");

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
        // If moving to completed, set completed flag
        draggedTask.completed = true;
      }
      
      // Update the task status in the all tasks array
      const updatedAllTasks = allTasks.map(task => {
        if (task.id === draggedTask?.id) {
          return { ...task, status: newStatus, completed: newStatus === "Completed" ? true : task.completed };
        }
        return task;
      });
      
      setAllTasks(updatedAllTasks);
      toast.success(`Task moved to ${newStatus}`);
    } catch (error) {
      console.error("Error in handleDragEnd:", error);
      toast.error("Failed to update task status");
    }
  };

  return (
    <Desktop activeTab="tasks">
      <ErrorBoundary>
        <div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen p-4 rounded-2xl flex flex-col">
          {/* Fixed section - Tabs, Calendar, and Legend */}
          <div className="flex-none">
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
            <ErrorBoundary>
              <TasksCalendar 
                calendarDays={calendarDays} 
                onDayClick={handleDayClick}
                onPrevious={handlePrevious}
                onNext={handleNext}
                selectedDay={selectedDay}
              />
            </ErrorBoundary>
            
            {/* Legend */}
            <ErrorBoundary>
              <TasksLegend 
                notStartedCount={notStartedTasks.length} 
                inProgressCount={inProgressTasks.length}
                completedCount={completedTasks.length}
              />
            </ErrorBoundary>
          </div>
          
          {/* Scrollable Task Columns */}
          <ErrorBoundary>
            <div className="flex-1 overflow-y-auto">
              <DragDropContext onDragEnd={handleDragEnd}>
                <div className="grid grid-cols-3 gap-4 min-h-[calc(100vh-270px)]">
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
        </div>
      </ErrorBoundary>
    </Desktop>
  );
};

export default TasksToday;
