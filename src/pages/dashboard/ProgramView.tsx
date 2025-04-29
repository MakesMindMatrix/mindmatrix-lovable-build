
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import ProgramDetail from "@/components/dashboard/program-view/ProgramDetail";
import CourseList from "@/components/dashboard/program-view/CourseList";
import ResourcePanel from "@/components/dashboard/program-view/ResourcePanel";

const ProgramView = () => {
  return (
    <Desktop activeTab="programs">
      <div className="flex w-full h-[calc(100vh-72px)] p-0">
        {/* Program details panel - left section */}
        <div className="w-[28%] px-4 pt-4">
          <ProgramDetail />
        </div>
        
        {/* Course list - middle section */}
        <div className="w-[44%] px-4 pt-4 bg-gradient-to-r from-blue-400/80 to-blue-600/80">
          <CourseList />
        </div>
        
        {/* Resource panel - right section */}
        <div className="w-[28%] px-4 pt-4">
          <ResourcePanel />
        </div>
      </div>
    </Desktop>
  );
};

export default ProgramView;
