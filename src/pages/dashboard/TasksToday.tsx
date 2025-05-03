
import React, { useState } from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ArrowUpRight, 
  CheckCircle 
} from "lucide-react";

// Define task status types
type TaskStatus = "Not Started" | "Inprogress" | "Completed";

// Define task interface
interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  points: number;
  type: string;
  startDate: string;
  completed?: boolean;
}

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
      <div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen p-4">
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
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">APRIL 2025</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-blue-700/20 border-white/20 text-white hover:bg-blue-700/30 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex space-x-2 min-w-max">
                {calendarDays.map((day) => (
                  <div 
                    key={day.day}
                    className={`flex flex-col items-center justify-center bg-white/20 rounded-md py-2 px-4 min-w-[68px] ${
                      day.current ? "border-2 border-white" : "border border-white/30"
                    }`}
                  >
                    <span className="text-lg font-medium text-white">{day.day}</span>
                    <span className="text-xs text-white/80">{day.weekday}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-blue-700/20 border-white/20 text-white hover:bg-blue-700/30 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-end mb-4 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
            <span className="text-white text-sm">Not Started / {notStartedTasks.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
            <span className="text-white text-sm">Inprogress / {inProgressTasks.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
            <span className="text-white text-sm">Completed / {completedTasks.length}</span>
          </div>
        </div>
        
        {/* Task Columns */}
        <div className="grid grid-cols-3 gap-4">
          {/* Not Started Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-orange-400 rounded-sm"></div>
              <h3 className="text-white text-xl font-medium">Not Started</h3>
            </div>
            
            {notStartedTasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                actionLabel="Read Now"
                actionVariant="primary"
              />
            ))}
          </div>
          
          {/* In Progress Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-blue-400 rounded-sm"></div>
              <h3 className="text-white text-xl font-medium">Inprogress</h3>
            </div>
            
            {inProgressTasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                actionLabel="Resume"
                actionVariant="primary"
              />
            ))}
          </div>
          
          {/* Completed Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-green-400 rounded-sm"></div>
              <h3 className="text-white text-xl font-medium">Completed</h3>
            </div>
            
            {completedTasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                showCompletedBadge
              />
            ))}
          </div>
        </div>
      </div>
    </Desktop>
  );
};

// Task Card Component
interface TaskCardProps {
  task: Task;
  actionLabel?: string;
  actionVariant?: "primary" | "secondary";
  showCompletedBadge?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  actionLabel, 
  actionVariant = "secondary",
  showCompletedBadge = false
}) => {
  return (
    <Card className="bg-white/20 backdrop-blur-sm border border-white/30 mb-4 overflow-hidden">
      <div className="p-4">
        {/* Status Badge */}
        <div className="mb-3">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">
            {task.status}
          </span>
        </div>
        
        {/* Task Content */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
            <FileText className="h-5 w-5 text-amber-800" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-white font-medium mb-1">{task.title}</h4>
            <p className="text-white/80 text-sm mb-3">{task.description}</p>
            
            {/* Task Metadata */}
            <div className="flex items-center text-xs text-white/90 mb-3 gap-2">
              <span>{task.points} PTS</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-1"></span>
                {task.type}
              </span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-1"></span>
                Started on {task.startDate}
              </span>
            </div>
            
            {/* Actions */}
            <div className="flex justify-between items-center">
              <Button 
                variant="outline"
                size="sm"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Know More <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
              
              {actionLabel && (
                <Button 
                  variant={actionVariant === "primary" ? "default" : "outline"}
                  size="sm"
                  className={actionVariant === "primary" ? 
                    "bg-blue-600 hover:bg-blue-700 text-white" : 
                    "text-white border-white/30 hover:bg-white/10"
                  }
                >
                  {actionLabel} <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              )}
              
              {showCompletedBadge && (
                <div className="flex items-center text-green-400 font-medium">
                  Completed <CheckCircle className="ml-1 h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TasksToday;
