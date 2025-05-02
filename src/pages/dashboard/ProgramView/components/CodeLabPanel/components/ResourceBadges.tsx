
import React from "react";
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
        <button
          key={resource.id}
          className={`px-3 py-1 text-xs rounded-full cursor-pointer ${
            activeResource === resource.id 
              ? "bg-blue-600/50 border-white text-white" 
              : "bg-blue-600/20 text-white/90"
          }`}
          onClick={() => onResourceSelect(resource.id)}
        >
          {resource.title}
        </button>
      ))}
    </div>
  );
};

export default ResourceBadges;
