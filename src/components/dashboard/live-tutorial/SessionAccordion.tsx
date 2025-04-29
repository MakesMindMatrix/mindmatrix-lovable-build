
import React from "react";

interface SessionAccordionProps {
  title: string;
  isActive: boolean;
}

const SessionAccordion: React.FC<SessionAccordionProps> = ({ title, isActive }) => {
  return (
    <div className={`px-3 py-2 rounded-lg ${isActive ? 'bg-white/20' : ''}`}>
      <div className="flex items-center text-white">
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">
          <span className="text-white text-xs">S</span>
        </div>
        <span>{title}</span>
        <svg className="h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path d={isActive ? "M5 15l5-5 5 5" : "M5 7l5 5 5-5"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default SessionAccordion;
