
import React from "react";
import { ResourceItem } from "../types";

interface VideoResourceListProps {
  videos: ResourceItem[];
  onPlayVideo: (videoId?: string) => void;
}

const VideoResourceList: React.FC<VideoResourceListProps> = () => {
  // Return an empty div since we want to remove the video card
  return <div></div>;
};

export default VideoResourceList;
