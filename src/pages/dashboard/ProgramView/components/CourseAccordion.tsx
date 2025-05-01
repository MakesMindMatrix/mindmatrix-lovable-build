
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Book, FileText, Video, ListTodo, ClipboardCheck } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    {
      id: 4,
      title: "EV Charging Systems",
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
      id: 5,
      title: "EV Market & Future Trends",
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
        "fixed right-0 mr-4 z-20 w-80", // Fixed width aligned to right
        "border-none shadow-lg overflow-hidden rounded-xl", // Added rounded corners
        useGlassLayout ? "bg-blue-500/10 backdrop-blur-md" : "bg-[#2E3A54]" // More glassy background
      )}
    >
      <CollapsibleTrigger
        asChild
        onClick={toggleCourseCard}
        className="w-full cursor-pointer"
      >
        <div className={cn(
          "flex items-center justify-between p-4 transition-all",
          useGlassLayout ? "bg-blue-500/30 backdrop-blur-lg text-white rounded-t-xl" : "bg-[#1E293B]" // More glassy header
        )}>
          <div className="flex items-center space-x-3">
            <div className="text-white w-5 h-5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.2C3 4.4327 4.4327 3 6.2 3H10.5C12.2673 3 13.7 4.4327 13.7 6.2V10.5C13.7 12.2673 12.2673 13.7 10.5 13.7H6.2C4.4327 13.7 3 12.2673 3 10.5V6.2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10.3 13.7C10.3 11.9327 11.7327 10.5 13.5 10.5H17.8C19.5673 10.5 21 11.9327 21 13.7V18C21 19.7673 19.5673 21.2 17.8 21.2H13.5C11.7327 21.2 10.3 19.7673 10.3 18V13.7Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M13.7 10.3C11.9327 10.3 10.5 8.8673 10.5 7.1V7.1C10.5 5.3327 11.9327 3.9 13.7 3.9H18C19.7673 3.9 21.2 5.3327 21.2 7.1V7.1C21.2 8.8673 19.7673 10.3 18 10.3H13.7Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 13.5C3 11.7327 4.4327 10.3 6.2 10.3H6.2C7.9673 10.3 9.4 11.7327 9.4 13.5V17.8C9.4 19.5673 7.9673 21 6.2 21H6.2C4.4327 21 3 19.5673 3 17.8V13.5Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-white text-base font-medium">Course Title</h3> {/* Reduced font size */}
          </div>
          <div>
            {isCourseExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="p-0 space-y-1 max-h-[70vh] overflow-y-auto bg-blue-100/40 backdrop-blur-lg rounded-b-xl"> {/* Improved glassy effect */}
          {sessions.map((session) => (
            <div key={session.id} className="mb-1 last:mb-0 bg-blue-200/40 backdrop-blur-lg rounded-md mx-1 overflow-hidden"> {/* Improved glassy effect for session cards */}
              <div 
                className={`flex items-center justify-between p-3 cursor-pointer`}
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
                  <h4 className="text-blue-700 text-base font-medium">Session {session.id}</h4> {/* Kept font size consistent with course title */}
                </div>
                <div>
                  {expandedSessions[session.id] ? (
                    <ChevronUp className="h-5 w-5 text-blue-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-700" />
                  )}
                </div>
              </div>
              
              {expandedSessions[session.id] && (
                <div className="px-2 pb-2">
                  {session.components.map((component, index) => {
                    // Highlight the tutorial component for session 1
                    const isHighlighted = session.id === 1 && component.id === "tutorial";
                    
                    return (
                      <div 
                        key={index}
                        className={cn(
                          "py-2 px-3 text-blue-700 cursor-pointer hover:bg-blue-300/40 rounded-sm transition-colors text-sm", // Smaller font size for components
                          isHighlighted && "bg-blue-500 text-white"
                        )}
                        onClick={() => handleComponentClick(session.id, component.id)}
                      >
                        {component.title}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CourseAccordion;
