
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";

// Import components
import ProgramSidebar from "./components/ProgramSidebar";
import VideoSection from "./components/VideoSection";
import LabSection from "./components/LabSection";
import ChatSidebar from "./components/ChatSidebar";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  
  const handleBackClick = () => {
    navigate(-1);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-4 w-full h-full flex flex-col">
            {/* Back button and title */}
            <div className="flex items-center mb-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl text-white font-medium">Live Tutorial</h1>
            </div>
            
            {/* Main content - 3-column layout with reduced height */}
            <div className="flex flex-1 gap-4 h-[calc(100%-48px)] pb-4">
              {/* Left sidebar - Program info & Sessions */}
              <ProgramSidebar />
              
              {/* Middle section - Video and Lab */}
              <div className="flex-1 flex flex-col gap-4">
                <VideoSection />
                <LabSection 
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                  codeLanguage={codeLanguage}
                  setCodeLanguage={setCodeLanguage}
                />
              </div>
              
              {/* Right sidebar - Chat */}
              <ChatSidebar />
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
