
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HelpSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
        <img src="/lovable-uploads/2bc45feb-b419-4732-a199-f3e3975af95d.png" alt="Courses icon" className="w-8 h-8" />
      </div>
      <p className="text-white text-center mb-6">
        These courses will help you upskill at the areas you are currently still yet to improve at
      </p>
      
      <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full mb-4">
        <span className="flex-1 text-left">Select to continue conversation</span>
      </Button>
      
      <div className="w-full space-y-2">
        <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full justify-between">
          <span>i want to know more</span>
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </Button>
        <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full justify-between">
          <span>are you sure?</span>
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </Button>
      </div>
      
      <div className="mt-6 w-full">
        <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
          <p className="text-white">Zuno is typing...</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-3 mt-4">
          <p className="text-blue-300">Type something...</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
