
import React from "react";
import { ArrowLeft, Link2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeLabPanelProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
}

const CodeLabPanel: React.FC<CodeLabPanelProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage
}) => {
  return (
    <div className="flex-1 backdrop-blur-xl bg-gradient-to-br from-[#2A3A80]/70 to-[#1A2C6B]/60 border border-white/10 rounded-lg flex flex-col overflow-hidden z-10 h-full shadow-lg">
      {/* Tab navigation */}
      <div className="flex bg-[#1E2D6F]/80 backdrop-blur-md rounded-t-lg border-b border-white/10">
        <Button 
          variant="ghost" 
          className={`${activeTab === 'labs' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('labs')}
        >
          <span className="text-sm">Labs</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'resources' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('resources')}
        >
          <span className="text-sm">Resources</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'notifications' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('notifications')}
        >
          <span className="text-sm">Notifications</span>
        </Button>
      </div>
      
      {/* Content area */}
      <div className="flex-1 p-3 rounded-b-lg overflow-hidden flex flex-col">
        {activeTab === 'labs' && (
          <>
            {/* Lab type selection */}
            <div className="mb-3">
              <Button 
                className="mr-2 bg-[#3A4A90]/30 hover:bg-[#3A4A90]/40 text-white text-sm py-1 h-auto px-4"
              >
                Code
              </Button>
              <Button 
                variant="ghost" 
                className="text-white/60 hover:text-white text-sm py-1 h-auto px-4"
              >
                CAD Labs
              </Button>
            </div>
            
            {/* Code language and controls */}
            <div className="flex justify-between items-center mb-3">
              <div className="relative">
                <select
                  value={codeLanguage}
                  onChange={(e) => setCodeLanguage(e.target.value)}
                  className="bg-transparent text-white border-none pr-8 appearance-none cursor-pointer text-sm"
                >
                  <option value="Python" className="bg-[#2A3A80]">Python</option>
                  <option value="JavaScript" className="bg-[#2A3A80]">JavaScript</option>
                  <option value="C++" className="bg-[#2A3A80]">C++</option>
                </select>
                <ArrowLeft className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 h-4 w-4 text-white" />
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                  Save
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                  Copy
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                  Reset
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                  Run
                </Button>
              </div>
            </div>
            
            {/* Code editor - replaced with placeholder for code environment */}
            <div className="flex-1 bg-white rounded-lg p-3 font-mono text-gray-800 text-xs overflow-y-auto min-h-[calc(100%-80px)] flex flex-col justify-center items-center">
              <div className="text-center max-w-md">
                <div className="mb-4 flex justify-center">
                  <Link2 className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Connect Code Environment</h3>
                <p className="text-xs text-gray-500 mb-4">
                  Attach an external code environment or IDE to practice your coding skills in real-time.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8 text-xs flex items-center gap-1">
                    <Link2 className="h-3.5 w-3.5" />
                    Connect Environment
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 h-8 text-xs flex items-center gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'resources' && (
          <div className="text-white h-full flex items-center justify-center">
            <p className="text-sm">Resources content will appear here</p>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="text-white h-full flex items-center justify-center">
            <p className="text-sm">Notifications content will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeLabPanel;
