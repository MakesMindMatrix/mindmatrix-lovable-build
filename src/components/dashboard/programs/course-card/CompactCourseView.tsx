
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, Square } from "lucide-react";

interface CompactCourseViewProps {
  badge: string;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  onViewCourse: () => void;
}

const CompactCourseView: React.FC<CompactCourseViewProps> = ({
  badge,
  title,
  description,
  hours,
  sessions,
  onViewCourse
}) => {
  return (
    <>
      <div className="mb-2">
        <span className="text-white bg-white/20 px-3 py-1 rounded-full text-xs">
          {badge}
        </span>
      </div>
      <h2 className="text-xl text-white font-medium mb-2">{title}</h2>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-white/70" />
          <span className="text-white">{hours} Hours</span>
        </div>
        <div className="flex items-center space-x-2">
          <Square className="w-5 h-5 text-white/70" />
          <span className="text-white">{sessions} Sessions</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
        onClick={onViewCourse}
      >
        View Course
      </Button>
    </>
  );
};

export default CompactCourseView;
