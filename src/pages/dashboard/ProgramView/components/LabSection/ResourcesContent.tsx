
import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import ResourceSubTabs from "./components/ResourceSubTabs";
import PreSessionContent from "./components/PreSessionContent";
import PostSessionContent from "./components/PostSessionContent";
import VideoResourcesContent from "./components/VideoResourcesContent";
import TasksContent from "./components/TasksContent";

interface ResourcesContentProps {
  setIsPlaying?: (isPlaying: boolean) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ setIsPlaying }) => {
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("pre-session");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // Sample PDF URLs for demonstration
  const pdfSamples = [
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf"
  ];
  
  // Handle video selection
  const handleVideoClick = (videoId: string) => {
    // Set the selected video ID to be played in the main video player
    setSelectedVideo(videoId);
    
    // If there's a video player control function passed in, trigger it
    if (setIsPlaying) {
      setIsPlaying(true);
    }
    
    console.log("Video selected:", videoId);
  };
  
  return (
    <div className="text-white h-full flex flex-col gap-2 overflow-y-auto">
      {/* Sub-tab navigation for Resources */}
      <ResourceSubTabs 
        resourcesSubTab={resourcesSubTab} 
        setResourcesSubTab={setResourcesSubTab} 
      />
      
      {/* Pre-Session References Content */}
      <TabsContent value="pre-session" className="mt-0">
        <PreSessionContent pdfSamples={pdfSamples} />
      </TabsContent>
      
      {/* Post-Session References Content */}
      <TabsContent value="post-session" className="mt-0">
        <PostSessionContent pdfSamples={pdfSamples} />
      </TabsContent>
      
      {/* Videos Content */}
      <TabsContent value="videos" className="mt-0">
        <VideoResourcesContent handleVideoClick={handleVideoClick} />
      </TabsContent>
      
      {/* Tasks Content */}
      <TabsContent value="tasks" className="mt-0">
        <TasksContent />
      </TabsContent>
    </div>
  );
};

export default ResourcesContent;
