
import React from "react";
import { ChevronDown, ChevronUp, Book, FileText, Video, ListTodo, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface CourseAccordionProps {
  isCourseExpanded: boolean;
  toggleCourseCard: () => void;
  currentSession: number;
  toggleSession: (sessionId: number) => void;
  useGlassLayout?: boolean;
  onComponentClick?: (sessionId: number, component: string) => void;
}

const CourseAccordion: React.FC<CourseAccordionProps> = ({
  isCourseExpanded,
  toggleCourseCard,
  currentSession,
  toggleSession,
  useGlassLayout = false,
  onComponentClick,
}) => {
  // Course sessions data
  const sessions = [
    {
      id: 1,
      title: "Introduction to Electric Vehicles",
      components: [
        { id: "learning", title: "Learning Module", icon: Book },
        { id: "preread", title: "Pre-read Doc", icon: FileText },
        { id: "tutorial", title: "Tutorial", icon: Video },
        { id: "materials", title: "Post Session Materials", icon: FileText },
        { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
        { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
      ]
    },
    {
      id: 2,
      title: "EV Battery Technology",
      components: [
        { id: "learning", title: "Learning Module", icon: Book },
        { id: "preread", title: "Pre-read Doc", icon: FileText },
        { id: "tutorial", title: "Tutorial", icon: Video },
        { id: "materials", title: "Post Session Materials", icon: FileText },
        { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
        { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
      ]
    },
    {
      id: 3,
      title: "EV Motors and Drivetrains",
      components: [
        { id: "learning", title: "Learning Module", icon: Book },
        { id: "preread", title: "Pre-read Doc", icon: FileText },
        { id: "tutorial", title: "Tutorial", icon: Video },
        { id: "materials", title: "Post Session Materials", icon: FileText },
        { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
        { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
      ]
    },
  ];

  const handleComponentClick = (sessionId: number, componentId: string) => {
    if (onComponentClick) {
      onComponentClick(sessionId, componentId);
    }
  };

  return (
    <Collapsible 
      open={isCourseExpanded}
      className={cn(
        "fixed right-0 mr-4 z-20 w-80", // Fixed width, aligned to right
        "border-none shadow-lg overflow-hidden",
        useGlassLayout ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-[#2E3A54]"
      )}
    >
      <CollapsibleTrigger
        asChild
        onClick={toggleCourseCard}
        className="w-full cursor-pointer"
      >
        <div className={cn(
          "flex items-center justify-between p-4 transition-all",
          useGlassLayout ? "bg-white/5 backdrop-blur-md border-b border-white/10" : "bg-[#1E293B]"
        )}>
          <div>
            <p className="text-white/60 text-sm">Current Course</p>
            <h3 className="text-white text-sm">Introduction to Electric Vehicles</h3>
          </div>
          <div className="flex items-center">
            {isCourseExpanded ? (
              <ChevronUp className="h-5 w-5 text-white/60" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white/60" />
            )}
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <CardContent className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
          {sessions.map((session) => (
            <div key={session.id} className="space-y-2">
              <button
                className={cn(
                  "w-full text-left p-3 rounded-lg transition-all text-sm",
                  currentSession === session.id 
                    ? useGlassLayout 
                      ? "bg-green-500/30 backdrop-blur-md border border-green-500/30 text-white" 
                      : "bg-[#4B6291] text-white" 
                    : useGlassLayout 
                      ? "bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10"
                      : "bg-[#3A4661] text-white/80 hover:bg-[#455271]"
                )}
                onClick={() => toggleSession(session.id)}
              >
                <p className="font-medium">Session {session.id}: {session.title}</p>
              </button>
              
              {currentSession === session.id && (
                <div className="pl-4 space-y-1.5">
                  {session.components.map((component, index) => {
                    const IconComponent = component.icon;
                    // Highlight the tutorial component for session 1
                    const isHighlighted = session.id === 1 && component.id === "tutorial";
                    
                    return (
                      <button 
                        key={index} 
                        className={cn(
                          "text-xs py-2 px-3 rounded flex items-center gap-2 w-full text-left",
                          isHighlighted 
                            ? "bg-blue-500/40 text-white font-medium" 
                            : useGlassLayout 
                              ? "text-white/90 bg-white/5 backdrop-blur-sm hover:bg-white/10" 
                              : "text-white/90 bg-[#2E3A54] hover:bg-[#3A4661]"
                        )}
                        onClick={() => handleComponentClick(session.id, component.id)}
                      >
                        <IconComponent className="h-3.5 w-3.5" />
                        <span>{component.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CourseAccordion;
