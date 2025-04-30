
import React from "react";
import { ArrowRight } from "lucide-react";

interface ChatOptionProps {
  text: string;
  onClick?: () => void;
}

const ChatOption: React.FC<ChatOptionProps> = ({ text, onClick }) => {
  return (
    <div className="w-full">
      <div className="border-t border-white/20 my-3"></div>
      <div className="flex justify-between items-center w-full py-2">
        <button 
          className="text-white hover:text-white/80 text-left text-lg"
          onClick={onClick}
        >
          {text}
        </button>
        <div 
          className="flex justify-center items-center w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer"
          onClick={onClick}
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ChatOption;
