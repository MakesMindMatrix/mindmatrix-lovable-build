
import React from "react";

interface ResourceTypeSelectorProps {
  resourceTypes: string[];
  activeResourceType: string;
  onResourceTypeSelect: (resourceType: string) => void;
}

const ResourceTypeSelector: React.FC<ResourceTypeSelectorProps> = ({
  resourceTypes,
  activeResourceType,
  onResourceTypeSelect
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-2 bg-[#425094]/60 p-2 rounded-lg">
      {resourceTypes.map((type) => (
        <button
          key={type}
          className={`px-3 py-1 text-xs rounded-full ${
            activeResourceType === type 
              ? "bg-white text-blue-600" 
              : "bg-blue-600/20 text-white"
          }`}
          onClick={() => onResourceTypeSelect(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default ResourceTypeSelector;
