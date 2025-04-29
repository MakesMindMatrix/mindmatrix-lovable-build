
import React from "react";
import { Button } from "@/components/ui/button";
import ResponseButton from "./ResponseButton";

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-[300px] bg-blue-600/70 p-6 flex flex-col">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/2bc45feb-b419-4732-a199-f3e3975af95d.png" 
            alt="Zuno" 
            className="w-8 h-8"
          />
        </div>
      </div>
      
      <div className="text-white">
        <p className="mb-6">
          Welcome to this lesson! We'll explore the fundamentals of neural networks. Are you ready to get started?
        </p>
        
        <div className="flex items-center mb-3 text-sm">
          <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M5 10l3 3 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Select to continue conversation</span>
        </div>
        
        <div className="space-y-3 mb-6">
          <ResponseButton label="Yes Lets Begin" />
          <ResponseButton label="Okay sure" />
        </div>
        
        <Button variant="default" className="w-full bg-blue-700 hover:bg-blue-800 text-white mb-4">
          Yes Lets Begin
        </Button>
        
        <div className="mt-auto">
          <p className="text-white mb-2">Zuno is typing...</p>
          <div className="bg-gray-700 rounded-lg p-3">
            <p className="text-blue-300">Type something...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
