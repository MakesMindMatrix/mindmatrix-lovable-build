
import React from "react";
import { useNavigate } from "react-router-dom";
import ProgramSidebar from "./program_dashboard/Sidebar";
import ProgramHeader from "./program_dashboard/ProgramHeader";
import CurrentlyViewingSection from "./program_dashboard/CurrentlyViewingSection";
import CoursesList from "./program_dashboard/CoursesList";
import AssistantSection from "./program_dashboard/AssistantSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";

function ProgramDashboard() {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <main className="flex flex-col h-screen bg-white">
      {/* Fixed layout with sidebar and main content */}
      <div className="flex h-full">
        {/* Fixed left sidebar */}
        <div className="w-[56px] z-50">
          <ProgramSidebar />
        </div>
        
        {/* Main content area with fixed header and scrollable content */}
        <div className="flex flex-col w-full pl-[56px]">
          {/* Fixed floating header */}
          <div className="sticky top-0 z-20 px-4 pt-3.5 w-full">
            <ProgramHeader />
          </div>
          
          {/* Fixed background with blue gradient */}
          <div className="fixed top-[80px] left-[56px] right-0 bottom-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-tl-2xl z-0" />
          
          {/* Scrollable content area */}
          <div className="relative z-10 px-4 pt-2.5 mt-2.5 h-[calc(100vh-80px)]">
            <ScrollArea className="h-full rounded-2xl overflow-hidden">
              <div className="flex flex-col p-6 pb-20">
                <div className="flex items-start mb-6">
                  <button 
                    className="flex justify-center items-center p-2 border-2 border-white border-solid rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    onClick={handleBackClick}
                  >
                    <ArrowLeft className="h-4 w-4 text-white" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-10 justify-between w-full">
                  <div className="flex flex-wrap gap-10 items-start">
                    <CurrentlyViewingSection />
                    <CoursesList />
                  </div>
                  <AssistantSection />
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProgramDashboard;
