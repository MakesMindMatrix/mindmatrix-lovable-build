
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
    <div className="flex-1 overflow-hidden">
      {/* Chat messages area */}
      <div className="p-4 h-[calc(100%-70px)] overflow-y-auto">
        <div className="mb-4">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                alt="Zuno" 
                className="w-6 h-6 rounded-full"
              />
            </div>
            <Badge variant="outline" className="ml-2 bg-blue-50/30 text-black text-xs">Zuno</Badge>
          </div>
          <div className="bg-blue-100/30 backdrop-blur-sm border border-blue-200/40 rounded-lg p-3 text-black text-sm">
            These courses will help you upskill at the areas you are currently still yet to improve at
          </div>
        </div>
        
        <div className="text-black text-xs mb-2">
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
      
      {/* Chat input - shifted down by adding mt-3 */}
      <div className="h-[70px] p-3 mt-3 flex items-center">
        <div className="relative w-full">
          <Textarea 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..." 
            className="min-h-[40px] bg-transparent border border-input px-4 py-2 rounded-md text-white w-full resize-none pr-10 placeholder-white/50 text-sm"
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
