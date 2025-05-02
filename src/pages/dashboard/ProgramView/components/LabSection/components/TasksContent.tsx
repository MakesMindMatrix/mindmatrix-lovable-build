
import React from "react";
import { ListTodo } from "lucide-react";

const TasksContent: React.FC = () => {
  return (
    <div className="bg-white/5 p-2 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <ListTodo className="h-4 w-4 text-amber-300" />
        <h3 className="text-amber-200 text-xs font-medium">Tasks</h3>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-4 w-4 rounded-full border border-amber-400/50 flex items-center justify-center">
            <div className="h-1.5 w-1.5 bg-amber-400 rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Complete Introduction Exercise</p>
            <p className="text-[10px] text-white/60">Due: Today</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-4 w-4 rounded-full border border-white/30 flex items-center justify-center">
            <div className="h-1.5 w-1.5 bg-transparent rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Submit Lab Assignment 1</p>
            <p className="text-[10px] text-white/60">Due: Tomorrow</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
          <div className="h-4 w-4 rounded-full border border-white/30 flex items-center justify-center">
            <div className="h-1.5 w-1.5 bg-transparent rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white">Complete Quiz</p>
            <p className="text-[10px] text-white/60">Due: Friday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksContent;
