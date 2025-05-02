
import React from "react";
import ResourceTabs from "./components/ResourceTabs";
import TaskBadges from "./components/TaskBadges";
import ResourceContentDisplay from "./components/ResourceContentDisplay";
import ResourceTypeSelector from "./components/ResourceTypeSelector";
import { useResourceManager } from "./hooks/useResourceManager";

interface ResourcesContentProps {
  onVideoSelect?: (videoId: string) => void;
  onResourceTypeChange?: (isVideo: boolean) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ onVideoSelect, onResourceTypeChange }) => {
  const {
    resourcesSubTab,
    setResourcesSubTab,
    activeResourceItems,
    activeResourceType,
    tasks,
    resourceTypes,
    filteredResources,
    handleResourceTypeSelect,
    handleResourceItemClick,
    handlePlayVideo
  } = useResourceManager({ onVideoSelect, onResourceTypeChange });
  
  return (
    <div className="text-white h-full flex flex-col gap-2">
      {/* Tab navigation for resources */}
      <ResourceTabs 
        activeTab={resourcesSubTab} 
        onTabChange={setResourcesSubTab}
      />
      
      {/* Resource type selector - show only if not in tasks tab */}
      {resourcesSubTab !== "tasks" && (
        <ResourceTypeSelector
          resourceTypes={resourceTypes}
          activeResourceType={activeResourceType}
          onResourceTypeSelect={handleResourceTypeSelect}
        />
      )}
      
      {/* Task badges for tasks tab */}
      {resourcesSubTab === "tasks" && (
        <TaskBadges
          tasks={tasks}
          activeTask={activeResourceItems}
          onTaskSelect={(taskId) => {
            handleResourceItemClick(taskId);
          }}
        />
      )}
      
      {/* Content display area */}
      <ResourceContentDisplay 
        activeTab={resourcesSubTab}
        resources={filteredResources}
        tasks={tasks}
        activeItemId={activeResourceItems}
        onPlayVideo={handlePlayVideo}
      />
    </div>
  );
};

export default ResourcesContent;
