
import React from "react";
import { useLocation } from "react-router-dom";
import Desktop from "@/components/dashboard/day1/Desktop";
import { EnrolledProgramCard } from "@/widgets/program_cards_design/program_enrolled_design";
import { UnenrolledProgramCard } from "@/widgets/program_cards_design/program_unenrolled_design";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const ProgramView = () => {
  const location = useLocation();
  const { program, isEnrolled } = location.state || {};

  if (!program) {
    return (
      <Desktop activeTab="programs" simplified>
        <div className="flex items-center justify-center h-[calc(100vh-72px)]">
          <div className="text-xl text-gray-400">No program selected. Please select a program from the programs page.</div>
        </div>
      </Desktop>
    );
  }

  return (
    <Desktop activeTab="programs" simplified>
      <div className="flex w-full h-[calc(100vh-72px)] p-6 gap-6">
        {/* Left Section - Selected Program Card */}
        <div className="w-[30%]">
          <ScrollArea className="h-full">
            <div className="pr-4">
              {isEnrolled ? (
                <EnrolledProgramCard program={program} />
              ) : (
                <UnenrolledProgramCard program={program} />
              )}
            </div>
          </ScrollArea>
        </div>
        
        {/* Middle Section - Program Content */}
        <div className="w-[45%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
          <ScrollArea className="h-full p-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Program Content</h2>
            <div className="space-y-4">
              <Card className="p-4 bg-white/10 text-white border-none">
                <h3 className="text-xl mb-2">About This Program</h3>
                <p>{program.program_description}</p>
              </Card>
              
              {/* Placeholder for course content that will be implemented later */}
              <Card className="p-4 bg-white/10 text-white border-none">
                <h3 className="text-xl mb-2">Courses</h3>
                <p>Course content will be displayed here</p>
              </Card>
            </div>
          </ScrollArea>
        </div>
        
        {/* Right Section - Resources */}
        <div className="w-[25%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
          <ScrollArea className="h-full p-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Resources</h2>
            <div className="space-y-4">
              <Card className="p-4 bg-white/10 text-white border-none">
                <h3 className="text-lg mb-2">Program Materials</h3>
                <p>Access study materials, assignments, and additional resources here.</p>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Desktop>
  );
};

export default ProgramView;
