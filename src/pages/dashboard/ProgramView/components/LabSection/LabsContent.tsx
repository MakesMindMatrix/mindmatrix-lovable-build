
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LabsContentProps {
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
}

const LabsContent: React.FC<LabsContentProps> = ({
  codeLanguage,
  setCodeLanguage
}) => {
  return (
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
  );
};

export default LabsContent;
