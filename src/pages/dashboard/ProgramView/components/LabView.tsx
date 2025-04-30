
import React from "react";
import { Eye } from "lucide-react";
import ModulesSidebar from "./ModulesSidebar";
import LabContent from "./LabContent";
import ChatSidebar from "./ChatSidebar";

interface LabViewProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
}

const LabView: React.FC<LabViewProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage
}) => {
  return (
    <div className="flex flex-1 gap-4 h-[calc(100%-64px)]">
      {/* Left sidebar - Modules */}
      <ModulesSidebar />
      
      {/* Middle section - Video and Lab */}
      <LabContent 
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        codeLanguage={codeLanguage}
        setCodeLanguage={setCodeLanguage}
      />
      
      {/* Right sidebar - Chat */}
      <ChatSidebar />
    </div>
  );
};

export default LabView;
