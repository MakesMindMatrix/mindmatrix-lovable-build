
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
  currentComponent,
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
        "fixed right-0 mr-4 z-20 w-72", // Reduced width from w-80 to w-72
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

      <CollapsibleContent className="max-h-[70vh] overflow-y-auto rounded-b-lg">  {/* Reduced max height from 80vh to 70vh */}
        <div className="space-y-2 py-2">  {/* Reduced space-y and py from 3 to 2 */}
          {sessions.map((session) => (
            <SessionItem 
              key={session.id}
              session={session}
              expandedSessions={expandedSessions}
              toggleExpandSession={toggleExpandSession}
              handleComponentClick={handleComponentClick}
              currentComponent={currentComponent}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CourseAccordion;
