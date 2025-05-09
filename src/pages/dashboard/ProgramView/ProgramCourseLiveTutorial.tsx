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
  const [activeTab, setActiveTab] = useState("tutorial"); // Set default tab to tutorial
  const [codeLanguage, setCodeLanguage] = useState("Python");
  const [isCourseExpanded, setIsCourseExpanded] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);
  const [currentVideoId, setCurrentVideoId] = useState("PkZNo7MFNFg"); // Default YouTube video ID
  const [showVideo, setShowVideo] = useState(true); // New state to control video player visibility
  
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
      // Already on tutorial page
    } else if (componentId === "tasks") {
      // Switch to labs tab for tasks
      setActiveTab("labs");
    } else if (componentId === "assessment") {
      // Switch to assessment tab
      setActiveTab("assessment");
    } else if (componentId === "preread" || componentId === "learning") {
      // Switch to resources tab for learning materials
      setActiveTab("resources");
    }
  };
  
  // Handler for video selection from resources tab
  const handleVideoSelect = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsPlaying(true);
    setShowVideo(true); // Show video player when a video is selected
    toast.success("Video loaded successfully");
  };
  
  // Handler to hide video player for non-video resources
  const handleResourceTypeChange = (isVideo: boolean) => {
    setShowVideo(isVideo);
    if (!isVideo) {
      setIsPlaying(false);
    }
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-80px)] bg-white">
        {/* Add gradient background to the entire content area with rounded corners and glass effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-70 p-3">
          <div className="absolute inset-0 bg-linear-to-br from-[#0F56CC]/40 to-[#2A3A80]/30 rounded-[15px] backdrop-blur-sm border border-white/10 shadow-lg"></div>
        </div>
        
        <div className="p-3 w-full h-full flex flex-col relative z-10">
          {/* Main content area */}
          <div className="flex flex-1 gap-4 h-full">
            {/* Left Section - 45% width */}
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
              
              {/* Using GradientBackground with proper structure and faded edges */}
              <div className="ml-16 mt-3 flex flex-col h-full overflow-hidden rounded-xl relative">
                {/* Gradient background with fading effect and glass effect */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-linear-to-br from-[#0F56CC]/60 to-[#2A3A80]/50 rounded-xl backdrop-blur-md border border-white/20 shadow-xl"></div>
                  {/* Fading edges overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                  <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                </div>
                
                {/* Content overlay */}
                <div className="flex flex-col h-full relative z-10">
                  {/* Conditional Video Section */}
                  {showVideo ? (
                    <div className="h-[40%] min-h-[180px] p-4 pb-2">
                      <VideoPlayer 
                        isPlaying={isPlaying} 
                        setIsPlaying={setIsPlaying} 
                        videoId={currentVideoId}
                      />
                    </div>
                  ) : null}
                  
                  {/* Chat Section - dynamic height based on video visibility */}
                  <div className={`${showVideo ? "h-[60%]" : "h-full"} flex flex-col relative transition-all duration-300`}>
                    <ChatBox expanded={!showVideo} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - 55% width */}
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
              
              {/* Lab Navigation Card - Reduced top margin to move it up */}
              <div className="mt-12 w-full h-[calc(100%-12px)]">
                <CodeLabPanel 
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                  codeLanguage={codeLanguage}
                  setCodeLanguage={setCodeLanguage}
                  onVideoSelect={handleVideoSelect}
                  onResourceTypeChange={handleResourceTypeChange}
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
