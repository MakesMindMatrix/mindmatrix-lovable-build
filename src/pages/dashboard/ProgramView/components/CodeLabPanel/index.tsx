
import React from "react";
import TabNavigation from "./TabNavigation";
import LabsContent from "./LabsContent";
import ResourcesContent from "./ResourcesContent";
import NotificationsContent from "./NotificationsContent";

interface CodeLabPanelProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
  onVideoSelect?: (videoId: string) => void;
}

const CodeLabPanel: React.FC<CodeLabPanelProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage,
  onVideoSelect
}) => {
  return (
    <div className="flex-1 backdrop-blur-xl bg-gradient-to-br from-[#2A3A80]/70 to-[#1A2C6B]/60 border border-white/10 rounded-lg flex flex-col overflow-hidden z-10 h-full shadow-lg">
      {/* Tab navigation */}
      <TabNavigation activeTab={activeTab} handleTabChange={handleTabChange} />
      
      {/* Content area */}
      <div className="flex-1 p-3 rounded-b-lg overflow-hidden flex flex-col">
        {activeTab === 'labs' && (
          <LabsContent codeLanguage={codeLanguage} setCodeLanguage={setCodeLanguage} />
        )}
        
        {activeTab === 'resources' && (
          <ResourcesContent onVideoSelect={onVideoSelect} />
        )}
        
        {activeTab === 'notifications' && (
          <NotificationsContent />
        )}
      </div>
    </div>
  );
};

export default CodeLabPanel;
