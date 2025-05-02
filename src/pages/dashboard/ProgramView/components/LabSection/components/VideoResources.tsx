
import React from "react";
import { Youtube, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoResourcesProps {
  onVideoClick: (videoId: string) => void;
}

const VideoResources: React.FC<VideoResourcesProps> = ({ onVideoClick }) => {
  return (
    <div className="bg-white/5 p-2 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Youtube className="h-4 w-4 text-red-400" />
        <h3 className="text-purple-200 text-xs font-medium">Video Resources</h3>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-10 w-14 bg-gray-900 rounded flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Video className="h-4 w-4 text-white" />
            </div>
            <img src="https://img.youtube.com/vi/PkZNo7MFNFg/default.jpg" alt="Thumbnail" className="w-full h-full object-cover opacity-75" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">JavaScript Tutorial for Beginners</p>
            <p className="text-[10px] text-white/60">16:30 • freeCodeCamp.org</p>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="h-7 text-xs bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
            onClick={() => onVideoClick("PkZNo7MFNFg")}
          >
            Play
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoResources;
