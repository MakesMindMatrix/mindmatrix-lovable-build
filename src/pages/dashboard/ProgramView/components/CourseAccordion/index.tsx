
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { CourseAccordionProps } from "./types";
import { sessions } from "./mockData";
import CourseHeader from "./CourseHeader";
import SessionTabs from "./SessionTabs";
import SessionItem from "./SessionItem";

const CourseAccordion: React.FC<CourseAccordionProps> = ({
  isCourseExpanded,
  toggleCourseCard,
  currentSession,
  toggleSession,
  useGlassLayout = false,
  onComponentClick,
}) => {
  const [expandedSessions, setExpandedSessions] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const toggleExpandSession = (sessionId: number) => {
    setExpandedSessions(prev => ({
      ...prev,
      [sessionId]: !prev[sessionId]
    }));
  };

  const handleComponentClick = (sessionId: number, componentId: string) => {
    if (onComponentClick) {
      onComponentClick(sessionId, componentId);
    }
  };

  return (
    <Collapsible 
      open={isCourseExpanded}
      className={cn(
        "fixed right-0 mr-4 z-20 w-80", // Fixed width aligned to right
        "border-none shadow-lg overflow-hidden rounded-xl", // Added rounded corners
        useGlassLayout ? "bg-blue-500/10 backdrop-blur-md" : "bg-[#2E3A54]" // More glassy background
      )}
    >
      <CollapsibleTrigger
        asChild
        onClick={toggleCourseCard}
        className="w-full cursor-pointer"
      >
        <CourseHeader 
          isCourseExpanded={isCourseExpanded}
          toggleCourseCard={toggleCourseCard}
          useGlassLayout={useGlassLayout}
        />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="p-0 space-y-1 max-h-[70vh] overflow-y-auto bg-blue-100/40 backdrop-blur-lg rounded-b-xl">
          {/* Navigation tabs at the top */}
          <SessionTabs 
            sessions={sessions} 
            expandedSessions={expandedSessions}
            toggleExpandSession={toggleExpandSession}
          />

          {sessions.map((session) => (
            <SessionItem 
              key={session.id}
              session={session}
              expandedSessions={expandedSessions}
              toggleExpandSession={toggleExpandSession}
              handleComponentClick={handleComponentClick}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CourseAccordion;
