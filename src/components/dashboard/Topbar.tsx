
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export const Topbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center space-x-8">
        {/* Points Earned */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
            <span className="text-yellow-600 text-sm font-bold">🏆</span>
          </div>
          <div className="ml-2">
            <p className="text-xs text-gray-500">Points Earned</p>
            <p className="font-semibold text-gray-800">50 Pts</p>
          </div>
        </div>
        
        {/* Time Invested */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 text-sm font-bold">⏱️</span>
          </div>
          <div className="ml-2">
            <p className="text-xs text-gray-500">Time Invested Today</p>
            <p className="font-semibold text-gray-800">1hr 30min</p>
          </div>
        </div>
        
        {/* Tasks Completed */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-sm font-bold">✓</span>
          </div>
          <div className="ml-2">
            <p className="text-xs text-gray-500">Tasks Completed</p>
            <p className="font-semibold text-gray-800">0/4 completed</p>
          </div>
        </div>
      </div>
      
      {/* User Profile */}
      <div className="flex items-center space-x-4">
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
          <Bell className="w-5 h-5" />
        </button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
