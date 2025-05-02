
import React from "react";
import { File, FileText, Save, Download, Play, Youtube, FilePdf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceItem } from "./types";

interface ResourcePreviewProps {
  resource: ResourceItem;
  onPlayVideo?: (videoId?: string) => void;
}

const ResourcePreview: React.FC<ResourcePreviewProps> = ({ resource, onPlayVideo }) => {
  // Sample PDF URLs for demonstration
  const pdfSamples = [
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf"
  ];

  // Rendering resource icon based on type
  const renderResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FilePdf className="h-5 w-5 text-red-400" />;
      case "PPT":
        return <FileText className="h-5 w-5 text-blue-400" />;
      case "VIDEO":
        return <Youtube className="h-5 w-5 text-red-500" />; 
      default:
        return <FileText className="h-5 w-5 text-gray-400" />;
    }
  };

  // Handle view/open action for different resource types
  const handleAction = () => {
    if (resource.type === "VIDEO" && onPlayVideo) {
      onPlayVideo(resource.videoId);
    } else if (resource.type === "PDF") {
      // Open PDF in new tab
      window.open(pdfSamples[Math.floor(Math.random() * pdfSamples.length)], "_blank");
    } else if (resource.type === "PPT") {
      // Open a sample Google Slides presentation
      window.open("https://docs.google.com/presentation/d/e/2PACX-1vR8ZQdqLwNpA8NN8rTQ-5rvGSfD4QrfuaTGUMDyCjHQeWzilKaX0QP5iCmUNGE36TfFbBbwSNNbIl_K/pub?start=false&loop=false&delayms=3000", "_blank");
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
          {resource.type !== "VIDEO" ? (
            <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-8">
              <Download className="h-4 w-4 mr-1" /> Download
            </Button>
          ) : (
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-red-500/20 border-red-400/30 text-white hover:bg-red-500/30 h-8"
              onClick={() => onPlayVideo && onPlayVideo(resource.videoId)}
            >
              <Play className="h-4 w-4 mr-1" /> Play
            </Button>
          )}
        </div>
      </div>
      
      {/* Placeholder for document preview */}
      <div className="flex-1 bg-white rounded-lg flex flex-col justify-center items-center p-6 min-h-[200px]">
        {resource.type === "PDF" && (
          <div className="text-center">
            <FilePdf className="h-16 w-16 text-red-400 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">{resource.title}</p>
            <p className="text-gray-500 text-sm">{resource.pages} pages</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={handleAction}>
              Open PDF
            </Button>
          </div>
        )}
        {resource.type === "PPT" && (
          <div className="text-center">
            <FileText className="h-16 w-16 text-blue-400 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">{resource.title}</p>
            <p className="text-gray-500 text-sm">{resource.pages} slides</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={handleAction}>
              View Presentation
            </Button>
          </div>
        )}
        {resource.type === "VIDEO" && (
          <div className="text-center">
            <div className="w-full max-w-md h-32 bg-gray-200 rounded-lg relative mb-3 overflow-hidden">
              {resource.videoId && (
                <img 
                  src={`https://img.youtube.com/vi/${resource.videoId}/mqdefault.jpg`} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 font-medium">{resource.title}</p>
            <p className="text-gray-500 text-sm">Duration: {resource.duration}</p>
            <Button 
              className="mt-4 bg-red-600 hover:bg-red-700" 
              onClick={handleAction}
            >
              Play Video
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePreview;
