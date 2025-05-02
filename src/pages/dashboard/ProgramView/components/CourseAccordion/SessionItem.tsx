
import React, { useState } from "react";
import { ArrowLeft, Book, FileText } from "lucide-react";
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
  const [expandedReferences, setExpandedReferences] = useState<Record<string, boolean>>({});
  
  const toggleReferenceSection = (referenceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedReferences(prev => ({
      ...prev,
      [referenceId]: !prev[referenceId]
    }));
  };
  
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
            <div key={component.id}>
              {component.type === "main" && !component.subComponents && (
                <div 
                  className={cn(
                    "flex items-center cursor-pointer hover:bg-white/5 rounded px-1 py-0.5",
                    currentComponent === component.id && "bg-white/10"
                  )}
                  onClick={() => handleComponentClick(session.id, component.id)}
                >
                  {component.id.includes('learning') ? (
                    <Book className={`h-3 w-3 mr-1.5 text-blue-400`} />
                  ) : component.id.includes('tutorial') ? (
                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 bg-red-400`}></div>
                  ) : (
                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 bg-blue-400`}></div>
                  )}
                  <span className={cn(
                    "text-xs",
                    currentComponent === component.id ? "text-white font-medium" : "text-white/70"
                  )}>
                    {component.title}
                  </span>
                </div>
              )}
              
              {component.type === "main" && component.subComponents && (
                <div key={component.id}>
                  <div 
                    className="flex items-center justify-between cursor-pointer hover:bg-white/5 rounded px-1 py-0.5"
                    onClick={(e) => toggleReferenceSection(component.id, e)}
                  >
                    <div className="flex items-center">
                      <FileText className="h-3 w-3 mr-1.5 text-green-400" />
                      <span className="text-xs text-white/70">{component.title}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`h-4 w-4 p-0 rounded-full bg-white/10 ${expandedReferences[component.id] ? 'rotate-180' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReferenceSection(component.id, e);
                      }}
                    >
                      <ArrowLeft className="h-2 w-2 text-white rotate-90" />
                    </Button>
                  </div>
                  
                  {expandedReferences[component.id] && component.subComponents && (
                    <div className="pl-4 mt-0.5 space-y-1">
                      {component.subComponents.map((subComponent) => (
                        <div 
                          key={subComponent.id}
                          className={cn(
                            "flex items-center cursor-pointer hover:bg-white/5 rounded px-1 py-0.5",
                            currentComponent === subComponent.id && "bg-white/10"
                          )}
                          onClick={() => handleComponentClick(session.id, subComponent.id)}
                        >
                          <div className="w-1 h-1 rounded-full mr-1.5 bg-amber-400"></div>
                          <span className={cn(
                            "text-xs",
                            currentComponent === subComponent.id ? "text-white font-medium" : "text-white/60"
                          )}>
                            {subComponent.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionItem;
