
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import Desktop from "@/components/dashboard/day1/Desktop";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import ChatOption from "./ChatOption";
import CourseHeader from "./CourseHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };
  
  // Scroll to bottom when component mounts
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
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
            
            <div className="flex flex-col mx-auto w-full max-w-md h-[calc(100%-130px)] relative">
              {/* Mentor notification with glass effect - fixed at top */}
              <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-lg p-4 mb-6 shadow-lg w-full">
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
              
              {/* Scrollable conversation area - this is the key part */}
              <div className="flex-1 overflow-hidden relative mb-16">
                <ScrollArea className="h-full pr-2">
                  <div className="flex flex-col items-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="text-white text-center text-xl mb-12 w-full">
                      Hey there! 👋 Your mentor will be here shortly. In the meantime, let's do a quick recap on yesterday's topic: Prompt Engineering.
                    </p>
                  
                    {/* Selection options */}
                    <div className="mt-4 w-full">
                      <p className="text-white/80 flex items-center mb-4">
                        <span className="mr-2">🔄</span>
                        Select to continue conversation
                      </p>
                      
                      <div className="space-y-4">
                        <ChatOption text="Yes, let's go!" />
                        <ChatOption text="Can we do a quick quiz instead?" />
                        <ChatOption text="Wait, what's Prompt Engineering again?" />
                      </div>
                    </div>
                    
                    {/* Extra space at bottom to ensure content is scrollable */}
                    <div ref={scrollRef} className="h-10"></div>
                  </div>
                </ScrollArea>
              </div>
              
              {/* Type something input - fixed at bottom */}
              <div className="absolute bottom-0 left-0 right-0 w-full">
                <div className="relative bg-white/20 backdrop-blur-sm rounded-lg">
                  <input 
                    type="text" 
                    placeholder="Type something..."
                    className="w-full bg-transparent text-white placeholder-white/60 rounded-lg py-3 px-4 pr-12"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
