
import React from "react";
import VideoCard from "./VideoCard";
import { ResourceItem } from "../types";

interface VideoResourceListProps {
  videos: ResourceItem[];
  onPlayVideo: (videoId?: string) => void;
}

const VideoResourceList: React.FC<VideoResourceListProps> = ({ videos, onPlayVideo }) => {
  // Only display the first video to avoid scrolling
  const firstVideo = videos.length > 0 ? videos[0] : null;
  
  return (
    <div className="mb-3">
      {firstVideo && (
        <VideoCard 
          key={firstVideo.id} 
          video={firstVideo} 
          onPlayVideo={onPlayVideo} 
        />
      )}
    </div>
  );
};

export default VideoResourceList;
