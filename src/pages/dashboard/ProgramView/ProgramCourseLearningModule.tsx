
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { toast } from "sonner";
import ReadingPanel from "./components/ReadingPanel";
import CourseAccordion from "./components/CourseAccordion";
import ChatBox from "./components/ChatBox";
import CollapsibleProgramSidebar from "@/components/dashboard/ProgramView/components/CollapsibleProgramSidebar";

const ProgramCourseLearningModule = () => {
  const navigate = useNavigate();
  const [isCourseExpanded, setIsCourseExpanded] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);
  const [activeTab, setActiveTab] = useState("read");
  const [documentFormat, setDocumentFormat] = useState("PDF");
  
  const handleBackClick = () => {
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
    // Handle component clicks
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
      navigate("/program-course-LiveTutorial");
    } else if (componentId === "tasks") {
      // Navigate to tasks page
      toast.info("Tasks page is not implemented yet");
    } else if (componentId === "learning") {
      // Already on learning module page
    } else if (componentId === "preread" || componentId === "assessment") {
      // Handle other components
      toast.info(`${componentName} component is not implemented yet`);
    }
  };
  
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Collapsible Sidebar */}
      <CollapsibleProgramSidebar activeTab="learning" />
      
      {/* Main Content */}
      <div className="flex-1 h-screen overflow-hidden">
        <div className="p-3 w-full h-full flex flex-col">
          {/* Main content area */}
          <div className="flex flex-1 gap-4 h-full">
            {/* Left Section - 65% width */}
            <div className="w-[65%] flex flex-col gap-4 relative">
              {/* Back button positioned in top left */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-3 left-3 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              {/* Reading Panel */}
              <div className="ml-16 mt-3 h-full overflow-hidden rounded-xl">
                <ReadingPanel 
                  activeTab={activeTab}
                  handleTabChange={handleTabChange}
                  documentFormat={documentFormat}
                  setDocumentFormat={setDocumentFormat}
                />
              </div>
            </div>
            
            {/* Right Section - 35% width */}
            <div className="w-[35%] flex flex-col gap-4 relative">
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
              
              {/* Chat Section */}
              <div className="mt-16 w-full h-[calc(100%-16px)] overflow-hidden rounded-xl">
                <GradientBackground className="h-full w-full rounded-xl">
                  <div className="p-2 h-full">
                    <ChatBox />
                  </div>
                </GradientBackground>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCourseLearningModule;
