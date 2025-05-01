
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye, Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-black w-full">
      <AspectRatio ratio={16/9} className="relative">
        {/* Live indicator */}
        <div className="absolute top-3 left-3 z-10 bg-red-500/80 px-3 py-1 rounded flex items-center">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
          <span className="text-white text-sm">Live Class-Web Development Fundamentals</span>
        </div>
        
        {/* Viewer count */}
        <div className="absolute top-3 right-3 z-10 bg-black/50 px-2 py-1 rounded flex items-center">
          <Eye className="h-4 w-4 text-white mr-1" />
          <span className="text-white text-sm">Attending <span className="bg-white/20 px-2 py-0.5 rounded ml-1">280</span></span>
        </div>
        
        {/* Video */}
        <video 
          className="w-full h-full object-cover"
          poster="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png"
        >
          <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
        </video>
        
        {/* Play button overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
            {isPlaying ? (
              <Pause className="h-7 w-7 text-white" />
            ) : (
              <Play className="h-7 w-7 text-white ml-1" />
            )}
          </div>
        </div>
        
        {/* Time indicator */}
        <div className="absolute bottom-3 right-3 z-10 bg-black/50 px-2 py-1 rounded">
          <span className="text-white text-sm">52:34</span>
        </div>
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
