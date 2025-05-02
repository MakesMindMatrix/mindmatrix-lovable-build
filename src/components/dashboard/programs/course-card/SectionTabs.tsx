
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface SectionTabsProps {
  activeSection: string | null;
  onSectionChange: (section: string) => void;
}

const SectionTabs: React.FC<SectionTabsProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  return (
    <div className="flex gap-2 mb-4">
      <Button 
        size="sm"
        variant={activeSection === "references" ? "default" : "outline"}
        className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
          activeSection === "references" 
            ? "bg-blue-500 hover:bg-blue-600 text-white" 
            : "bg-transparent border-white/20 text-white hover:bg-white/10"
        }`}
        onClick={() => onSectionChange("references")}
      >
        <FileText className="h-3.5 w-3.5 mr-1.5" />
        References
      </Button>
      <Button 
        size="sm"
        variant={activeSection === "tasks" ? "default" : "outline"}
        className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
          activeSection === "tasks" 
            ? "bg-amber-500 hover:bg-amber-600 text-white" 
            : "bg-transparent border-white/20 text-white hover:bg-white/10"
        }`}
        onClick={() => onSectionChange("tasks")}
      >
        Tasks
      </Button>
    </div>
  );
};

export default SectionTabs;
