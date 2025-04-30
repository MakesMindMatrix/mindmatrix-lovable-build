
import React from "react";
import { ArrowRight } from "lucide-react";

interface ChatOptionProps {
  text: string;
  onClick?: () => void;
}

const ChatOption: React.FC<ChatOptionProps> = ({ text, onClick }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full py-2.5 px-3 bg-white/10 hover:bg-white/15 transition-colors rounded-lg cursor-pointer" onClick={onClick}>
        <button 
          className="text-white hover:text-white/90 text-left text-base"
        >
          {text}
        </button>
        <div 
          className="flex justify-center items-center w-7 h-7 rounded-full bg-white/20 hover:bg-white/30"
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ChatOption;
