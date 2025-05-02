
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseTaskItemProps {
  title: string;
  onTaskClick: (taskTitle: string) => void;
  icon?: React.ElementType;
}

const CourseTaskItem: React.FC<CourseTaskItemProps> = ({ title, onTaskClick, icon: Icon }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/20 last:border-b-0">
      <div className="flex items-center">
        {Icon && <Icon className="h-4 w-4 mr-2 text-white/70" />}
        <span className="text-white">{title}</span>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-6 w-6 rounded-full bg-white/20 hover:bg-white/30 p-0"
        onClick={() => onTaskClick(title)}
      >
        <ArrowRight className="h-4 w-4 text-white" />
      </Button>
    </div>
  );
};

export default CourseTaskItem;
