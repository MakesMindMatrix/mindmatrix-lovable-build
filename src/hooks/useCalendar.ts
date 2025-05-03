
import { useState } from "react";
import { toast } from "sonner";

interface CalendarDay {
  day: number;
  weekday: string;
  current: boolean;
}

export function useCalendar(initialSelectedDay: number = 5, currentDate: number = 5) {
  const [selectedDay, setSelectedDay] = useState<number>(initialSelectedDay);
  const [visibleDaysStart, setVisibleDaysStart] = useState<number>(0);
  
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
  const calendarDays: CalendarDay[] = [
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

  // Get month and year (hardcoded for now, can be made dynamic)
  const currentMonth = "APRIL";
  const currentYear = "2025";
  
  return {
    selectedDay,
    visibleDaysStart,
    calendarDays,
    currentMonth,
    currentYear,
    currentDate,
    handleDayClick,
    handlePrevious,
    handleNext,
  };
}
