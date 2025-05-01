
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
              {/* Left Section */}
              <div className="w-[65%] flex flex-col gap-4">
                {/* Back button positioned in top left */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-5 left-5 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10"
                  onClick={handleBackClick}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                
                {/* Video Section with reduced aspect ratio */}
                <div className="mt-12">
                  <VideoPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                </div>
                
                {/* Chat Section */}
                <ChatBox />
              </div>
              
              {/* Right Section */}
              <div className="w-[35%] flex flex-col gap-4">
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
