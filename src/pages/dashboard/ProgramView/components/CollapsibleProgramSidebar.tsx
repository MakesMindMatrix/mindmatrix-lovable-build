
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Video, FileText, Clipboard, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface CollapsibleProgramSidebarProps {
  onBackClick: () => void;
  currentComponent: string;
  onComponentClick: (sessionId: number, componentId: string) => void;
}

const CollapsibleProgramSidebar: React.FC<CollapsibleProgramSidebarProps> = ({
  onBackClick,
  currentComponent,
  onComponentClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSession] = useState(1);

  // Map of component IDs to icons
  const componentIcons = {
    learning: BookOpen,
    preread: FileText, 
    tutorial: Video,
    tasks: Clipboard,
    assessment: PenSquare
  };

  // Map of component IDs to display names
  const componentLabels = {
    learning: "Learning Module",
    preread: "Pre-session Reference", 
    tutorial: "Live Tutorial",
    tasks: "Tasks",
    assessment: "Assessment"
  };

  // Component data
  const components = [
    { id: "learning", label: componentLabels.learning, Icon: componentIcons.learning },
    { id: "preread", label: componentLabels.preread, Icon: componentIcons.preread },
    { id: "tutorial", label: componentLabels.tutorial, Icon: componentIcons.tutorial },
    { id: "tasks", label: componentLabels.tasks, Icon: componentIcons.tasks },
    { id: "assessment", label: componentLabels.assessment, Icon: componentIcons.assessment },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-20 h-[calc(100vh-80px)] z-30 transition-all duration-300 ease-in-out overflow-visible",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div 
        className={cn(
          "flex flex-col h-full bg-black/80 text-white backdrop-blur-sm p-2 rounded-tr-xl rounded-br-xl",
          isExpanded ? "w-64" : "w-16"
        )}
      >
        {/* Back Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="self-start mb-6 mt-2 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10"
          onClick={onBackClick}
        >
          <ArrowLeft className="h-5 w-5" />
          {isExpanded && <span className="ml-2 sr-only">Back</span>}
        </Button>
        
        {/* Navigation Items */}
        <div className="flex flex-col space-y-4">
          {components.map((component) => {
            const isActive = currentComponent === component.id;
            const { Icon } = component;
            
            return (
              <button
                key={component.id}
                onClick={() => onComponentClick(currentSession, component.id)}
                className={cn(
                  "flex items-center p-2 rounded-lg transition-colors text-left",
                  isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-black/40"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {isExpanded && (
                  <span className="ml-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {component.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleProgramSidebar;
