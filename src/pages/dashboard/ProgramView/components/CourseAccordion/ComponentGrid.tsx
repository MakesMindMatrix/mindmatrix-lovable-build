
import React from "react";
import { cn } from "@/lib/utils";
import { CourseSession } from "./types";

interface ComponentGridProps {
  session: CourseSession;
  handleComponentClick: (sessionId: number, componentId: string) => void;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({
  session,
  handleComponentClick,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {session.components.map((component, index) => {
        // Highlight the tutorial component for session 1
        const isHighlighted = session.id === 1 && component.id === "tutorial";
        const Icon = component.icon;
        
        return (
          <div 
            key={index}
            className={cn(
              "py-2 px-2 cursor-pointer hover:bg-blue-300/40 rounded-md transition-colors flex items-center gap-2",
              isHighlighted ? "bg-blue-500 text-white" : "text-blue-700 bg-blue-100/40"
            )}
            onClick={() => handleComponentClick(session.id, component.id)}
          >
            <Icon className="h-4 w-4" />
            <span className="text-xs font-medium truncate">
              {component.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentGrid;
