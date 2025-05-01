
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Chat messages area - takes all available space */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-4">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                alt="Zuno" 
                className="w-6 h-6 rounded-full"
              />
            </div>
            <Badge variant="outline" className="ml-2 bg-white/20 text-white text-xs">Zuno</Badge>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white text-sm">
            Welcome to the JavaScript Fundamentals learning module. I'm here to guide you through the material and answer any questions you might have.
          </div>
        </div>
        
        <div className="text-white text-xs mb-2">
          Zuno is typing...
        </div>
        
        {/* Action button */}
        <div className="flex justify-end">
          <Button 
            className="bg-white/20 text-white hover:bg-white/30 text-xs py-1 h-auto px-3 rounded-lg"
          >
            I want to know more
          </Button>
        </div>
      </div>
      
      {/* Chat input - fixed at the bottom */}
      <div className="p-3 border-t border-white/20">
        <div className="relative w-full">
          <Textarea 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..." 
            className="min-h-[40px] bg-transparent border border-white/30 px-4 py-2 rounded-md text-white w-full resize-none pr-10 placeholder-white/50 text-sm"
            style={{ height: '40px' }}
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
