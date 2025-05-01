
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Desktop from "@/components/dashboard/day1/Desktop";
import VideoPlayer from "./components/VideoPlayer";
import ChatBox from "./components/ChatBox";
import CourseAccordion from "./components/CourseAccordion";
import CodeLabPanel from "./components/CodeLabPanel";
import { toast } from "sonner";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  const [isCourseExpanded, setIsCourseExpanded] = useState(false); // Set to false by default
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

  const handleComponentClick = (sessionId: number, componentId: string) => {
    // Handle component clicks with improved navigation
    const componentMap: Record<string, string> = {
      "learning": "Learning Module",
      "preread": "Pre-session Reference", 
      "tutorial": "Live Tutorial",
      "tasks": "Task",
      "assessment": "Assessment"
    };
    
    const componentName = componentMap[componentId] || componentId;
    toast.info(`Opening ${componentName} from Session ${sessionId}`);
    
    if (componentId === "tutorial") {
      // Already on tutorial page, could play the video
      setIsPlaying(true);
    } else if (componentId === "tasks") {
      // Switch to labs tab for tasks
      setActiveTab("labs");
    } else if (componentId === "assessment") {
      // Switch to assessment tab
      setActiveTab("assessment");
    } else if (componentId === "learning") {
      // Navigate to learning module page
      navigate("/program-course-LearningModule");
    } else if (componentId === "preread") {
      // Switch to resources tab for learning materials
      setActiveTab("resources");
    }
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-80px)] bg-white">
        <div className="p-3 w-full h-full flex flex-col">
          {/* Main content area */}
          <div className="flex flex-1 gap-4 h-full">
            {/* Left Section - reduced from 55% to 45% */}
            <div className="w-[45%] flex flex-col gap-4 relative">
              {/* Back button positioned in top left */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-3 left-3 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              {/* Using GradientBackground instead of light blue glass */}
              <div className="ml-16 mt-3 flex flex-col h-full overflow-hidden rounded-xl">
                <GradientBackground className="h-full w-full rounded-xl">
                  {/* Content Container with adjusted positioning */}
                  <div className="flex flex-col h-full p-4 relative z-10">
                    {/* Video Section with reduced height (40% of container) */}
                    <div className="h-[40%] w-full">
                      <VideoPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                    </div>
                    
                    {/* Chat Section */}
                    <div className="flex-1 mt-4">
                      <ChatBox />
                    </div>
                  </div>
                </GradientBackground>
              </div>
            </div>
            
            {/* Right Section - expanded from 45% to 55% */}
            <div className="w-[55%] flex flex-col gap-4 relative">
              {/* Course Accordion - Fixed position for overlay */}
              <div className="absolute top-0 right-0 z-20">
                <CourseAccordion 
                  isCourseExpanded={isCourseExpanded}
                  toggleCourseCard={toggleCourseCard}
                  currentSession={currentSession}
                  toggleSession={toggleSession}
                  useGlassLayout={true}
                  onComponentClick={handleComponentClick}
                  currentComponent="tutorial"
                />
              </div>
              
              {/* Lab Navigation Card - Added top margin to create space */}
              <div className="mt-16 w-full h-[calc(100%-16px)]">
                <CodeLabPanel 
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                  codeLanguage={codeLanguage}
                  setCodeLanguage={setCodeLanguage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
