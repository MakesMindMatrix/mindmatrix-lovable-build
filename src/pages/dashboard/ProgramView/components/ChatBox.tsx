
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  return (
    <div className="flex-1 overflow-hidden">
      {/* Chat messages area */}
      <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
        <div className="mb-4">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                alt="Zuno" 
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-white text-sm">
            These courses will help you upskill at the areas you are currently still yet to improve at
          </div>
        </div>
        
        <div className="text-gray-700 text-xs mb-2">
          Zuno is typing...
        </div>
        
        {/* Action button */}
        <div className="flex justify-end">
          <Button 
            className="bg-white text-blue-800 hover:bg-white/90 text-xs py-1 h-auto px-3 rounded-lg"
          >
            I want to know more
          </Button>
        </div>
      </div>
      
      {/* Chat input */}
      <div className="h-[60px] p-3 flex items-center">
        <div className="relative w-full bg-white/20 rounded-full">
          <input 
            type="text" 
            placeholder="Type something..." 
            className="bg-transparent border-none text-white w-full outline-none pl-4 pr-10 py-2 placeholder-white/50 text-sm"
          />
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-6 w-6 bg-white/20 hover:bg-white/30"
          >
            <ArrowLeft className="h-3 w-3 text-white rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
