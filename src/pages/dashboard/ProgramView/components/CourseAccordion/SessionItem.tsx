
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionItemProps } from "./types";
import { cn } from "@/lib/utils";

const SessionItem: React.FC<SessionItemProps> = ({
  session,
  expandedSessions,
  toggleExpandSession,
  handleComponentClick,
  currentComponent
}) => {
  const isExpanded = expandedSessions[session.id];
  
  return (
    <div className="bg-[#1E1E1E] p-2 rounded-lg">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => toggleExpandSession(session.id)}
      >
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 text-xs text-white">
            {session.id}
          </div>
          <span className="text-white text-sm">{session.title}</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`h-5 w-5 p-0.5 rounded-full bg-white/10 ${isExpanded ? 'rotate-180' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleExpandSession(session.id);
          }}
        >
          <ArrowLeft className="h-3 w-3 text-white rotate-90" />
        </Button>
      </div>
      
      {isExpanded && (
        <div className="pl-7 mt-1.5 space-y-1.5">
          {session.components.map((component) => (
            <div 
              key={component.id}
              className={cn(
                "flex items-center cursor-pointer hover:bg-white/5 rounded px-1 py-0.5",
                currentComponent === component.id && "bg-white/10"
              )}
              onClick={() => handleComponentClick(session.id, component.id)}
            >
              <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${component.id === 'tutorial' ? 'bg-red-400' : 'bg-blue-400'}`}></div>
              <span className={cn(
                "text-xs",
                currentComponent === component.id ? "text-white font-medium" : "text-white/70"
              )}>
                {component.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionItem;
