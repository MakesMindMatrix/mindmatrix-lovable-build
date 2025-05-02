
import React from "react";
import VideoCard from "./VideoCard";
import { ResourceItem } from "../types";

interface VideoResourceListProps {
  videos: ResourceItem[];
  onPlayVideo: (videoId?: string) => void;
}

const VideoResourceList: React.FC<VideoResourceListProps> = ({ videos, onPlayVideo }) => {
  return (
    <div className="space-y-2 mb-3">
      {videos.map((video) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          onPlayVideo={onPlayVideo} 
        />
      ))}
    </div>
  );
};

export default VideoResourceList;
