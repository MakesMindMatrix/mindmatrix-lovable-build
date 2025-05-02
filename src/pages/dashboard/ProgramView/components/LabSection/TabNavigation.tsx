
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
    <div className="flex bg-[#2D3044] rounded-t-lg">
      <Button 
        variant="ghost" 
        className={`${activeTab === 'labs' ? 'bg-[#3a3e57] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto`}
        onClick={() => handleTabChange('labs')}
      >
        <span className="ml-2 text-sm">Labs</span>
      </Button>
      <Button 
        variant="ghost" 
        className={`${activeTab === 'resources' ? 'bg-[#3a3e57] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto`}
        onClick={() => handleTabChange('resources')}
      >
        <span className="ml-2 text-sm">Resources</span>
      </Button>
      <Button 
        variant="ghost" 
        className={`${activeTab === 'notifications' ? 'bg-[#3a3e57] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto`}
        onClick={() => handleTabChange('notifications')}
      >
        <span className="ml-2 text-sm">Notifications</span>
      </Button>
    </div>
  );
};

export default TabNavigation;
