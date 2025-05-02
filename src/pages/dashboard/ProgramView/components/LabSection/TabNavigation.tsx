
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
    <div className="flex bg-[#2D3474] rounded-t-lg text-center border-b border-[#3f4481]">
      <Button 
        variant="ghost" 
        className={`${activeTab === 'labs' ? 'bg-[#545891]/80 text-white' : 'text-white/90'} rounded-none px-6 py-2 h-auto flex-1`}
        onClick={() => handleTabChange('labs')}
      >
        <span className="text-base font-medium">Labs</span>
      </Button>
      <Button 
        variant="ghost" 
        className={`${activeTab === 'resources' ? 'bg-[#545891]/80 text-white' : 'text-white/90'} rounded-none px-6 py-2 h-auto flex-1`}
        onClick={() => handleTabChange('resources')}
      >
        <span className="text-base font-medium">Resources</span>
      </Button>
      <Button 
        variant="ghost" 
        className={`${activeTab === 'notifications' ? 'bg-[#545891]/80 text-white' : 'text-white/90'} rounded-none px-6 py-2 h-auto flex-1`}
        onClick={() => handleTabChange('notifications')}
      >
        <span className="text-base font-medium">Notifications</span>
      </Button>
    </div>
  );
};

export default TabNavigation;
