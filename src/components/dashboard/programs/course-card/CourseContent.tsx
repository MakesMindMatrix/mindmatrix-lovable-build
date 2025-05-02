
import React from "react";
import CourseTaskItem from "./CourseTaskItem";
import { Book } from "lucide-react";

interface CourseContentProps {
  activeSection: string | null;
  activeSession: number | null;
  courseTasks?: { id: number; title: string }[];
  onTaskClick: (taskTitle: string) => void;
}

const CourseContent: React.FC<CourseContentProps> = ({ 
  activeSection, 
  activeSession,
  courseTasks = [],
  onTaskClick
}) => {
  if (activeSession === null) {
    return null;
  }
  
  return (
    <div className="space-y-0">
      {activeSection === "references" && (
        <>
          <CourseTaskItem title="Learning Module" onTaskClick={onTaskClick} icon={Book} />
          <CourseTaskItem title="Pre Session Doc" onTaskClick={onTaskClick} />
          <CourseTaskItem title="Live Tutorial" onTaskClick={onTaskClick} />
          <CourseTaskItem title="Post Session Ref" onTaskClick={onTaskClick} />
        </>
      )}
      
      {activeSection === "tasks" && activeSession > 0 && (
        <>
          {courseTasks.map((task) => (
            <CourseTaskItem key={task.id} title={task.title} onTaskClick={onTaskClick} />
          ))}
          <CourseTaskItem title="Assessment" onTaskClick={onTaskClick} />
        </>
      )}
    </div>
  );
};

export default CourseContent;
