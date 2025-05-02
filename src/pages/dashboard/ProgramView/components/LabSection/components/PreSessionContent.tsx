
import React from "react";
import { Button } from "@/components/ui/button";
import { FileType } from "lucide-react";

interface PreSessionContentProps {
  pdfSamples: string[];
}

const PreSessionContent: React.FC<PreSessionContentProps> = ({ pdfSamples }) => {
  return (
    <div className="bg-white/5 p-2 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <FileType className="h-4 w-4 text-blue-300" />
        <h3 className="text-blue-200 text-xs font-medium">Pre-Session References</h3>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-5 w-5 bg-red-600/20 rounded flex items-center justify-center">
            <span className="text-[10px] text-red-300">PDF</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Introduction to Python Programming</p>
            <p className="text-[10px] text-white/60">15 pages • Required reading</p>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
            onClick={() => window.open(pdfSamples[0], '_blank')}
          >
            View
          </Button>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-5 w-5 bg-green-600/20 rounded flex items-center justify-center">
            <span className="text-[10px] text-green-300">URL</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Python Documentation</p>
            <p className="text-[10px] text-white/60">External resource</p>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
            onClick={() => window.open('https://docs.python.org/3/', '_blank')}
          >
            Open
          </Button>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
            <span className="text-[10px] text-blue-300">PDF</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Python Basics Reference Guide</p>
            <p className="text-[10px] text-white/60">10 pages • Supplementary</p>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
            onClick={() => window.open(pdfSamples[1], '_blank')}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreSessionContent;
