
import React from "react";
import { ArrowRight } from "lucide-react";

interface ChatOptionProps {
  text: string;
  onClick?: () => void;
  selected?: boolean;
}

const ChatOption: React.FC<ChatOptionProps> = ({ text, onClick, selected }) => {
  return (
    <div className="w-full">
      <div 
        className={`flex justify-between items-center w-full py-3 px-4 ${
          selected ? 'bg-white/20' : 'bg-white/10'
        } hover:bg-white/20 transition-colors rounded-lg cursor-pointer`} 
        onClick={onClick}
      >
        <button 
          className="text-white hover:text-white/90 text-left text-base"
        >
          {text}
        </button>
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default ChatOption;
