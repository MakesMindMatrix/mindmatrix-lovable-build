
import React from "react";
import { ResourceItem, Task } from "../types";
import ResourcePreview from "../ResourcePreview";
import TaskPreview from "../TaskPreview";

interface ResourceContentDisplayProps {
  activeTab: string;
  resources: ResourceItem[];
  tasks: Task[];
  activeItemId: string;
  onPlayVideo: (videoId?: string) => void;
}

const ResourceContentDisplay: React.FC<ResourceContentDisplayProps> = ({ 
  activeTab, 
  resources, 
  tasks, 
  activeItemId,
  onPlayVideo 
}) => {
  return (
    <div className="bg-white/10 p-4 rounded-lg flex-1">
      {activeTab !== "tasks" ? (
        <>
          {/* Display selected resource content */}
          {resources
            .filter(r => r.id === activeItemId)
            .map((resource) => (
              <ResourcePreview 
                key={resource.id} 
                resource={resource} 
                onPlayVideo={onPlayVideo}
              />
            ))}
        </>
      ) : (
        <>
          {/* Task detail view */}
          {tasks
            .filter(t => t.id === activeItemId)
            .map((task) => (
              <TaskPreview key={task.id} task={task} />
            ))}
        </>
      )}
    </div>
  );
};

export default ResourceContentDisplay;
