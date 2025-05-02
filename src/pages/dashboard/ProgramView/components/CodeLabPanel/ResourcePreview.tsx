
import React from "react";
import { File, FileText, Save, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceItem } from "./types";

interface ResourcePreviewProps {
  resource: ResourceItem;
}

const ResourcePreview: React.FC<ResourcePreviewProps> = ({ resource }) => {
  // Rendering resource icon based on type
  const renderResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <File className="h-5 w-5 text-red-400" />;
      case "PPT":
        return <FileText className="h-5 w-5 text-blue-400" />;
      case "VIDEO":
        return <FileText className="h-5 w-5 text-purple-400" />; // Using FileText as a placeholder for video
      default:
        return <FileText className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {renderResourceIcon(resource.type)}
          <div>
            <h3 className="font-medium text-white">{resource.title}</h3>
            <p className="text-xs text-white/60">
              {resource.type === "PDF" || resource.type === "PPT" 
                ? `${resource.pages} pages` 
                : `Duration: ${resource.duration}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-8">
            <Save className="h-4 w-4 mr-1" /> Save
          </Button>
          <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-8">
            <Download className="h-4 w-4 mr-1" /> Download
          </Button>
        </div>
      </div>
      
      {/* Placeholder for document preview */}
      <div className="flex-1 bg-white rounded-lg flex flex-col justify-center items-center p-6 min-h-[200px]">
        {resource.type === "PDF" && (
          <div className="text-center">
            <File className="h-16 w-16 text-red-400 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">{resource.title}</p>
            <p className="text-gray-500 text-sm">{resource.pages} pages</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
              Open PDF
            </Button>
          </div>
        )}
        {resource.type === "PPT" && (
          <div className="text-center">
            <FileText className="h-16 w-16 text-blue-400 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">{resource.title}</p>
            <p className="text-gray-500 text-sm">{resource.pages} slides</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
              View Presentation
            </Button>
          </div>
        )}
        {resource.type === "VIDEO" && (
          <div className="text-center">
            <div className="w-full max-w-md h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <p className="text-gray-700 font-medium">{resource.title}</p>
            <p className="text-gray-500 text-sm">Duration: {resource.duration}</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
              Play Video
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePreview;
