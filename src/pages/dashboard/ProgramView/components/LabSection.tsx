
import React from "react";
import { ArrowLeft, BookOpen, BookOpenCheck, ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LabSectionProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
}

const LabSection: React.FC<LabSectionProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage
}) => {
  return (
    <div className="flex-1 flex flex-col rounded-lg overflow-hidden max-h-[45%]">
      {/* Tab navigation */}
      <div className="flex bg-[#2D3044] rounded-t-lg">
        <Button 
          variant="ghost" 
          className={`${activeTab === 'labs' ? 'bg-[#3a3e57] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto`}
          onClick={() => handleTabChange('labs')}
        >
          <span className="ml-2 text-sm">Labs</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'resources' ? 'bg-[#3a3e57] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto`}
          onClick={() => handleTabChange('resources')}
        >
          <span className="ml-2 text-sm">Resources</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'notifications' ? 'bg-[#3a3e57] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto`}
          onClick={() => handleTabChange('notifications')}
        >
          <span className="ml-2 text-sm">Notifications</span>
        </Button>
      </div>
      
      {/* Content area */}
      <div className="flex-1 bg-[#3a3e57] p-3 rounded-b-lg overflow-hidden">
        {activeTab === 'labs' && (
          <>
            {/* Lab type selection */}
            <div className="mb-3">
              <Button 
                className="mr-2 bg-white/20 hover:bg-white/30 text-white text-sm py-1 h-auto px-4"
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
            
            {/* Lab controls */}
            <div className="flex justify-between items-center mb-3">
              <div className="relative">
                <select
                  value={codeLanguage}
                  onChange={(e) => setCodeLanguage(e.target.value)}
                  className="bg-transparent text-white border-none pr-8 appearance-none cursor-pointer text-sm"
                >
                  <option value="Python" className="bg-gray-800">Python</option>
                  <option value="JavaScript" className="bg-gray-800">JavaScript</option>
                  <option value="C++" className="bg-gray-800">C++</option>
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
            
            {/* Code editor placeholder */}
            <div className="bg-white rounded-lg p-3 h-24 flex flex-col justify-center items-center text-gray-500 text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 w-full h-full flex flex-col justify-center items-center">
                <p className="text-sm font-medium">Connect to Code Environment</p>
                <p className="text-xs mt-1">Link your preferred IDE or code editor here</p>
                <div className="flex mt-3 gap-2">
                  <Button size="sm" variant="outline" className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100">
                    Connect
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 text-xs text-gray-600 hover:bg-gray-100">
                    Open in new tab
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'resources' && (
          <div className="text-white h-full flex flex-col gap-2 overflow-y-auto">
            {/* Pre-Session References Section */}
            <div className="bg-white/5 p-2 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-blue-300" />
                <h3 className="text-blue-200 text-xs font-medium">Pre-Session References</h3>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                  <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
                    <span className="text-[10px] text-blue-300">PDF</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white">Introduction to Python Programming</p>
                    <p className="text-[10px] text-white/60">15 pages • Required reading</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                  <div className="h-5 w-5 bg-green-600/20 rounded flex items-center justify-center">
                    <span className="text-[10px] text-green-300">URL</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white">Python Documentation</p>
                    <p className="text-[10px] text-white/60">External resource</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Post-Session References Section */}
            <div className="bg-white/5 p-2 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpenCheck className="h-4 w-4 text-green-300" />
                <h3 className="text-green-200 text-xs font-medium">Post-Session References</h3>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                  <div className="h-5 w-5 bg-purple-600/20 rounded flex items-center justify-center">
                    <span className="text-[10px] text-purple-300">VID</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white">Advanced Python Techniques</p>
                    <p className="text-[10px] text-white/60">22 min • Supplementary</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* To-Dos Section */}
            <div className="bg-white/5 p-2 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ListTodo className="h-4 w-4 text-amber-300" />
                <h3 className="text-amber-200 text-xs font-medium">To-Dos</h3>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                  <div className="h-4 w-4 rounded-full border border-amber-400/50 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-amber-400 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white">Complete Introduction Exercise</p>
                    <p className="text-[10px] text-white/60">Due: Today</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                  <div className="h-4 w-4 rounded-full border border-white/30 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-transparent rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white">Submit Lab Assignment 1</p>
                    <p className="text-[10px] text-white/60">Due: Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
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

export default LabSection;
