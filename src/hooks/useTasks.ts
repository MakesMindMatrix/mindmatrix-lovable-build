
import { useState, useEffect } from "react";
import { Task, TaskStatus } from "@/types/tasks";
import { toast } from "sonner";

const initialTasks: Task[] = [
  // Tasks for day 3
  {
    id: "1",
    title: "Introduction to AI Prompt Engineering",
    description: "Prompt Engineering",
    status: "Not Started",
    points: 200,
    type: "Reading",
    startDate: "March 26",
    day: 3,
  },
  {
    id: "2",
    title: "Advanced AI Techniques",
    description: "Advanced prompt patterns and practices",
    status: "Not Started",
    points: 250,
    type: "Reading",
    startDate: "March 26",
    day: 3,
  },
  
  // Tasks for day 4
  {
    id: "3",
    title: "Introduction to AI Prompt Engineering",
    description: "Core prompt engineering principles",
    status: "Inprogress",
    points: 200,
    type: "Reading",
    startDate: "March 26",
    day: 4,
  },
  {
    id: "4",
    title: "Advanced LLM Programming",
    description: "Programming techniques with large language models",
    status: "Inprogress",
    points: 250,
    type: "Assignment",
    startDate: "March 26",
    day: 4,
  },
  {
    id: "14",
    title: "AI Ethics Implementation",
    description: "Practical approaches to AI ethics",
    status: "Not Started",
    points: 220,
    type: "Reading",
    startDate: "March 26",
    day: 4,
  },
  
  // Tasks for day 5 (current day)
  {
    id: "5",
    title: "Introduction to AI Prompt Engineering",
    description: "Prompt Engineering fundamentals and best practices",
    status: "Completed",
    points: 200,
    type: "Reading",
    startDate: "March 28",
    day: 5,
    completed: true,
  },
  {
    id: "6",
    title: "Advanced Prompt Engineering",
    description: "Advanced techniques for prompt design",
    status: "Not Started",
    points: 300,
    type: "Reading",
    startDate: "March 28",
    day: 5,
  },
  {
    id: "7",
    title: "AI System Design",
    description: "System architecture fundamentals",
    status: "Not Started",
    points: 250,
    type: "Assignment",
    startDate: "March 28",
    day: 5,
  },
  {
    id: "8",
    title: "Machine Learning Models",
    description: "Understanding ML model design",
    status: "Not Started",
    points: 280,
    type: "Reading",
    startDate: "March 28",
    day: 5,
  },
  {
    id: "9",
    title: "Data Processing Pipeline",
    description: "Building efficient data pipelines",
    status: "Not Started",
    points: 320,
    type: "Assignment",
    startDate: "March 28",
    day: 5,
  },
  {
    id: "10",
    title: "Neural Network Basics",
    description: "Introduction to neural networks",
    status: "Inprogress",
    points: 270,
    type: "Reading",
    startDate: "March 28",
    day: 5,
  },
  {
    id: "11",
    title: "Deep Learning Algorithms",
    description: "Advanced deep learning concepts",
    status: "Inprogress",
    points: 330,
    type: "Assignment",
    startDate: "March 28",
    day: 5,
  },
];

export function useTasks() {
  const [allTasks, setAllTasks] = useState<Task[]>(initialTasks);
  const [selectedDay, setSelectedDay] = useState<number>(5); // Default to day 5 (today)
  const [visibleDaysStart, setVisibleDaysStart] = useState<number>(0);
  
  // Filter tasks by selected day
  const tasks = allTasks.filter(task => task.day === selectedDay);
  
  // Filter tasks by status
  const notStartedTasks = tasks.filter(task => task.status === "Not Started");
  const inProgressTasks = tasks.filter(task => task.status === "Inprogress");
  const completedTasks = tasks.filter(task => task.status === "Completed");
  
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
    { day: visibleDaysStart + 3, weekday: "MON", current: false },
    { day: visibleDaysStart + 4, weekday: "TUE", current: false },
    { day: visibleDaysStart + 5, weekday: "WED", current: true }, // Set day 5 as current
    { day: visibleDaysStart + 6, weekday: "THU", current: false },
    { day: visibleDaysStart + 7, weekday: "FRI", current: false },
    { day: visibleDaysStart + 8, weekday: "SAT", current: false },
    { day: visibleDaysStart + 9, weekday: "SUN", current: false },
    { day: visibleDaysStart + 10, weekday: "MON", current: false },
    { day: visibleDaysStart + 11, weekday: "TUE", current: false },
  ];

  // Update task status (for drag and drop)
  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    const updatedAllTasks = allTasks.map(task => {
      if (task.id === taskId) {
        return { 
          ...task, 
          status: newStatus, 
          completed: newStatus === "Completed" ? true : task.completed 
        };
      }
      return task;
    });
    
    setAllTasks(updatedAllTasks);
    toast.success(`Task moved to ${newStatus}`);
  };
  
  return {
    allTasks,
    tasks,
    selectedDay,
    visibleDaysStart,
    calendarDays,
    notStartedTasks,
    inProgressTasks,
    completedTasks,
    handleDayClick,
    handlePrevious,
    handleNext,
    updateTaskStatus,
    setAllTasks
  };
}
