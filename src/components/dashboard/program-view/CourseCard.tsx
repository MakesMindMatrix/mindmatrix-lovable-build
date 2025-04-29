
import React from "react";
import IconBadge from "./IconBadge";

interface CourseCardProps {
  courseNumber: string;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  iconType: "document" | "lightbulb";
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseNumber,
  title,
  description,
  hours,
  sessions,
  iconType
}) => {
  return (
    <div className="flex gap-4">
      <IconBadge type={iconType} />
      
      <div className="flex-1 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
        <div className="inline-block px-2 py-1 text-xs rounded-full border border-white/40 text-white">
          {courseNumber}
        </div>
        
        <h3 className="mt-2 text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{description}</p>
        
        <div className="flex items-center mt-4 text-xs text-white/90">
          <div className="flex items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-1">{hours} Hours</span>
          </div>
          
          <div className="ml-6">
            {sessions} Sessions
          </div>
        </div>
        
        <button className="mt-4 px-6 py-2 bg-white text-sm font-medium text-blue-500 rounded-full hover:bg-white/90 transition-colors">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
