
import React from "react";
import { cn } from "@/lib/utils";
import { CourseSession } from "./types";

interface SessionTabsProps {
  sessions: CourseSession[];
  expandedSessions: Record<number, boolean>;
  toggleExpandSession: (sessionId: number) => void;
}

const SessionTabs: React.FC<SessionTabsProps> = ({ 
  sessions, 
  expandedSessions, 
  toggleExpandSession 
}) => {
  return (
    <div className="sticky top-0 z-10 bg-blue-300/40 backdrop-blur-xl p-2 flex justify-between border-b border-blue-200/60">
      <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-hide">
        {sessions.map((session) => (
          <button
            key={session.id}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors",
              expandedSessions[session.id] 
                ? "bg-blue-500 text-white" 
                : "bg-blue-200/60 text-blue-700 hover:bg-blue-300/60"
            )}
            onClick={() => {
              toggleExpandSession(session.id);
              // Auto-scroll to this session if it's expanded
              if (!expandedSessions[session.id]) {
                setTimeout(() => {
                  document.getElementById(`session-${session.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
          >
            {session.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SessionTabs;
