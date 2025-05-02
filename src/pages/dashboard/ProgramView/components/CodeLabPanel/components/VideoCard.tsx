
import React from "react";
import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceItem } from "../types";

interface VideoCardProps {
  video: ResourceItem;
  onPlayVideo: (videoId?: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlayVideo }) => {
  return (
    <div 
      className="flex items-center gap-3 p-2 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
    >
      <div className="h-16 w-28 bg-gray-900 rounded flex items-center justify-center overflow-hidden relative">
        <img 
          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Youtube className="h-6 w-6 text-red-500" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-white">{video.title}</h3>
        <p className="text-xs text-white/60">Duration: {video.duration}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="bg-red-500/20 border-red-500/30 text-white hover:bg-red-500/30"
        onClick={() => onPlayVideo(video.videoId)}
      >
        <Play className="h-4 w-4 mr-1" /> Play
      </Button>
    </div>
  );
};

export default VideoCard;
