
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import TasksCalendarV2 from "@/components/dashboard/tasks/calendar/TasksCalendarV2";
import TasksLegend from "@/components/dashboard/tasks/TasksLegend";
import ErrorBoundary from "@/components/ErrorBoundary";
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
    updateTaskStatus,
    currentDate,
    currentMonth,
    currentYear
  } = useTasks();

  return (
    <Desktop activeTab="tasks">
      <ErrorBoundary>
        <div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen p-6 rounded-2xl flex flex-col">
          {/* Fixed section - Calendar and Legend */}
          <div className="flex-none">
            {/* Calendar */}
            <ErrorBoundary>
              <TasksCalendarV2 
                calendarDays={calendarDays} 
                onDayClick={handleDayClick}
                onPrevious={handlePrevious}
                onNext={handleNext}
                selectedDay={selectedDay}
                currentDate={currentDate}
                currentMonth={currentMonth}
                currentYear={currentYear}
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
