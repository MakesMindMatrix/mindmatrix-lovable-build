
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramSidebar: React.FC = () => {
  const [expandedSession, setExpandedSession] = useState(1);
  
  const toggleSession = (sessionNumber: number) => {
    setExpandedSession(expandedSession === sessionNumber ? 0 : sessionNumber);
  };
  
  return (
    <div className="w-64 flex flex-col gap-3">
      {/* Top card - Program & Course info - Updated with color #6388D7 */}
      <div className="bg-[#6388D7] rounded-lg p-3">
        <div className="mb-4">
          <p className="text-white/70 text-sm mb-1">Program:</p>
          <p className="text-white font-medium">Energy Management in Electric Vehicles</p>
        </div>
        <div>
          <p className="text-white/70 text-sm mb-1">Course:</p>
          <p className="text-white font-medium">Introduction to Electric Vehicles</p>
        </div>
      </div>
      
      {/* Bottom card - Sessions - Updated with color #1E1E1E */}
      <div className="flex-1 bg-[#1E1E1E] rounded-lg p-3 overflow-y-auto">
        {/* Session 1 */}
        <div className="mb-3">
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
            <div className="pl-8 mt-2 space-y-1.5">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-xs">Learning Module</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-xs">Pre-session Reference</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span className="text-white font-medium text-xs">Live Tutorial</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-xs">Post-session Reference</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-xs">Task 1</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-xs">Task 2</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white/70 text-xs">Task 3</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Session 2 */}
        <div className="mb-3">
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
            <div className="pl-8 mt-2 space-y-1.5">
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
            <div className="pl-8 mt-2 space-y-1.5">
              {/* Session 3 content would go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramSidebar;
