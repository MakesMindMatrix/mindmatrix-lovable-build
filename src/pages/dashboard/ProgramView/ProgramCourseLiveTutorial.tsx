
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Desktop from "@/components/dashboard/day1/Desktop";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import ChatOption from "./ChatOption";
import CourseHeader from "./CourseHeader";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
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
              <h1 className="text-xl text-white font-medium">Live Tutorial</h1>
            </div>
            
            <div className="flex flex-col max-w-4xl mx-auto h-[calc(100%-64px)]">
              {/* Mentor notification with glass effect */}
              <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-lg p-4 mb-8 shadow-lg">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                    alt="Mentor" 
                    className="w-10 h-10 rounded-full mr-4" 
                  />
                  <div>
                    <p className="text-white">Mentor will join in a few minutes. Let's do a quick recap while you wait!</p>
                    <p className="text-white/80 text-sm">Expected to start in 15 minutes...</p>
                  </div>
                </div>
              </div>
              
              {/* Chat avatar and message */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                    alt="Chat avatar" 
                    className="w-12 h-12 rounded-full" 
                  />
                </div>
                <p className="text-white text-center text-xl max-w-2xl">
                  Hey there! 👋 Your mentor will be here shortly. In the meantime, let's do a quick recap on yesterday's topic: Prompt Engineering.
                </p>
              </div>
              
              {/* Selection options */}
              <div className="mt-4">
                <p className="text-white/80 flex items-center mb-4">
                  <span className="mr-2">🔄</span>
                  Select to continue conversation
                </p>
                
                <div className="space-y-0">
                  <ChatOption text="Yes, let's go!" />
                  <ChatOption text="Can we do a quick quiz instead?" />
                  <ChatOption text="Wait, what's Prompt Engineering again?" />
                </div>
              </div>
              
              {/* Type something input */}
              <div className="mt-auto mb-4 relative">
                <input 
                  type="text" 
                  placeholder="Type something..."
                  className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg py-3 px-4 pr-12"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1">
                  <ArrowRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
