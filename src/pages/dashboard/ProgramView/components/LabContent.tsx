
import React from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LabContentProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
}

const LabContent: React.FC<LabContentProps> = ({ 
  activeTab, 
  handleTabChange, 
  codeLanguage, 
  setCodeLanguage 
}) => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Video section */}
      <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
        <div className="absolute top-0 left-0 z-10 m-4 bg-red-500/80 px-2 py-1 rounded flex items-center">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
          <span className="text-white text-sm">Live Class-Web Development Fundamentals</span>
        </div>
        
        <div className="absolute top-0 right-0 z-10 m-4 bg-black/50 px-2 py-1 rounded flex items-center">
          <Eye className="h-4 w-4 text-white mr-1" />
          <span className="text-white text-sm">Attending 280</span>
        </div>
        
        <div className="absolute bottom-0 right-0 z-10 m-4 bg-black/50 px-2 py-1 rounded">
          <span className="text-white text-sm">52:34</span>
        </div>
        
        <img 
          src="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png" 
          alt="Live Class" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Lab navigation */}
      <div className="flex bg-white/5 rounded-t-lg border-b border-white/10">
        <Button 
          variant="ghost" 
          className={`${activeTab === 'labs' ? 'bg-white/10 text-white' : 'text-white/60'} rounded-none px-6`}
          onClick={() => handleTabChange('labs')}
        >
          Labs
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'resources' ? 'bg-white/10 text-white' : 'text-white/60'} rounded-none px-6`}
          onClick={() => handleTabChange('resources')}
        >
          Resources
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'notifications' ? 'bg-white/10 text-white' : 'text-white/60'} rounded-none px-6`}
          onClick={() => handleTabChange('notifications')}
        >
          Notifications
        </Button>
      </div>
      
      {/* Lab content */}
      <div className="flex-1 bg-white/5 rounded-b-lg p-4">
        <div className="mb-4">
          <Button 
            variant="secondary" 
            className={`mr-2 bg-white/10 hover:bg-white/20 text-white ${activeTab === 'labs' && 'bg-white/20'}`}
          >
            Code
          </Button>
          <Button 
            variant="ghost" 
            className="text-white/60 hover:text-white"
          >
            CAD Labs
          </Button>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <select
              value={codeLanguage}
              onChange={(e) => setCodeLanguage(e.target.value)}
              className="bg-transparent text-white border-none pr-8 appearance-none cursor-pointer"
            >
              <option value="Python" className="bg-gray-800">Python</option>
              <option value="JavaScript" className="bg-gray-800">JavaScript</option>
              <option value="C++" className="bg-gray-800">C++</option>
            </select>
            <ArrowLeft className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 h-4 w-4 text-white" />
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" className="bg-transparent border-white/20 text-white">
              Save
            </Button>
            <Button variant="outline" className="bg-transparent border-white/20 text-white">
              Copy
            </Button>
            <Button variant="outline" className="bg-transparent border-white/20 text-white">
              Reset
            </Button>
            <Button variant="outline" className="bg-transparent border-white/20 text-white">
              Run
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 h-56 font-mono text-gray-800 text-sm">
          <p>prompt = ""</p>
          <p>You are a helpful assistant. Please answer</p>
          <p>the following question clearly and</p>
          <p>concisely.</p>
          <br />
          <p>Question: &#123;user_input&#125;</p>
          <p>Answer:</p>
        </div>
      </div>
    </div>
  );
};

export default LabContent;
