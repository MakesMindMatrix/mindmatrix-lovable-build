
import React from "react";
import { Eye } from "lucide-react";

const VideoSection: React.FC = () => {
  return (
    <div className="relative rounded-lg overflow-hidden aspect-video w-full">
      {/* Live indicator */}
      <div className="absolute top-0 left-0 z-10 m-4 bg-red-500/80 px-3 py-1 rounded flex items-center">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        <span className="text-white text-sm">Live Class-Web Development Fundamentals</span>
      </div>
      
      {/* Viewer count */}
      <div className="absolute top-0 right-0 z-10 m-4 bg-black/50 px-2 py-1 rounded flex items-center">
        <Eye className="h-4 w-4 text-white mr-1" />
        <span className="text-white text-sm">Attending <span className="bg-white/20 px-2 py-0.5 rounded ml-1">280</span></span>
      </div>
      
      {/* Time */}
      <div className="absolute bottom-0 right-0 z-10 m-4 bg-black/50 px-2 py-1 rounded">
        <span className="text-white text-sm">52:34</span>
      </div>
      
      {/* Video */}
      <img 
        src="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png" 
        alt="Live Class" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoSection;
