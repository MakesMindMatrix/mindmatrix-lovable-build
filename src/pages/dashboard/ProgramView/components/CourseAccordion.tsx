
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
}

const CourseAccordion: React.FC<CourseAccordionProps> = ({
  isCourseExpanded,
  toggleCourseCard,
  currentSession,
  toggleSession,
  useGlassLayout = false,
}) => {
  // Course sessions data
  const sessions = [
    {
      id: 1,
      title: "Introduction to Electric Vehicles",
      topics: ["Basic Concepts", "History", "Current Market"],
    },
    {
      id: 2,
      title: "EV Battery Technology",
      topics: ["Battery Types", "Charging Systems", "Battery Management"],
    },
    {
      id: 3,
      title: "EV Motors and Drivetrains",
      topics: ["Motor Types", "Power Delivery", "Efficiency"],
    },
  ];

  return (
    <Card className={cn(
      "border-none shadow-lg overflow-hidden", 
      useGlassLayout ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-[#2E3A54]"
    )}>
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
            <h3 className="text-white font-medium">Introduction to Electric Vehicles</h3>
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

      <Collapsible open={isCourseExpanded}>
        <CollapsibleContent>
          <CardContent className="p-4 space-y-3">
            {sessions.map((session) => (
              <div key={session.id} className="space-y-2">
                <button
                  className={cn(
                    "w-full text-left p-3 rounded-lg transition-all",
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
                  <div className="pl-4 space-y-1">
                    {session.topics.map((topic, index) => (
                      <p 
                        key={index} 
                        className={cn(
                          "text-sm py-1.5 px-3 rounded",
                          useGlassLayout 
                            ? "text-white/90 bg-white/5 backdrop-blur-sm" 
                            : "text-white/90 bg-[#2E3A54]"
                        )}
                      >
                        • {topic}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default CourseAccordion;
