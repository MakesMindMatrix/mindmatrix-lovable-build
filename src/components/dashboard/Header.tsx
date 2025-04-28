
import React from "react";
import { Trophy, Clock, CheckSquare, Home } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header: React.FC = () => {
  return (
    <header className="flex items-center px-8 py-3.5 w-full bg-blue-700 rounded-3xl max-md:px-5">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center text-2xl font-semibold text-white">
          <Home className="w-7 h-7" />
          <h2>Home</h2>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 text-base font-semibold text-white">
              <Trophy className="w-5 h-5" />
              <span>50Pts</span>
            </div>
            <div className="flex items-center gap-2.5 text-base font-semibold text-white">
              <Clock className="w-5 h-5" />
              <span>1hr30min</span>
            </div>
            <div className="flex items-center gap-2.5 text-base font-semibold text-white">
              <CheckSquare className="w-5 h-5" />
              <span>0/4 completed</span>
            </div>
          </div>
          
          <Avatar className="w-[45px] h-[45px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
