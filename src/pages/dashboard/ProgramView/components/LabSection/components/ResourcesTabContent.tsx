
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import DocumentResources from "./DocumentResources";
import VideoResources from "./VideoResources";
import TaskResources from "./TaskResources";

interface ResourcesTabContentProps {
  onVideoClick: (videoId: string) => void;
  onNonVideoClick: () => void;
  pdfSamples: string[];
}

const ResourcesTabContent: React.FC<ResourcesTabContentProps> = ({ 
  onVideoClick,
  onNonVideoClick,
  pdfSamples
}) => {
  return (
    <>
      <TabsContent value="pre-session" className="mt-0">
        <DocumentResources
          type="pre-session"
          onNonVideoClick={onNonVideoClick}
          pdfUrl={pdfSamples[0]}
        />
      </TabsContent>
      
      <TabsContent value="post-session" className="mt-0">
        <DocumentResources
          type="post-session"
          onNonVideoClick={onNonVideoClick}
          pdfUrl={pdfSamples[1]}
        />
      </TabsContent>
      
      <TabsContent value="videos" className="mt-0">
        <VideoResources onVideoClick={onVideoClick} />
      </TabsContent>
      
      <TabsContent value="tasks" className="mt-0">
        <TaskResources onTaskClick={onNonVideoClick} />
      </TabsContent>
    </>
  );
};

export default ResourcesTabContent;
