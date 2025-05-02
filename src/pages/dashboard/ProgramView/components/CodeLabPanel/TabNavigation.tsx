
import React from "react";
import { Button } from "@/components/ui/button";

interface TabNavigationProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  handleTabChange
}) => {
  return (
    <div className="flex bg-[#1E2D6F]/80 backdrop-blur-md rounded-t-lg border-b border-white/10">
      <Button 
        variant="ghost" 
        className={`${activeTab === 'labs' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
        onClick={() => handleTabChange('labs')}
      >
        <span className="text-sm">Labs</span>
      </Button>
      <Button 
        variant="ghost" 
        className={`${activeTab === 'resources' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
        onClick={() => handleTabChange('resources')}
      >
        <span className="text-sm">Resources</span>
      </Button>
      <Button 
        variant="ghost" 
        className={`${activeTab === 'notifications' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
        onClick={() => handleTabChange('notifications')}
      >
        <span className="text-sm">Notifications</span>
      </Button>
    </div>
  );
};

export default TabNavigation;
