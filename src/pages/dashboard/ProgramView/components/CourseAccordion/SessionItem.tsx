
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { CourseSession } from "./types";
import { cn } from "@/lib/utils";

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
  const isExpanded = expandedSessions[session.id];
  
  return (
    <div
      id={`session-${session.id}`}
      className={cn(
        "mx-3 rounded-lg overflow-hidden shadow-sm transition-all duration-300",
        isExpanded 
          ? "bg-gray-300/80 backdrop-blur-md border border-gray-400/30" // Grey glass effect for expanded session
          : "bg-blue-500/80 backdrop-blur-md border border-blue-400/30" // Dark blue glass effect for collapsed session
      )}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => toggleExpandSession(session.id)}
      >
        <div className="flex items-center space-x-3">
          <div className={cn(
            "w-5 h-5",
            isExpanded ? "text-blue-600" : "text-white" // Icon color changes based on expanded state
          )}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.2C3 4.4327 4.4327 3 6.2 3H10.5C12.2673 3 13.7 4.4327 13.7 6.2V10.5C13.7 12.2673 12.2673 13.7 10.5 13.7H6.2C4.4327 13.7 3 12.2673 3 10.5V6.2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M10.3 13.7C10.3 11.9327 11.7327 10.5 13.5 10.5H17.8C19.5673 10.5 21 11.9327 21 13.7V18C21 19.7673 19.5673 21.2 17.8 21.2H13.5C11.7327 21.2 10.3 19.7673 10.3 18V13.7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M13.7 10.3C11.9327 10.3 10.5 8.8673 10.5 7.1V7.1C10.5 5.3327 11.9327 3.9 13.7 3.9H18C19.7673 3.9 21.2 5.3327 21.2 7.1V7.1C21.2 8.8673 19.7673 10.3 18 10.3H13.7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 13.5C3 11.7327 4.4327 10.3 6.2 10.3H6.2C7.9673 10.3 9.4 11.7327 9.4 13.5V17.8C9.4 19.5673 7.9673 21 6.2 21H6.2C4.4327 21 3 19.5673 3 17.8V13.5Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h4 className={cn(
            "text-lg font-medium",
            isExpanded ? "text-blue-600" : "text-white" // Text color changes based on expanded state
          )}>Session {session.id}</h4>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-blue-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4">
          {session.components.map((component) => (
            <div 
              key={component.id}
              onClick={() => handleComponentClick(session.id, component.id)}
              className={cn(
                "py-2 px-3 font-medium text-sm cursor-pointer rounded-md my-1 transition-all",
                component.id === 'tutorial' 
                  ? "bg-blue-500 text-white" 
                  : "bg-white/70 text-blue-600 hover:bg-white/90"
              )}
            >
              {component.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionItem;
