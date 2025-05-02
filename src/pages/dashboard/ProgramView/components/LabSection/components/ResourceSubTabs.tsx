
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResourceSubTabsProps {
  resourcesSubTab: string;
  setResourcesSubTab: (value: string) => void;
}

const ResourceSubTabs: React.FC<ResourceSubTabsProps> = ({ 
  resourcesSubTab, 
  setResourcesSubTab 
}) => {
  return (
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
    </Tabs>
  );
};

export default ResourceSubTabs;
