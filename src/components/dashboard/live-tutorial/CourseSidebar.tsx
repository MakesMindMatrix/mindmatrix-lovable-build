
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SessionAccordion from "./SessionAccordion";

interface CourseSidebarProps {
  programName: string;
  courseName: string;
  onBack: () => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ programName, courseName, onBack }) => {
  return (
    <div className="w-[300px] bg-blue-600/90 pt-6 flex flex-col">
      <div className="px-6 pb-6">
        <h3 className="text-white text-sm font-medium mb-1">Program:</h3>
        <p className="text-white text-base">{programName}</p>
        
        <h3 className="text-white text-sm font-medium mt-4 mb-1">Course 1:</h3>
        <p className="text-white text-base">{courseName}</p>
      </div>
      
      {/* Session accordions */}
      <div className="space-y-3 px-3 mt-2">
        <SessionAccordion title="Session 1" isActive={true} />
        <SessionAccordion title="Session 2" isActive={false} />
        <SessionAccordion title="Session 3" isActive={false} />
      </div>
      
      <div className="mt-auto flex justify-center pb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/10 hover:bg-white/20 p-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default CourseSidebar;
