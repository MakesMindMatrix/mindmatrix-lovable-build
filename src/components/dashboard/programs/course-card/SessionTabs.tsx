
import React from "react";
import { Button } from "@/components/ui/button";

interface SessionTab {
  id: number;
  title: string;
}

interface SessionTabsProps {
  sessions: SessionTab[];
  activeSession: number | null;
  onSessionClick: (sessionId: number) => void;
}

const SessionTabs: React.FC<SessionTabsProps> = ({ 
  sessions, 
  activeSession, 
  onSessionClick 
}) => {
  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {sessions.map((session) => (
        <Button 
          key={session.id}
          variant="secondary" 
          className={`bg-white/20 hover:bg-white/30 text-white rounded-full text-sm ${activeSession === session.id ? 'ring-2 ring-white' : ''}`}
          onClick={() => onSessionClick(session.id)}
        >
          {session.title}
        </Button>
      ))}
      <Button 
        variant="secondary" 
        className={`bg-white/20 hover:bg-white/30 text-white rounded-full text-sm ${activeSession === -1 ? 'ring-2 ring-white' : ''}`}
        onClick={() => onSessionClick(-1)}
      >
        Quiz
      </Button>
      <Button 
        variant="secondary" 
        className={`bg-white/20 hover:bg-white/30 text-white rounded-full text-sm px-3 ${activeSession === -2 ? 'ring-2 ring-white' : ''}`}
        onClick={() => onSessionClick(-2)}
      >
        A+
      </Button>
    </div>
  );
};

export default SessionTabs;
