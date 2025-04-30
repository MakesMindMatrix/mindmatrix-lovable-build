
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-[#5e77c2] rounded-lg flex flex-col">
      {/* Chat messages */}
      <div className="flex-1 p-3 overflow-hidden flex flex-col">
        {/* Zuno avatar */}
        <div className="flex justify-center mb-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <img 
              src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
              alt="Zuno" 
              className="w-6 h-6 rounded-full"
            />
          </div>
        </div>
        
        {/* Welcome message */}
        <div className="bg-white/10 rounded-lg p-2 text-white text-xs mb-3">
          Welcome to this lesson! We'll explore the fundamentals of neural networks. Are you ready to get started?
        </div>
        
        {/* Selection instruction */}
        <div className="text-white/70 text-xs text-center mb-2">
          Select to continue conversation
        </div>
        
        {/* Options */}
        <div className="space-y-2 mb-auto">
          <div className="relative group">
            <div className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-2 pr-3 cursor-pointer">
              <span className="text-white text-xs">Yes Lets Begin</span>
              <ArrowRight className="h-3 w-3 text-white" />
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-2 pr-3 cursor-pointer">
              <span className="text-white text-xs">Okay sure</span>
              <ArrowRight className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
        
        {/* Selected option */}
        <div className="bg-white/5 rounded-lg p-2 text-white/70 text-xs mb-1">
          Yes Lets Begin
        </div>
        
        {/* Typing indicator */}
        <div className="text-white/60 text-xs">
          Zuno is typing...
        </div>
      </div>
      
      {/* Chat input */}
      <div className="p-2 border-t border-white/10">
        <div className="relative bg-white/20 rounded-lg flex items-center overflow-hidden">
          <input 
            type="text" 
            placeholder="Type something..." 
            className="bg-transparent text-white w-full border-none outline-none text-xs p-2 placeholder-white/50"
          />
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-6 w-6 bg-white/20 hover:bg-white/30"
          >
            <ArrowRight className="h-3 w-3 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
