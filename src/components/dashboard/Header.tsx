
import React from "react";
import { Home, Trophy, Clock, CheckSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-blue-600 px-6 py-3 rounded-2xl text-white">
      <div className="flex items-center gap-3">
        <Home className="w-6 h-6" />
        <h1 className="text-xl font-semibold">Home</h1>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">50Pts</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">1hr30min</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5" />
            <span className="font-semibold">0/4 completed</span>
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

export default Header;
