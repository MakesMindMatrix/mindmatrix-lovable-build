
import React from "react";
import { Button } from "@/components/ui/button";

interface ResourceSubTabsProps {
  resourcesSubTab: string;
  setResourcesSubTab: (value: string) => void;
}

const ResourceSubTabs: React.FC<ResourceSubTabsProps> = ({ 
  resourcesSubTab, 
  setResourcesSubTab 
}) => {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      <Button
        size="sm"
        className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
          resourcesSubTab === 'pre-session' 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
        }`}
        onClick={() => setResourcesSubTab('pre-session')}
      >
        Pre-Session References
      </Button>
      <Button
        size="sm"
        className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
          resourcesSubTab === 'post-session' 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
        }`}
        onClick={() => setResourcesSubTab('post-session')}
      >
        Post-Session References
      </Button>
      <Button
        size="sm"
        className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
          resourcesSubTab === 'videos' 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
        }`}
        onClick={() => setResourcesSubTab('videos')}
      >
        Videos
      </Button>
      <Button
        size="sm"
        className={`rounded-full px-4 py-2 h-auto whitespace-nowrap ${
          resourcesSubTab === 'tasks' 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-[#424782]/60 text-white hover:bg-[#424782]'
        }`}
        onClick={() => setResourcesSubTab('tasks')}
      >
        Tasks
      </Button>
    </div>
  );
};

export default ResourceSubTabs;
