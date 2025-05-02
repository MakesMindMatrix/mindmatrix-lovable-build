
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourcesTabContent from "./components/ResourcesTabContent";
import { useResourcesState } from "./hooks/useResourcesState";

interface ResourcesContentProps {
  setIsPlaying?: (isPlaying: boolean) => void;
  onResourceTypeChange?: (isVideo: boolean) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ setIsPlaying, onResourceTypeChange }) => {
  const { resourcesSubTab, setResourcesSubTab, selectedVideo, setSelectedVideo, pdfSamples } = useResourcesState();
  
  // Handle video selection
  const handleVideoClick = (videoId: string) => {
    // Set the selected video ID to be played in the main video player
    setSelectedVideo(videoId);
    
    // If there's a video player control function passed in, trigger it
    if (setIsPlaying) {
      setIsPlaying(true);
    }
    
    // Notify parent that we're showing a video
    if (onResourceTypeChange) {
      onResourceTypeChange(true);
    }
    
    console.log("Video selected:", videoId);
  };

  // Handle non-video resource selection
  const handleNonVideoResourceClick = () => {
    // Notify parent that we're showing a non-video resource
    if (onResourceTypeChange) {
      onResourceTypeChange(false);
    }
  };
  
  return (
    <div className="text-white h-full flex flex-col gap-2">
      {/* Sub-tab navigation for Resources */}
      <Tabs defaultValue="pre-session" value={resourcesSubTab} onValueChange={setResourcesSubTab} className="w-full">
        <TabsList className="bg-white/10 p-1 mb-2 flex w-full space-x-1">
          <TabsTrigger 
            value="pre-session" 
            className="flex-1 text-xs data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-200 data-[state=inactive]:text-white/60"
          >
            Pre-Session References
          </TabsTrigger>
          <TabsTrigger 
            value="post-session" 
            className="flex-1 text-xs data-[state=active]:bg-green-500/20 data-[state=active]:text-green-200 data-[state=inactive]:text-white/60"
          >
            Post-Session References
          </TabsTrigger>
          <TabsTrigger 
            value="videos" 
            className="flex-1 text-xs data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-200 data-[state=inactive]:text-white/60"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger 
            value="tasks" 
            className="flex-1 text-xs data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-200 data-[state=inactive]:text-white/60"
          >
            Tasks
          </TabsTrigger>
        </TabsList>
        
        {/* Tab content using the ResourcesTabContent component */}
        <ResourcesTabContent 
          onVideoClick={handleVideoClick}
          onNonVideoClick={handleNonVideoResourceClick}
          pdfSamples={pdfSamples}
        />
      </Tabs>
    </div>
  );
};

export default ResourcesContent;
