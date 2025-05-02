
import React, { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ResourceSubTabs from "./components/ResourceSubTabs";
import PreSessionContent from "./components/PreSessionContent";
import PostSessionContent from "./components/PostSessionContent";
import VideoResourcesContent from "./components/VideoResourcesContent";
import TasksContent from "./components/TasksContent";

interface ResourcesContentProps {
  onVideoSelect?: (videoId: string) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ onVideoSelect }) => {
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("pre-session");
  
  // Sample PDF URLs for demonstration
  const pdfSamples = [
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf"
  ];
  
  // Handle video selection
  const handleVideoClick = (videoId: string) => {
    // If there's a video player control function passed in, trigger it
    if (onVideoSelect) {
      onVideoSelect(videoId);
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
      
      {/* Wrap TabsContent components with Tabs component */}
      <Tabs value={resourcesSubTab} className="flex-1">
        {/* Pre-Session References Content */}
        <TabsContent value="pre-session" className="mt-0 h-full">
          <PreSessionContent pdfSamples={pdfSamples} />
        </TabsContent>
        
        {/* Post-Session References Content */}
        <TabsContent value="post-session" className="mt-0 h-full">
          <PostSessionContent pdfSamples={pdfSamples} />
        </TabsContent>
        
        {/* Videos Content */}
        <TabsContent value="videos" className="mt-0 h-full">
          <VideoResourcesContent handleVideoClick={handleVideoClick} />
        </TabsContent>
        
        {/* Tasks Content */}
        <TabsContent value="tasks" className="mt-0 h-full">
          <TasksContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourcesContent;
