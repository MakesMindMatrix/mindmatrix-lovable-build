
import React from "react";
import { Book, FileText, ListCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ResourceTabs: React.FC<ResourceTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 items-center">
      <Button 
        size="sm"
        variant="outline"
        className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
          activeTab === "learning" 
            ? "bg-white text-blue-600" 
            : "bg-transparent border-white/20 text-white hover:bg-white/10"
        }`}
        onClick={() => onTabChange("learning")}
      >
        <Book className="h-3.5 w-3.5 mr-1.5" />
        Learning Module
      </Button>
      <Button 
        size="sm"
        variant="outline"
        className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
          activeTab === "pre-session" 
            ? "bg-white text-blue-600" 
            : "bg-transparent border-white/20 text-white hover:bg-white/10"
        }`}
        onClick={() => onTabChange("pre-session")}
      >
        <FileText className="h-3.5 w-3.5 mr-1.5" />
        Pre Session
      </Button>
      <Button 
        size="sm"
        variant="outline"
        className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
          activeTab === "post-session" 
            ? "bg-white text-blue-600" 
            : "bg-transparent border-white/20 text-white hover:bg-white/10"
        }`}
        onClick={() => onTabChange("post-session")}
      >
        <FileText className="h-3.5 w-3.5 mr-1.5" />
        Post Session
      </Button>
      <Button 
        size="sm"
        variant="outline"
        className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
          activeTab === "tasks" 
            ? "bg-white text-blue-600" 
            : "bg-transparent border-white/20 text-white hover:bg-white/10"
        }`}
        onClick={() => onTabChange("tasks")}
      >
        <ListCheck className="h-3.5 w-3.5 mr-1.5" />
        To-Dos
      </Button>
    </div>
  );
};

export default ResourceTabs;
