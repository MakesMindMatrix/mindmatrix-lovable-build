
import React from "react";
import TabNavigation from "./TabNavigation";
import LabsContent from "./LabsContent";
import ResourcesContent from "../../components/LabSection/ResourcesContent"; // Using from LabSection
import NotificationsContent from "./NotificationsContent";

interface CodeLabPanelProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
  onVideoSelect?: (videoId: string) => void;
  onResourceTypeChange?: (isVideoResource: boolean) => void;
}

const CodeLabPanel: React.FC<CodeLabPanelProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage,
  onVideoSelect,
  onResourceTypeChange
}) => {
  return (
    <div className="h-full w-full flex flex-col bg-[#2D3044] rounded-lg overflow-hidden shadow-lg">
      <TabNavigation activeTab={activeTab} handleTabChange={handleTabChange} />
      
      <div className="flex-1 bg-[#3a3e57] p-4 overflow-hidden">
        {activeTab === "labs" && (
          <LabsContent 
            codeLanguage={codeLanguage} 
            setCodeLanguage={setCodeLanguage} 
          />
        )}
        {activeTab === "resources" && (
          <ResourcesContent 
            onVideoSelect={onVideoSelect} 
            onResourceTypeChange={onResourceTypeChange}
          />
        )}
        {activeTab === "notifications" && (
          <NotificationsContent />
        )}
      </div>
    </div>
  );
};

export default CodeLabPanel;
