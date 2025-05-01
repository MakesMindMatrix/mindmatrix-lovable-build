
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
        "fixed right-0 mr-4 z-20 w-80",
        "overflow-hidden rounded-lg",
        useGlassLayout ? "shadow-lg" : "shadow-lg",
      )}
    >
      <CollapsibleTrigger
        asChild
        onClick={toggleCourseCard}
        className="w-full cursor-pointer"
      >
        <div>
          <CourseHeader 
            isCourseExpanded={isCourseExpanded}
            toggleCourseCard={toggleCourseCard}
            useGlassLayout={useGlassLayout}
          />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="max-h-[80vh] overflow-y-auto rounded-b-lg">
        <div className="space-y-3 py-3">
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
