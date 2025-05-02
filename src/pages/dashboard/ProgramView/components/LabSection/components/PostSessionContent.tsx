
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface PostSessionContentProps {
  pdfSamples: string[];
}

const PostSessionContent: React.FC<PostSessionContentProps> = ({ pdfSamples }) => {
  return (
    <div className="bg-white/5 p-2 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <FileText className="h-4 w-4 text-green-300" />
        <h3 className="text-green-200 text-xs font-medium">Post-Session References</h3>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
            <span className="text-[10px] text-blue-300">PPT</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Advanced Python Techniques</p>
            <p className="text-[10px] text-white/60">22 slides • Supplementary</p>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
            onClick={() => window.open('https://docs.google.com/presentation/d/1BgSKBqN3rXLnW-Qwpc28UY-8WqgbGCmO/edit?usp=sharing', '_blank')}
          >
            View
          </Button>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-5 w-5 bg-red-600/20 rounded flex items-center justify-center">
            <span className="text-[10px] text-red-300">PDF</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Practice Exercises</p>
            <p className="text-[10px] text-white/60">8 pages • Additional practice</p>
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
      </div>
    </div>
  );
};

export default PostSessionContent;
