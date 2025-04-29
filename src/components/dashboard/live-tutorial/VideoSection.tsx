
import React from "react";
import { Eye } from "lucide-react";

interface VideoSectionProps {
  title: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ title }) => {
  return (
    <div className="relative flex-grow">
      <div className="absolute inset-0 bg-black">
        <img 
          src="/lovable-uploads/494e7cbd-0d50-495c-a039-9f9ba4ccc9cd.png" 
          alt="Tutorial video" 
          className="w-full h-full object-cover"
        />
        
        {/* Video title and viewers */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-red-500 rounded mr-3"></div>
            <h2 className="text-white text-xl font-medium">{title}</h2>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
            <Eye className="h-5 w-5 text-white mr-2" />
            <span className="text-white">Attending</span>
            <span className="bg-white text-blue-600 ml-2 px-2 py-0.5 rounded text-sm">280</span>
          </div>
        </div>
        
        {/* Video timer */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <span className="text-white">52:34</span>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
