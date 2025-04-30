
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex flex-col">
      <div className="p-4 flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                  alt="Zuno" 
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3 text-white text-sm">
              Welcome to this lesson! We'll explore the fundamentals of neural networks. Are you ready to get started?
            </div>
            
            <div className="text-white/60 text-xs text-center">Select to continue conversation</div>
            
            <div className="bg-white/10 rounded-lg p-2 text-white text-sm flex items-center justify-between">
              <div>Yes Lets Begin</div>
              <ArrowRight className="h-4 w-4" />
            </div>
            
            <div className="bg-white/10 rounded-lg p-2 text-white text-sm flex items-center justify-between">
              <div>Okay sure</div>
              <ArrowRight className="h-4 w-4" />
            </div>
            
            <div className="bg-white/5 rounded-lg p-2 text-white/70 text-sm flex items-center justify-between">
              <div>Yes Lets Begin</div>
            </div>
            
            <div className="text-white/60 text-xs">Zuno is typing...</div>
          </div>
        </ScrollArea>
      </div>
      
      <div className="p-3 border-t border-white/10">
        <div className="bg-white/20 rounded-lg p-2 flex items-center">
          <input 
            type="text" 
            placeholder="Type something..." 
            className="bg-transparent text-white w-full border-none outline-none text-sm placeholder-white/50"
          />
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full h-7 w-7 bg-white/20 hover:bg-white/30"
          >
            <ArrowRight className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
