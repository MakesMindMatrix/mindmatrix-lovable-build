
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";
import Desktop121 from "./Desktop121";

const CourseSessionLive = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard-programView");
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
              <h1 className="text-xl text-white font-medium">Live Tutorial Session</h1>
            </div>
            
            {/* Main content - the Desktop121 component with all the chat interface */}
            <Desktop121 />
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default CourseSessionLive;
