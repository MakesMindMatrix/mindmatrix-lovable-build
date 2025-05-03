
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PreviousDateCard from "./PreviousDateCard";
import TodayDateCard from "./TodayDateCard";
import FutureDateCard from "./FutureDateCard";

interface CalendarDay {
  day: number;
  weekday: string;
  current: boolean;
}

interface TasksCalendarV2Props {
  calendarDays: CalendarDay[];
  onDayClick: (day: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  selectedDay: number;
  currentDate: number;
  currentMonth: string;
  currentYear: string;
}

const TasksCalendarV2: React.FC<TasksCalendarV2Props> = ({ 
  calendarDays, 
  onDayClick, 
  onPrevious, 
  onNext,
  selectedDay,
  currentDate,
  currentMonth,
  currentYear
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">{currentMonth} {currentYear}</h3>
      </div>
      
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-blue-700/20 border-white/20 text-white hover:bg-blue-700/30 hover:text-white shrink-0"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pl-2 pr-2">
            {calendarDays.map((day) => {
              // Determine card type based on date
              if (day.day < currentDate) {
                // Previous date card
                return (
                  <PreviousDateCard
                    key={day.day}
                    day={day.day}
                    weekday={day.weekday}
                    onClick={() => onDayClick(day.day)}
                    isSelected={day.day === selectedDay}
                  />
                );
              } else if (day.day === currentDate) {
                // Today's date card
                return (
                  <TodayDateCard
                    key={day.day}
                    day={day.day}
                    weekday={day.weekday}
                    onClick={() => onDayClick(day.day)}
                    isSelected={day.day === selectedDay}
                  />
                );
              } else {
                // Future date card
                return (
                  <FutureDateCard
                    key={day.day}
                    day={day.day}
                    weekday={day.weekday}
                    onClick={() => onDayClick(day.day)}
                    isSelected={day.day === selectedDay}
                  />
                );
              }
            })}
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-blue-700/20 border-white/20 text-white hover:bg-blue-700/30 hover:text-white shrink-0"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TasksCalendarV2;
