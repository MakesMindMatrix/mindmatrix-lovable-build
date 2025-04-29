
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import Desktop from "@/components/dashboard/day1/Desktop";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { EnrolledProgramCard } from "@/widgets/program_cards_design/program_enrolled_design";
import { UnenrolledProgramCard } from "@/widgets/program_cards_design/program_unenrolled_design";
import { 
  EnrolledProgramCard as EnrolledProgramCardType, 
  UnenrolledProgramCard as UnenrolledProgramCardType 
} from "@/widgets/program_cards_design/types";

import CourseCard from "@/components/dashboard/programs/CourseCard";
import MentorProfile from "@/components/dashboard/programs/MentorProfile";
import HelpSection from "@/components/dashboard/programs/HelpSection";
import TabNavigation from "@/components/dashboard/programs/TabNavigation";
import { mentor, courses } from "@/components/dashboard/programs/mockData";

const ProgramView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const program = location.state?.program;
  const isEnrolled = location.state?.isEnrolled;
  const [activeTab, setActiveTab] = useState("courses"); // 'courses' or 'mentor'
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);
  
  const handleBackClick = () => {
    navigate("/dashboard-programs");
  };
  
  const handleViewCourse = (courseId: number) => {
    setExpandedCourseId(courseId === expandedCourseId ? null : courseId);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full">
            {/* Back button and title */}
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl text-white font-medium">Currently Viewing</h1>
            </div>
            
            <div className="flex flex-row h-[calc(100%-64px)]">
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
              
              {/* Middle - Content with scroll area */}
              <div className="w-[45%] flex flex-col h-full">
                {/* Tab navigation stays fixed at the top */}
                <TabNavigation 
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
                
                {/* Scrollable content area */}
                <div className="h-[calc(100%-46px)] overflow-hidden">
                  <ScrollArea className="h-full">
                    <div className="pr-4">
                      {activeTab === 'mentor' ? (
                        // Mentor profile content
                        <MentorProfile mentor={mentor} />
                      ) : (
                        // Course cards - scrollable
                        <div className="space-y-4 pb-4">
                          {courses.map((course) => (
                            <div key={course.id}>
                              <CourseCard
                                course={course}
                                isExpanded={expandedCourseId === course.id}
                                onViewCourse={handleViewCourse}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Right side - Help section */}
              <div className="w-[25%] ml-4">
                <HelpSection />
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramView;
