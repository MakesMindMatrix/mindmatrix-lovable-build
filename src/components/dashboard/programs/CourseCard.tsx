
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompactCourseView from "./course-card/CompactCourseView";
import ExpandedCourseView from "./course-card/ExpandedCourseView";

interface Course {
  id: number;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  badge: string;
  points?: number;
  taskCount?: number;
  courseSessions?: { id: number; title: string }[];
  courseTasks?: { id: number; title: string }[];
}

interface CourseCardProps {
  course: Course;
  isExpanded: boolean;
  onViewCourse: (courseId: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  isExpanded, 
  onViewCourse 
}) => {
  const navigate = useNavigate();
  const [activeSession, setActiveSession] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>("references");
  
  // Handle session selection
  const handleSessionClick = (sessionId: number) => {
    setActiveSession(sessionId === activeSession ? null : sessionId);
  };
  
  // Navigate to component-specific pages
  const handleTaskClick = (taskTitle: string) => {
    console.log(`Clicked on component: ${taskTitle}`);
    
    // Navigation for different components
    if (taskTitle === "Live Tutorial") {
      navigate("/program-course-LiveTutorial");
    } else if (taskTitle === "Learning Module") {
      navigate("/program-course-LearningModule");
    } else {
      // For all other components - will be implemented later
      console.log(`Navigation for ${taskTitle} will be implemented later`);
    }
  };
  
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 max-w-[500px]">
      {isExpanded ? (
        <ExpandedCourseView
          course={course}
          activeSession={activeSession}
          activeSection={activeSection}
          onSessionClick={handleSessionClick}
          onSectionChange={setActiveSection}
          onTaskClick={handleTaskClick}
          onClose={() => onViewCourse(course.id)}
        />
      ) : (
        <CompactCourseView
          badge={course.badge}
          title={course.title}
          description={course.description}
          hours={course.hours}
          sessions={course.sessions}
          onViewCourse={() => onViewCourse(course.id)}
        />
      )}
    </div>
  );
};

export default CourseCard;
