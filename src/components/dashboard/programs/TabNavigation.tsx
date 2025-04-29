
import React from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ 
  activeTab, 
  onTabChange 
}) => {
  return (
    <div className="flex border-b border-white/20 mb-6 justify-center">
      <button 
        className={`px-8 py-2 text-white ${activeTab === 'mentor' ? 'border-b-2 border-white font-medium' : 'opacity-80'}`}
        onClick={() => onTabChange('mentor')}
      >
        Mentor
      </button>
      <button 
        className={`px-8 py-2 text-white ${activeTab === 'courses' ? 'border-b-2 border-white font-medium' : 'opacity-80'}`}
        onClick={() => onTabChange('courses')}
      >
        Courses
      </button>
    </div>
  );
};

export default TabNavigation;
