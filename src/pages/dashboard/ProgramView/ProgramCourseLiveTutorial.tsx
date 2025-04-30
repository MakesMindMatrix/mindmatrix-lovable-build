
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";
import { toast } from "@/hooks/use-toast";

// Imported components
import WaitingView from "./components/WaitingView";
import LabView from "./components/LabView";
import MentorLiveDialog from "./components/MentorLiveDialog";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [mentorLive, setMentorLive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showLabView, setShowLabView] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Automatically scroll to bottom when new content is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  
  useEffect(() => {
    // After 15 seconds, set mentor as live and show popup
    const timer = setTimeout(() => {
      setMentorLive(true);
      setShowPopup(true);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };
  
  const handlePopupConfirm = () => {
    setShowPopup(false);
    setShowLabView(true);
    toast({
      title: "Joined Live Session",
      description: "You've successfully joined the mentor's live session.",
    });
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full flex flex-col">
            {/* Back button and title - fixed at top */}
            <div className="flex items-center mb-6">
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
            
            {!showLabView ? (
              // Original view (waiting for mentor)
              <WaitingView mentorLive={mentorLive} messagesEndRef={messagesEndRef} />
            ) : (
              // Lab View (after mentor is live and popup is confirmed)
              <LabView 
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                codeLanguage={codeLanguage}
                setCodeLanguage={setCodeLanguage}
              />
            )}
          </div>
        </GradientBackground>
        
        {/* Popup when mentor is live */}
        <MentorLiveDialog 
          open={showPopup} 
          onOpenChange={setShowPopup} 
          onConfirm={handlePopupConfirm}
        />
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
