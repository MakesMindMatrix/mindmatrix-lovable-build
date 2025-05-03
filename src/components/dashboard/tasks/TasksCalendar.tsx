
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
}

const TasksCalendar: React.FC<TasksCalendarProps> = ({ calendarDays }) => {
  return (
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
  );
};

export default TasksCalendar;
