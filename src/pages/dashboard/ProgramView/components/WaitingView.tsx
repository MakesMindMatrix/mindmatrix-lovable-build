
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatOption from "../ChatOption";

interface WaitingViewProps {
  mentorLive: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const WaitingView: React.FC<WaitingViewProps> = ({ mentorLive, messagesEndRef }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      {/* Top notification - floating at the top center */}
      <div className="w-full max-w-2xl mx-auto pt-8">
        <div className={`w-full backdrop-blur-md bg-white/10 border-white/30 border border-dashed rounded-lg p-4 mb-16 shadow-lg`}>
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
              alt="Mentor" 
              className="w-10 h-10 rounded-full mr-4" 
            />
            <div>
              <p className="text-white font-medium">Mentor will join in a few minutes. Let's do a quick recap while you wait!</p>
              <p className="text-white/80 text-sm">Expected to start in 15 minutes...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        {/* Zuno avatar and welcome message - centered vertically */}
        <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-8">
          <Avatar className="w-14 h-14">
            <AvatarImage src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="text-center mb-16">
          <p className="text-white text-xl max-w-md">
            Hey there! 👋 Your mentor will be here shortly. In the meantime, let's do a quick recap on yesterday's topic: Prompt Engineering.
          </p>
        </div>
      </div>
      
      {/* Chat options - positioned near the bottom */}
      <div className="w-full max-w-md mx-auto mb-20">
        <p className="text-white/80 flex items-center mb-4">
          <span className="mr-2">🔄</span>
          Select to continue conversation
        </p>
        
        <div className="space-y-4">
          <ChatOption text="Yes, let's go!" />
          <ChatOption text="Can we do a quick quiz instead?" />
          <ChatOption text="Wait, what's Prompt Engineering again?" />
        </div>
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input fixed at bottom */}
      <div className="fixed bottom-6 left-0 right-0 max-w-md mx-auto w-full px-4">
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
  );
};

export default WaitingView;
