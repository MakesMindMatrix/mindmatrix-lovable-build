
import React, { useState } from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import TaskColumn from "@/components/dashboard/tasks/TaskColumn";
import TasksCalendar from "@/components/dashboard/tasks/TasksCalendar";
import TasksLegend from "@/components/dashboard/tasks/TasksLegend";
import { Task } from "@/types/tasks";

const TasksToday = () => {
  const [activeTab, setActiveTab] = useState<"today" | "missed">("today");
  
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
  
  // Mock tasks data
  const tasks: Task[] = [
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
  ];
  
  // Filter tasks by status
  const notStartedTasks = tasks.filter(task => task.status === "Not Started");
  const inProgressTasks = tasks.filter(task => task.status === "Inprogress");
  const completedTasks = tasks.filter(task => task.status === "Completed");

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
        <div className="grid grid-cols-3 gap-4 h-[calc(100vh-270px)]">
          {/* Not Started Column */}
          <TaskColumn 
            title="Not Started" 
            tasks={notStartedTasks} 
            colorClass="bg-orange-400" 
            actionLabel="Read Now" 
            actionVariant="primary" 
          />
          
          {/* In Progress Column */}
          <TaskColumn 
            title="Inprogress" 
            tasks={inProgressTasks} 
            colorClass="bg-blue-400" 
            actionLabel="Resume" 
            actionVariant="primary" 
          />
          
          {/* Completed Column */}
          <TaskColumn 
            title="Completed" 
            tasks={completedTasks} 
            colorClass="bg-green-400" 
            showCompletedBadge 
          />
        </div>
      </div>
    </Desktop>
  );
};

export default TasksToday;
