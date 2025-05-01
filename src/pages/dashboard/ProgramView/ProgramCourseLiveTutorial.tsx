
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";
import VideoPlayer from "./components/VideoPlayer";
import ChatBox from "./components/ChatBox";
import CourseAccordion from "./components/CourseAccordion";
import CodeLabPanel from "./components/CodeLabPanel";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  const [isCourseExpanded, setIsCourseExpanded] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);
  
  const handleBackClick = () => {
    // Navigate to the program view (course card)
    navigate("/dashboard-programView");
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const toggleCourseCard = () => {
    setIsCourseExpanded(!isCourseExpanded);
  };
  
  const toggleSession = (sessionId: number) => {
    setCurrentSession(currentSession === sessionId ? 0 : sessionId);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-80px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-3 w-full h-full flex flex-col">
            {/* Main content area */}
            <div className="flex flex-1 gap-4 h-full">
              {/* Left Section - reduced to 55% from 65% */}
              <div className="w-[55%] flex flex-col gap-4 relative">
                {/* Back button positioned in top left */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 left-3 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10"
                  onClick={handleBackClick}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                
                {/* Content Container with adjusted positioning */}
                <div className="ml-16 mt-3 flex flex-col h-full">
                  {/* Video Section with reduced width (65% of container) */}
                  <div className="h-[40%] w-[65%]">
                    <VideoPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                  </div>
                  
                  {/* Chat Section */}
                  <div className="flex-1 mt-4">
                    <ChatBox />
                  </div>
                </div>
              </div>
              
              {/* Right Section - increased to 45% from 35% */}
              <div className="w-[45%] flex flex-col gap-4">
                {/* Course name card with collapsible */}
                <CourseAccordion 
                  isCourseExpanded={isCourseExpanded}
                  toggleCourseCard={toggleCourseCard}
                  currentSession={currentSession}
                  toggleSession={toggleSession}
                />
                
                {/* Lab Navigation Card */}
                <CodeLabPanel 
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                  codeLanguage={codeLanguage}
                  setCodeLanguage={setCodeLanguage}
                />
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
