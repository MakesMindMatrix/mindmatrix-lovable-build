
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ResourceItem } from "../types";

interface ResourceBadgesProps {
  resources: ResourceItem[];
  activeResource: string;
  onResourceSelect: (resourceId: string) => void;
}

const ResourceBadges: React.FC<ResourceBadgesProps> = ({ resources, activeResource, onResourceSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {resources.map((resource) => (
        <Badge
          key={resource.id}
          variant="outline"
          className={`cursor-pointer py-1 px-3 ${
            activeResource === resource.id 
              ? "bg-white/20 border-white" 
              : "bg-transparent border-white/20"
          } hover:bg-white/10 transition-colors`}
          onClick={() => onResourceSelect(resource.id)}
        >
          {resource.type === "PDF" && "PDF"}
          {resource.type === "PPT" && "PPT"}
          {resource.type === "VIDEO" && "Video"}
        </Badge>
      ))}
    </div>
  );
};

export default ResourceBadges;
