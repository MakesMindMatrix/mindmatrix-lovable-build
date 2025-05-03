
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import TasksCalendarV2 from "@/components/dashboard/tasks/calendar/TasksCalendarV2";
import TasksLegend from "@/components/dashboard/tasks/TasksLegend";
import ErrorBoundary from "@/components/ErrorBoundary";
import TasksHeader from "@/components/dashboard/tasks/TasksHeader";
import TasksContainer from "@/components/dashboard/tasks/TasksContainer";
import { useTasks } from "@/hooks/useTasks";

const TasksToday = () => {
  console.log("Rendering TasksToday component");
  
  const {
    selectedDay,
    calendarDays,
    notStartedTasks,
    inProgressTasks,
    completedTasks,
    handleDayClick,
    handlePrevious,
    handleNext,
    updateTaskStatus
  } = useTasks();

  return (
    <Desktop activeTab="tasks">
      <ErrorBoundary>
        <div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen p-6 rounded-2xl flex flex-col">
          {/* Fixed section - Calendar and Legend */}
          <div className="flex-none">
            {/* Page header with task info */}
            <TasksHeader 
              notStartedCount={notStartedTasks.length}
              inProgressCount={inProgressTasks.length}
              completedCount={completedTasks.length}
            />
            
            {/* Calendar */}
            <ErrorBoundary>
              <TasksCalendarV2 
                calendarDays={calendarDays} 
                onDayClick={handleDayClick}
                onPrevious={handlePrevious}
                onNext={handleNext}
                selectedDay={selectedDay}
                currentDate={5} // Set day 5 as the current date
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
          <TasksContainer
            notStartedTasks={notStartedTasks}
            inProgressTasks={inProgressTasks}
            completedTasks={completedTasks}
            onTaskMove={updateTaskStatus}
          />
        </div>
      </ErrorBoundary>
    </Desktop>
  );
};

export default TasksToday;
