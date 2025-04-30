
import React, { useState, useRef } from "react";
import { Eye, Video, Play, Pause } from "lucide-react";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
      
      {/* Video player */}
      <div className="relative w-full h-full bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png"
        >
          <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause overlay button */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
            onClick={togglePlayPause}
          >
            <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
              <Play className="h-7 w-7 text-white ml-1" />
            </div>
          </div>
        )}
        
        {/* Video controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-14 flex items-end px-4 pb-2">
          <button 
            className="text-white mr-4 focus:outline-none"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          
          <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white w-[35%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
