
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";
import ChatInterface from "./ChatInterface";

function Desktop121() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard-programView");
  };

  return (
    <div className="flex h-full w-full gap-4 bg-transparent">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Back button and title */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
            onClick={handleBackClick}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl text-white font-medium">Live Tutorial Session</h1>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
}

export default Desktop121;
