
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModulesSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 overflow-hidden">
      <div className="mb-4">
        <div className="text-white text-sm font-medium mb-2">Program:</div>
        <div className="text-white">Energy Management in Electric Vehicles</div>
      </div>
      
      <div className="mb-4">
        <div className="text-white text-sm font-medium mb-2">Course:</div>
        <div className="text-white">Introduction to Electric Vehicles</div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-white flex items-center">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <span className="text-xs">1</span>
            </div>
            Session 1
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 rounded-full bg-white/10"
          >
            <ArrowLeft className="h-3 w-3 text-white rotate-90" />
          </Button>
        </div>
        
        <div className="ml-7 space-y-3">
          <div className="text-white/80 text-sm flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            Learning Module
          </div>
          <div className="text-white/80 text-sm flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            Pre-session Reference
          </div>
          <div className="text-white/80 text-sm flex items-center font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Live Tutorial
          </div>
          <div className="text-white/80 text-sm flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            Post-session Reference
          </div>
          <div className="text-white/80 text-sm flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            Task 1
          </div>
          <div className="text-white/80 text-sm flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            Task 2
          </div>
          <div className="text-white/80 text-sm flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            Task 3
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-white flex items-center">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <span className="text-xs">2</span>
            </div>
            Session 2
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 rounded-full bg-white/10"
          >
            <ArrowLeft className="h-3 w-3 text-white rotate-90" />
          </Button>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-white flex items-center">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <span className="text-xs">3</span>
            </div>
            Session 3
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 rounded-full bg-white/10"
          >
            <ArrowLeft className="h-3 w-3 text-white rotate-90" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModulesSidebar;
