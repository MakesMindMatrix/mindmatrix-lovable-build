
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CourseAccordionProps {
  isCourseExpanded: boolean;
  toggleCourseCard: () => void;
  currentSession: number;
  toggleSession: (sessionId: number) => void;
}

const CourseAccordion: React.FC<CourseAccordionProps> = ({
  isCourseExpanded,
  toggleCourseCard,
  currentSession,
  toggleSession
}) => {
  return (
    <div className="relative z-20">
      <Collapsible 
        open={isCourseExpanded} 
        onOpenChange={toggleCourseCard}
        className="w-full"
      >
        <CollapsibleTrigger asChild>
          <Button 
            className="w-full py-3 px-4 bg-[#6388D7] rounded-lg text-white hover:bg-[#5679c8] justify-between h-auto" 
          >
            <span className="text-base font-medium">Course 1</span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isCourseExpanded ? "transform rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="bg-[#6388D7] mt-1 rounded-lg p-4 absolute w-full shadow-lg z-10">
          <div className="text-white mb-4">
            <p className="text-sm font-semibold mb-1">Energy Management in Electric Vehicles</p>
            <p className="text-xs text-white/70">Introduction to Electric Vehicles</p>
          </div>
          
          {/* Sessions List */}
          <div className="space-y-3">
            {/* Session 1 */}
            <div className="bg-[#5679c8] rounded-lg p-2">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSession(1)}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <span className="text-xs text-white">1</span>
                  </div>
                  <span className="text-white text-sm">Session 1</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${currentSession === 1 ? "transform rotate-180" : ""}`} />
              </div>
              
              {currentSession === 1 && (
                <div className="pl-8 mt-2 space-y-1.5">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Learning Module</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Pre-session Reference</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                    <span className="text-white font-medium text-xs">Live Tutorial</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Post-session Reference</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Task 1</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Session 2 */}
            <div className="bg-[#5679c8] rounded-lg p-2">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSession(2)}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <span className="text-xs text-white">2</span>
                  </div>
                  <span className="text-white text-sm">Session 2</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${currentSession === 2 ? "transform rotate-180" : ""}`} />
              </div>
              
              {currentSession === 2 && (
                <div className="pl-8 mt-2 space-y-1.5">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Learning Module</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Live Tutorial</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Task 1</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Session 3 */}
            <div className="bg-[#5679c8] rounded-lg p-2">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSession(3)}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <span className="text-xs text-white">3</span>
                  </div>
                  <span className="text-white text-sm">Session 3</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${currentSession === 3 ? "transform rotate-180" : ""}`} />
              </div>
              
              {currentSession === 3 && (
                <div className="pl-8 mt-2 space-y-1.5">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Learning Module</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-xs">Pre-session Reference</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CourseAccordion;
