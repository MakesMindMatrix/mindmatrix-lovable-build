
import React from "react";
import { FileType, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentResourcesProps {
  type: "pre-session" | "post-session";
  onNonVideoClick: () => void;
  pdfUrl: string;
}

const DocumentResources: React.FC<DocumentResourcesProps> = ({ type, onNonVideoClick, pdfUrl }) => {
  const isPre = type === "pre-session";
  const iconColor = isPre ? "text-blue-300" : "text-green-300";
  const titleColor = isPre ? "text-blue-200" : "text-green-200";
  const title = isPre ? "Pre-Session References" : "Post-Session References";
  const documentTitle = isPre ? "Introduction to Python Programming" : "Advanced Python Techniques";
  const documentType = isPre ? "PDF" : "PPT";
  const documentTypeColor = isPre ? "bg-red-600/20" : "bg-blue-600/20";
  const documentTypeTextColor = isPre ? "text-red-300" : "text-blue-300";
  const description = isPre ? "15 pages • Required reading" : "22 slides • Supplementary";
  const url = isPre ? pdfUrl : 'https://docs.google.com/presentation/d/1BgSKBqN3rXLnW-Qwpc28UY-8WqgbGCmO/edit?usp=sharing';
  
  return (
    <div className="bg-white/5 p-2 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        {isPre ? <FileType className={`h-4 w-4 ${iconColor}`} /> : <FileText className={`h-4 w-4 ${iconColor}`} />}
        <h3 className={`${titleColor} text-xs font-medium`}>{title}</h3>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className={`h-5 w-5 ${documentTypeColor} rounded flex items-center justify-center`}>
            <span className={`text-[10px] ${documentTypeTextColor}`}>{documentType}</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">{documentTitle}</p>
            <p className="text-[10px] text-white/60">{description}</p>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
            onClick={() => {
              window.open(url, '_blank');
              onNonVideoClick();
            }}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentResources;
