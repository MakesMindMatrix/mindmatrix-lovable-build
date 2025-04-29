
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { useLocation } from "react-router-dom";
import { EnrolledProgramCard } from "@/widgets/program_cards_design/program_enrolled_design";
import { UnenrolledProgramCard } from "@/widgets/program_cards_design/program_unenrolled_design";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { EnrolledProgramCard as EnrolledProgramCardType, UnenrolledProgramCard as UnenrolledProgramCardType } from "@/widgets/program_cards_design/types";

const ProgramView = () => {
  const location = useLocation();
  const program = location.state?.program;
  const isEnrolled = location.state?.isEnrolled;
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full">
            <div className="flex flex-row h-full">
              {/* Left side - Program Card */}
              <div className="w-[30%] mr-4">
                {program && (
                  isEnrolled ? (
                    <EnrolledProgramCard program={program as EnrolledProgramCardType} />
                  ) : (
                    <UnenrolledProgramCard program={program as UnenrolledProgramCardType} />
                  )
                )}
                {!program && (
                  <div className="text-white p-4 bg-white/10 rounded-xl border border-white/20">
                    No program selected. Please go back to Programs and select a program.
                  </div>
                )}
              </div>
              
              {/* Middle and right side - Content to be added later */}
              <div className="w-[70%] flex-1">
                {/* Placeholder for future content */}
                <div className="text-white bg-white/10 h-full rounded-xl border border-white/20 p-6">
                  <h2 className="text-xl font-semibold mb-4">Program Content</h2>
                  <p>The program content and details will be displayed here.</p>
                </div>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramView;
