
import React from "react";
import TabNavigation from "./TabNavigation";
import LabsContent from "./LabsContent";
import ResourcesContent from "./ResourcesContent";
import NotificationsContent from "../CodeLabPanel/NotificationsContent";  // Reusing this component

interface LabSectionProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
  onResourceTypeChange?: (isVideo: boolean) => void;
}

const LabSection: React.FC<LabSectionProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage,
  onResourceTypeChange
}) => {
  return (
    <div className="flex-1 flex flex-col rounded-lg overflow-hidden max-h-[45%]">
      {/* Tab navigation */}
      <TabNavigation activeTab={activeTab} handleTabChange={handleTabChange} />
      
      {/* Content area */}
      <div className="flex-1 bg-[#3a3e57] p-3 rounded-b-lg overflow-hidden">
        {activeTab === 'labs' && (
          <LabsContent 
            codeLanguage={codeLanguage} 
            setCodeLanguage={setCodeLanguage} 
          />
        )}
        
        {activeTab === 'resources' && (
          <ResourcesContent 
            onResourceTypeChange={onResourceTypeChange}
          />
        )}
        
        {activeTab === 'notifications' && (
          <NotificationsContent />
        )}
      </div>
    </div>
  );
};

export default LabSection;
