
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CourseHeaderProps {
  badge: string;
  title: string;
  points?: number;
  taskCount?: number;
  onClose: () => void;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ 
  badge, 
  title, 
  points, 
  taskCount, 
  onClose 
}) => {
  return (
    <div>
      {/* Back button */}
      <div className="flex justify-end mb-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
          onClick={onClose}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Course Badge and Title */}
      <div className="mb-4">
        <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs inline-block mb-2">
          {badge}
        </div>
        <h2 className="text-xl text-white font-medium">{title}</h2>
        
        {(points !== undefined || taskCount !== undefined) && (
          <div className="flex items-center space-x-4 mt-2 text-sm">
            {points !== undefined && (
              <div className="flex items-center">
                <div className="bg-white/20 w-2 h-2 rounded-full mr-2"></div>
                <span className="text-white">{points} PTS</span>
              </div>
            )}
            {taskCount !== undefined && (
              <div className="flex items-center">
                <div className="bg-white/20 w-2 h-2 rounded-full mr-2"></div>
                <span className="text-white">{taskCount} Tasks</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseHeader;
