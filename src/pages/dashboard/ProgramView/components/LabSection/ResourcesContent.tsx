
import React, { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Save, Download } from "lucide-react";

interface ResourcesContentProps {
  onVideoSelect?: (videoId: string) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ onVideoSelect }) => {
  const [activeSubTab, setActiveSubTab] = useState<string>("learning");
  const [selectedResource, setSelectedResource] = useState<string>("pdf1");
  
  // Sample PDF URLs for demonstration
  const pdfSamples = [
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf"
  ];
  
  // Handle resource selection
  const handleResourceSelect = (resourceId: string) => {
    setSelectedResource(resourceId);
  };
  
  // Handle tab selection
  const handleSubTabChange = (tab: string) => {
    setActiveSubTab(tab);
  };
  
  const handleOpenPdf = () => {
    window.open(pdfSamples[0], "_blank");
  };
  
  // Handle video selection
  const handleVideoClick = (videoId: string) => {
    // If there's a video player control function passed in, trigger it
    if (onVideoSelect) {
      onVideoSelect(videoId);
    }
  };
  
  return (
    <div className="text-white h-full flex flex-col gap-2 overflow-y-auto">
      {/* Sub-tab navigation resembling buttons in a row */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <Button
          size="sm"
          className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
            activeSubTab === 'learning' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
          }`}
          onClick={() => handleSubTabChange('learning')}
        >
          Learning Module
        </Button>
        <Button
          size="sm"
          className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
            activeSubTab === 'pre-session' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
          }`}
          onClick={() => handleSubTabChange('pre-session')}
        >
          Pre Session
        </Button>
        <Button
          size="sm"
          className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
            activeSubTab === 'post-session' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
          }`}
          onClick={() => handleSubTabChange('post-session')}
        >
          Post Session
        </Button>
        <Button
          size="sm"
          className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
            activeSubTab === 'tasks' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
          }`}
          onClick={() => handleSubTabChange('tasks')}
        >
          To-Dos
        </Button>
      </div>
      
      {/* Resource type badges */}
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className={`rounded-full px-4 py-1 h-auto border-white/30 ${
            selectedResource === 'pdf1' ? 'bg-white/20' : 'bg-transparent'
          }`}
          onClick={() => handleResourceSelect('pdf1')}
        >
          PDF
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className={`rounded-full px-4 py-1 h-auto border-white/30 ${
            selectedResource === 'pdf2' ? 'bg-white/20' : 'bg-transparent'
          }`}
          onClick={() => handleResourceSelect('pdf2')}
        >
          PDF
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className={`rounded-full px-4 py-1 h-auto border-white/30 ${
            selectedResource === 'ppt1' ? 'bg-white/20' : 'bg-transparent'
          }`}
          onClick={() => handleResourceSelect('ppt1')}
        >
          PPT
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className={`rounded-full px-4 py-1 h-auto border-white/30 ${
            selectedResource === 'pdf3' ? 'bg-white/20' : 'bg-transparent'
          }`}
          onClick={() => handleResourceSelect('pdf3')}
        >
          PDF
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className={`rounded-full px-4 py-1 h-auto border-white/30 ${
            selectedResource === 'ppt2' ? 'bg-white/20' : 'bg-transparent'
          }`}
          onClick={() => handleResourceSelect('ppt2')}
        >
          PPT
        </Button>
      </div>
      
      {/* Selected resource content display */}
      <div className="bg-[#484c8d]/60 rounded-lg p-4 flex-1">
        {/* Header with document title and actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-red-400">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Introduction to Python Basics</h3>
              <p className="text-sm text-white/70">10 pages</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20">
              <Save className="h-4 w-4 mr-1" /> Save
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20">
              <Download className="h-4 w-4 mr-1" /> Download
            </Button>
          </div>
        </div>
        
        {/* Document preview area */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-20 h-24 bg-red-100 rounded-md flex items-center justify-center mb-4">
            <FileText className="h-10 w-10 text-red-400" />
          </div>
          <h2 className="text-lg font-medium text-gray-700">Introduction to Python Basics</h2>
          <p className="text-sm text-gray-500 mb-4">10 pages</p>
          <Button 
            className="bg-blue-500 hover:bg-blue-600 mt-2 px-6"
            onClick={handleOpenPdf}
          >
            Open PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesContent;
