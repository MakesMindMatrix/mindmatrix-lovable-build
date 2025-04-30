
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramSidebar: React.FC = () => {
  const [expandedSession, setExpandedSession] = useState(1);
  
  const toggleSession = (sessionNumber: number) => {
    setExpandedSession(expandedSession === sessionNumber ? 0 : sessionNumber);
  };
  
  return (
    <div className="w-64 flex flex-col gap-4">
      {/* Top card - Program & Course info */}
      <div className="bg-[#1A1F2C] rounded-lg p-4">
        <div className="mb-6">
          <p className="text-white/70 text-sm mb-1">Program:</p>
          <p className="text-white font-medium">Energy Management in Electric Vehicles</p>
        </div>
        <div>
          <p className="text-white/70 text-sm mb-1">Course:</p>
          <p className="text-white font-medium">Introduction to Electric Vehicles</p>
        </div>
      </div>
      
      {/* Bottom card - Sessions */}
      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 overflow-y-auto">
        {/* Session 1 */}
        <div className="mb-4">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSession(1)}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <span className="text-xs text-white">1</span>
              </div>
              <span className="text-white">Session 1</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-6 w-6 p-1 rounded-full bg-white/10 ${expandedSession === 1 ? 'rotate-180' : ''}`}
            >
              <ArrowLeft className="h-3 w-3 text-white rotate-90" />
            </Button>
          </div>
          
          {expandedSession === 1 && (
            <div className="pl-8 mt-2 space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-sm">Learning Module</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-sm">Pre-session Reference</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span className="text-white font-medium text-sm">Live Tutorial</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-sm">Post-session Reference</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-sm">Task 1</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-sm">Task 2</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-sm">Task 3</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Session 2 */}
        <div className="mb-4">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSession(2)}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <span className="text-xs text-white">2</span>
              </div>
              <span className="text-white">Session 2</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-6 w-6 p-1 rounded-full bg-white/10 ${expandedSession === 2 ? 'rotate-180' : ''}`}
            >
              <ArrowLeft className="h-3 w-3 text-white rotate-90" />
            </Button>
          </div>
          
          {expandedSession === 2 && (
            <div className="pl-8 mt-2 space-y-2">
              {/* Session 2 content would go here */}
            </div>
          )}
        </div>
        
        {/* Session 3 */}
        <div>
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSession(3)}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <span className="text-xs text-white">3</span>
              </div>
              <span className="text-white">Session 3</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-6 w-6 p-1 rounded-full bg-white/10 ${expandedSession === 3 ? 'rotate-180' : ''}`}
            >
              <ArrowLeft className="h-3 w-3 text-white rotate-90" />
            </Button>
          </div>
          
          {expandedSession === 3 && (
            <div className="pl-8 mt-2 space-y-2">
              {/* Session 3 content would go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramSidebar;
