
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Desktop from "@/components/dashboard/day1/Desktop";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import CourseSidebar from "@/components/dashboard/live-tutorial/CourseSidebar";
import VideoSection from "@/components/dashboard/live-tutorial/VideoSection";
import TabsNavigation from "@/components/dashboard/live-tutorial/TabsNavigation";
import CodeEditor from "@/components/dashboard/live-tutorial/CodeEditor";
import ChatSidebar from "@/components/dashboard/live-tutorial/ChatSidebar";

const LiveTutorial: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Get data passed from course card
  const courseData = location.state?.courseData || {
    program: "Energy Management in Electric Vehicles",
    course: "Introduction to Electric Vehicles",
    session: "Session 1",
    title: "Live Class-Web Development Fundamentals"
  };
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="flex h-full">
            {/* Left sidebar */}
            <CourseSidebar 
              programName={courseData.program}
              courseName={courseData.course}
              onBack={handleBack}
            />
            
            {/* Main content */}
            <div className="flex-1 flex flex-col">
              {/* Video section */}
              <VideoSection title={courseData.title} />
              
              {/* Tab navigation */}
              <TabsNavigation />
              
              {/* Code editor */}
              <CodeEditor />
            </div>
            
            {/* Right sidebar */}
            <ChatSidebar />
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default LiveTutorial;
