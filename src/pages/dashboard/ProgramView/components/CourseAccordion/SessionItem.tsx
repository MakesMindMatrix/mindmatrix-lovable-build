
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { CourseSession, CourseComponent } from "./types";
import ComponentGrid from "./ComponentGrid";

interface SessionItemProps {
  session: CourseSession;
  expandedSessions: Record<number, boolean>;
  toggleExpandSession: (sessionId: number) => void;
  handleComponentClick: (sessionId: number, componentId: string) => void;
}

const SessionItem: React.FC<SessionItemProps> = ({
  session,
  expandedSessions,
  toggleExpandSession,
  handleComponentClick,
}) => {
  // Determine if this session is expanded
  const isExpanded = expandedSessions[session.id];
  
  return (
    <div
      id={`session-${session.id}`}
      key={session.id}
      className={`mb-4 last:mb-0 backdrop-blur-lg rounded-md overflow-hidden transition-colors duration-200 ${
        isExpanded 
          ? "bg-blue-300/70 shadow-md" // Darker background when expanded
          : "bg-blue-200/40" // Original lighter background when collapsed
      }`}
    >
      <div
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => toggleExpandSession(session.id)}
      >
        <div className="flex items-center space-x-3">
          <div className="text-blue-700 w-5 h-5">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.2C3 4.4327 4.4327 3 6.2 3H10.5C12.2673 3 13.7 4.4327 13.7 6.2V10.5C13.7 12.2673 12.2673 13.7 10.5 13.7H6.2C4.4327 13.7 3 12.2673 3 10.5V6.2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M10.3 13.7C10.3 11.9327 11.7327 10.5 13.5 10.5H17.8C19.5673 10.5 21 11.9327 21 13.7V18C21 19.7673 19.5673 21.2 17.8 21.2H13.5C11.7327 21.2 10.3 19.7673 10.3 18V13.7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M13.7 10.3C11.9327 10.3 10.5 8.8673 10.5 7.1V7.1C10.5 5.3327 11.9327 3.9 13.7 3.9H18C19.7673 3.9 21.2 5.3327 21.2 7.1V7.1C21.2 8.8673 19.7673 10.3 18 10.3H13.7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 13.5C3 11.7327 4.4327 10.3 6.2 10.3H6.2C7.9673 10.3 9.4 11.7327 9.4 13.5V17.8C9.4 19.5673 7.9673 21 6.2 21H6.2C4.4327 21 3 19.5673 3 17.8V13.5Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h4 className="text-blue-700 text-base font-medium">Session {session.id}</h4>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-blue-700" />
          ) : (
            <ChevronDown className="h-5 w-5 text-blue-700" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-2 pb-3">
          <ComponentGrid 
            session={session} 
            handleComponentClick={handleComponentClick} 
          />
        </div>
      )}
    </div>
  );
};

export default SessionItem;
