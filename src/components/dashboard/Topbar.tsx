
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Clock, CheckSquare } from "lucide-react";

export const Topbar: React.FC = () => {
  return (
    <header className="bg-blue-600 px-6 py-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <HomeIcon className="w-6 h-6" />
        <h1 className="text-xl font-semibold">Home</h1>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span>50Pts</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>1hr30min</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5" />
            <span>0/4 completed</span>
          </div>
        </div>
        
        <Avatar className="w-10 h-10 border-2 border-white">
          <AvatarImage src="/placeholder-avatar.png" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
