
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Desktop from "@/components/dashboard/day1/Desktop";
import ChatBox from "./components/ChatBox";
import CourseAccordion from "./components/CourseAccordion";
import ReadingPanel from "./components/ReadingPanel";
import { toast } from "sonner";
import { BackgroundGradient } from "@/components/database/ScreenEmotionTag/BackgroundGradient";

const ProgramCourseLearningModule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("read");
  const [documentFormat, setDocumentFormat] = useState("PDF");
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
    
    if (componentId === "learning") {
      // Already on learning module page
    } else if (componentId === "tutorial") {
      navigate("/program-course-LiveTutorial");
    } else if (componentId === "tasks") {
      // Switch to labs tab for tasks
      setActiveTab("labs");
    } else if (componentId === "assessment") {
      // Switch to assessment tab
      setActiveTab("assessment");
    } else if (componentId === "preread") {
      // Switch to resources tab for learning materials
      setActiveTab("resources");
    }
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-80px)] bg-white">
        {/* Add gradient background to the entire content area with rounded corners and glass effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-70 p-3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F56CC]/40 to-[#2A3A80]/30 rounded-[15px] backdrop-blur-sm border border-white/10 shadow-lg"></div>
        </div>
        
        <div className="p-3 w-full h-full flex flex-col relative z-10">
          {/* Main content area */}
          <div className="flex flex-1 gap-4 h-full">
            {/* Left Section - Chat Card */}
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
              
              {/* Blue gradient background card for chat with faded edges */}
              <div className="ml-16 mt-3 h-full rounded-xl relative overflow-hidden">
                {/* Gradient background with fading effect and glass effect */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F56CC]/60 to-[#2A3A80]/50 rounded-xl backdrop-blur-md border border-white/20 shadow-xl"></div>
                  {/* Fading edges overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0F56CC]/0 rounded-xl"></div>
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 h-full p-4">
                  <ChatBox />
                </div>
              </div>
            </div>
            
            {/* Right Section */}
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
                  currentComponent="learning"
                />
              </div>
              
              {/* Reading Panel - Reduced top margin to move it up */}
              <div className="mt-12 w-full h-[calc(100%-12px)]">
                <ReadingPanel 
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                  documentFormat={documentFormat}
                  setDocumentFormat={setDocumentFormat}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLearningModule;
