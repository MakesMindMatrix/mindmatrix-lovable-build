
import React from "react";
import { ArrowLeft } from "lucide-react";
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
            
            {/* Code editor */}
            <div className="bg-white rounded-lg p-3 h-24 font-mono text-gray-800 text-xs overflow-y-auto">
              <p>prompt = ""</p>
              <p>You are a helpful assistant. Please answer</p>
              <p>the following question clearly and</p>
              <p>concisely.</p>
              <br />
              <p>Question: &#123;user_input&#125;</p>
              <p>Answer:</p>
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

export default LabSection;
