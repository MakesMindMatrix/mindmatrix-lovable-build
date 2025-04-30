
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import Desktop from "@/components/dashboard/day1/Desktop";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";

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
            
            <div className="flex flex-col items-center justify-center h-[calc(100%-64px)] text-white">
              <h2 className="text-2xl mb-4">Live Tutorial Content</h2>
              <p className="text-lg text-white/80">
                This is where the live tutorial content will be displayed.
              </p>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
