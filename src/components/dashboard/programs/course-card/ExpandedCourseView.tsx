
import React from "react";
import CourseHeader from "./CourseHeader";
import SessionTabs from "./SessionTabs";
import SectionTabs from "./SectionTabs";
import CourseContent from "./CourseContent";

interface Session {
  id: number;
  title: string;
}

interface Course {
  id: number;
  title: string;
  badge: string;
  points?: number;
  taskCount?: number;
  courseSessions?: Session[];
  courseTasks?: { id: number; title: string }[];
}

interface ExpandedCourseViewProps {
  course: Course;
  activeSession: number | null;
  activeSection: string | null;
  onSessionClick: (sessionId: number) => void;
  onSectionChange: (section: string) => void;
  onTaskClick: (taskTitle: string) => void;
  onClose: () => void;
}

const ExpandedCourseView: React.FC<ExpandedCourseViewProps> = ({
  course,
  activeSession,
  activeSection,
  onSessionClick,
  onSectionChange,
  onTaskClick,
  onClose
}) => {
  return (
    <>
      <CourseHeader
        badge={course.badge}
        title={course.title}
        points={course.points}
        taskCount={course.taskCount}
        onClose={onClose}
      />
      
      <SessionTabs
        sessions={course.courseSessions || []}
        activeSession={activeSession}
        onSessionClick={onSessionClick}
      />
      
      {activeSession !== null && (
        <SectionTabs
          activeSection={activeSection}
          onSectionChange={onSectionChange}
        />
      )}
      
      <CourseContent
        activeSection={activeSection}
        activeSession={activeSession}
        courseTasks={course.courseTasks}
        onTaskClick={onTaskClick}
      />
    </>
  );
};

export default ExpandedCourseView;
