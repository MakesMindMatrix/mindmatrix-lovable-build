
import React, { useState, useEffect } from "react";
import { ResourceItem, Task } from "./types";
import ResourceTabs from "./components/ResourceTabs";
import TaskBadges from "./components/TaskBadges";
import ResourceContentDisplay from "./components/ResourceContentDisplay";

interface ResourcesContentProps {
  onVideoSelect?: (videoId: string) => void;
  onResourceTypeChange?: (isVideo: boolean) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ onVideoSelect, onResourceTypeChange }) => {
  // Main Resources tab active sub-tab
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("learning");
  // Secondary layer of tabs for each primary sub-tab
  const [activeResourceItems, setActiveResourceItems] = useState<string>("pdf1");
  // To track selected resource type
  const [activeResourceType, setActiveResourceType] = useState<string>("PDF");
  
  // Define resource materials for each sub-tab category
  const learningModules: ResourceItem[] = [
    { id: "pdf1", type: "PDF", title: "Learning Module - Python Basics", pages: 10 },
    { id: "pdf2", type: "PDF", title: "Intermediate Python Concepts", pages: 15 },
    { id: "ppt1", type: "PPT", title: "Python Workshop Slides", pages: 25 },
    { id: "pdf3", type: "PDF", title: "Python Data Structures", pages: 12 },
    { id: "ppt2", type: "PPT", title: "Python Best Practices", pages: 18 },
    { id: "video1", type: "VIDEO", title: "Python for Beginners - Full Course", duration: "4:26:51", videoId: "rfscVS0vtbw" }
  ];
  
  const preSessionResources: ResourceItem[] = [
    { id: "pre-pdf1", type: "PDF", title: "Pre-Session Guide", pages: 5 },
    { id: "pre-ppt1", type: "PPT", title: "Session Preparation Materials", pages: 8 },
    { id: "pre-pdf2", type: "PDF", title: "Setup Instructions", pages: 3 },
    { id: "pre-video1", type: "VIDEO", title: "Introduction Video", duration: "5:30", videoId: "PkZNo7MFNFg" }
  ];
  
  const postSessionResources: ResourceItem[] = [
    { id: "post-pdf1", type: "PDF", title: "Post-Session Summary", pages: 7 },
    { id: "post-ppt1", type: "PPT", title: "Additional Learning Materials", pages: 12 },
    { id: "post-pdf2", type: "PDF", title: "Practice Exercises", pages: 15 },
    { id: "post-video1", type: "VIDEO", title: "Deep Dive Tutorial", duration: "10:15", videoId: "rfscVS0vtbw" }
  ];
  
  const tasks: Task[] = [
    { id: "task1", title: "Complete Python Basics Quiz", due: "Today" },
    { id: "task2", title: "Submit Lab Assignment", due: "Tomorrow" },
    { id: "task3", title: "Prepare for Code Review", due: "Friday" }
  ];
  
  // Get current resources based on active sub-tab
  const getCurrentResources = (): ResourceItem[] => {
    switch (resourcesSubTab) {
      case "learning":
        return learningModules;
      case "pre-session":
        return preSessionResources;
      case "post-session":
        return postSessionResources;
      default:
        return [];
    }
  };
  
  // Get unique resource types from current resources
  const getResourceTypes = (): string[] => {
    const resources = getCurrentResources();
    return [...new Set(resources.map(r => r.type))];
  };
  
  // Handle resource type selection
  const handleResourceTypeSelect = (resourceType: string) => {
    setActiveResourceType(resourceType);
    
    // Find the first resource of this type and select it
    const resources = getCurrentResources();
    const firstResourceOfType = resources.find(r => r.type === resourceType);
    
    if (firstResourceOfType) {
      setActiveResourceItems(firstResourceOfType.id);
      
      // Notify parent component about resource type
      if (onResourceTypeChange) {
        onResourceTypeChange(resourceType === "VIDEO");
      }
    }
  };

  // Handle resource item click
  const handleResourceItemClick = (itemId: string) => {
    setActiveResourceItems(itemId);
    
    // Check if the selected item is a video
    const currentResources = getCurrentResources();
    const selectedItem = currentResources.find(r => r.id === itemId);
    const isVideoResource = selectedItem?.type === "VIDEO";
    
    // Notify parent component about resource type
    if (onResourceTypeChange) {
      onResourceTypeChange(isVideoResource);
    }
  };
  
  // Handle playing a video in the main player
  const handlePlayVideo = (videoId?: string) => {
    if (videoId && onVideoSelect) {
      onVideoSelect(videoId);
      
      // Notify parent that we're showing a video
      if (onResourceTypeChange) {
        onResourceTypeChange(true);
      }
    }
  };

  // Check and notify about resource type when changing tabs
  useEffect(() => {
    const currentResources = getCurrentResources();
    const activeItem = currentResources.find(r => r.id === activeResourceItems);
    
    // If no active item found in current tab, set the first one
    if (!activeItem && currentResources.length > 0) {
      setActiveResourceItems(currentResources[0].id);
      setActiveResourceType(currentResources[0].type);
      
      if (onResourceTypeChange) {
        onResourceTypeChange(currentResources[0].type === "VIDEO");
      }
    } else if (activeItem) {
      setActiveResourceType(activeItem.type);
      
      if (onResourceTypeChange) {
        onResourceTypeChange(activeItem.type === "VIDEO");
      }
    }
  }, [resourcesSubTab]);
  
  const currentResources = getCurrentResources();
  const hasSelectedVideoResource = 
    resourcesSubTab !== "tasks" && 
    currentResources.find(r => r.id === activeResourceItems)?.type === "VIDEO";
  
  const resourceTypes = getResourceTypes();
  const filteredResources = currentResources.filter(r => r.type === activeResourceType);
  
  return (
    <div className="text-white h-full flex flex-col gap-2">
      {/* Tab navigation for resources */}
      <ResourceTabs 
        activeTab={resourcesSubTab} 
        onTabChange={setResourcesSubTab}
      />
      
      {/* Resource type selector - show only if not in tasks tab */}
      {resourcesSubTab !== "tasks" && (
        <div className="flex flex-wrap gap-2 mb-2">
          {resourceTypes.map((type) => (
            <button
              key={type}
              className={`px-3 py-1 text-xs rounded-full ${
                activeResourceType === type 
                  ? "bg-white text-blue-600" 
                  : "bg-blue-600/20 text-white"
              }`}
              onClick={() => handleResourceTypeSelect(type)}
            >
              {type}
            </button>
          ))}
        </div>
      )}
      
      {/* Task badges for tasks tab */}
      {resourcesSubTab === "tasks" && (
        <TaskBadges
          tasks={tasks}
          activeTask={activeResourceItems}
          onTaskSelect={(taskId) => {
            setActiveResourceItems(taskId);
            // Tasks are never videos
            if (onResourceTypeChange) {
              onResourceTypeChange(false);
            }
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
