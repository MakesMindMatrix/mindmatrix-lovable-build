
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarDay {
  day: number;
  weekday: string;
  current: boolean;
}

interface TasksCalendarProps {
  calendarDays: CalendarDay[];
  onDayClick: (day: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  selectedDay: number;
}

const TasksCalendar: React.FC<TasksCalendarProps> = ({ 
  calendarDays, 
  onDayClick, 
  onPrevious, 
  onNext,
  selectedDay
}) => {
  // Current month and year (hardcoded for now, can be made dynamic)
  const currentMonth = "APRIL";
  const currentYear = "2025";
  
  // Set day 5 as the current date (today's date)
  const currentDate = 5;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">{currentMonth} {currentYear}</h3>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-blue-700/20 border-white/20 text-white hover:bg-blue-700/30 hover:text-white"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 min-w-max">
            {calendarDays.map((day) => {
              // Determine if this date is in the past (before today)
              const isPastDate = day.day < currentDate;
              
              return (
                <div 
                  key={day.day}
                  className={`flex flex-col items-center justify-center rounded-md py-2 px-4 min-w-[68px] cursor-pointer transition-all 
                  ${day.day === currentDate 
                    ? "bg-white" // Current date is white background
                    : day.day === selectedDay 
                      ? "bg-white/20 border-2 border-white" // Selected date has white border
                      : isPastDate
                        ? "bg-red-50/20 border border-red-500 hover:bg-red-50/30" // Past date has red border with light red background
                        : "bg-white/20 border border-white/30 hover:bg-white/30" // Future date with default styling
                  }`}
                  onClick={() => onDayClick(day.day)}
                >
                  <span className={`text-lg font-medium ${day.day === currentDate ? "text-[#0F56CC]" : "text-white"}`}>
                    {day.day}
                  </span>
                  <span className={`text-xs ${day.day === currentDate ? "text-[#0F56CC]" : "text-white/80"}`}>
                    {day.weekday}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-blue-700/20 border-white/20 text-white hover:bg-blue-700/30 hover:text-white"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TasksCalendar;
