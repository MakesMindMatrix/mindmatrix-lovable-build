
import React, { useState } from "react";
import { Home, GraduationCap, BookOpen, List, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200",
        isActive 
          ? "bg-blue-200 text-blue-600" 
          : "hover:bg-gray-100 text-gray-600"
      )}
    >
      <div className={cn(
        "w-8 h-8 flex items-center justify-center rounded-md",
        isActive ? "bg-blue-100" : ""
      )}>
        {icon}
      </div>
      <span className="whitespace-nowrap opacity-100 transition-opacity duration-200 text-sm font-medium">
        {label}
      </span>
    </div>
  );
};

interface CollapsibleProgramSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const CollapsibleProgramSidebar: React.FC<CollapsibleProgramSidebarProps> = ({
  activeTab = "learning",
  onTabChange
}) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
    
    // Handle navigation based on tab
    if (tabId === "learning") {
      navigate("/program-course-LearningModule");
    } else if (tabId === "tutorial") {
      navigate("/program-course-LiveTutorial");
    } else {
      toast.info(`Navigating to ${tabId} tab`);
    }
  };
  
  return (
    <div 
      className={cn(
        "h-full bg-white border-r border-gray-200 transition-all duration-300 flex flex-col py-4",
        expanded ? "w-[200px]" : "w-[60px]"
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Logo or Program icon */}
      <div className="px-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
          <div className="w-4 h-2 border-t-2 border-l-2 border-r-2 border-white rounded-t-full"></div>
        </div>
      </div>
      
      {/* Navigation items */}
      <div className="flex-1 flex flex-col space-y-2 px-3">
        <NavItem 
          icon={<Home size={20} />} 
          label="Home" 
          onClick={() => handleTabClick("home")}
          isActive={activeTab === "home"}
        />
        <NavItem 
          icon={<GraduationCap size={20} />} 
          label="Learning" 
          onClick={() => handleTabClick("learning")}
          isActive={activeTab === "learning"}
        />
        <NavItem 
          icon={<BookOpen size={20} />} 
          label="Tutorial" 
          onClick={() => handleTabClick("tutorial")}
          isActive={activeTab === "tutorial"}
        />
        <NavItem 
          icon={<List size={20} />} 
          label="Tasks" 
          onClick={() => handleTabClick("tasks")}
          isActive={activeTab === "tasks"}
        />
      </div>
      
      {/* Bottom settings */}
      <div className="px-3 mt-auto">
        <NavItem 
          icon={<Settings size={20} />} 
          label="Settings" 
          onClick={() => handleTabClick("settings")}
        />
      </div>
    </div>
  );
};

export default CollapsibleProgramSidebar;
