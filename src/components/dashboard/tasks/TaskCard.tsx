
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowUpRight, CheckCircle, MoveVertical } from "lucide-react";
import { Task } from "@/types/tasks";

interface TaskCardProps {
  task: Task;
  actionLabel?: string;
  actionVariant?: "primary" | "secondary";
  showCompletedBadge?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  actionLabel, 
  actionVariant = "secondary",
  showCompletedBadge = false
}) => {
  return (
    <Card className="bg-white/20 backdrop-blur-sm border border-white/30 overflow-hidden hover:shadow-lg transition-all duration-200 group">
      <div className="p-4">
        {/* Status Badge and Drag Handle */}
        <div className="mb-3 flex items-center justify-between">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">
            {task.status}
          </span>
          <MoveVertical className="h-4 w-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Task Content */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
            <FileText className="h-5 w-5 text-amber-800" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-white font-medium mb-1">{task.title}</h4>
            <p className="text-white/80 text-sm mb-3">{task.description}</p>
            
            {/* Task Metadata */}
            <div className="flex items-center text-xs text-white/90 mb-3 gap-2">
              <span>{task.points} PTS</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-1"></span>
                {task.type}
              </span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-1"></span>
                Started on {task.startDate}
              </span>
            </div>
            
            {/* Actions */}
            <div className="flex justify-between items-center">
              <Button 
                variant="outline"
                size="sm"
                className="bg-white/20 backdrop-blur-sm text-gray-800 font-medium hover:bg-white/30"
              >
                Know More <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
              
              {actionLabel && (
                <Button 
                  variant={actionVariant === "primary" ? "default" : "outline"}
                  size="sm"
                  className={actionVariant === "primary" ? 
                    "bg-blue-600 hover:bg-blue-700 text-white" : 
                    "text-white border-white/30 hover:bg-white/10"
                  }
                >
                  {actionLabel} <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              )}
              
              {showCompletedBadge && (
                <div className="flex items-center text-green-400 font-medium">
                  Completed <CheckCircle className="ml-1 h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
