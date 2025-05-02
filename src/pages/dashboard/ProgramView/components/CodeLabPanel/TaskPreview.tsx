
import React from "react";
import { ListCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Task } from "./types";

interface TaskPreviewProps {
  task: Task;
}

const TaskPreview: React.FC<TaskPreviewProps> = ({ task }) => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <ListCheck className="h-5 w-5 text-amber-400" />
          <div>
            <h3 className="font-medium text-white">{task.title}</h3>
            <p className="text-xs text-white/60">Due: {task.due}</p>
          </div>
        </div>
        <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white h-8">
          Mark as Complete
        </Button>
      </div>
      
      {/* Task details */}
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h4 className="text-gray-800 font-medium mb-2">Task Description</h4>
          <p className="text-gray-600 text-sm">
            Complete the assigned task related to Python programming concepts covered in the session.
            Make sure to follow all instructions and submit your work before the deadline.
          </p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-gray-800 font-medium mb-2">Requirements</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            <li>Implement all required functions</li>
            <li>Include proper documentation</li>
            <li>Test your code with the provided test cases</li>
            <li>Submit as a single Python file</li>
          </ul>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Start Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskPreview;
