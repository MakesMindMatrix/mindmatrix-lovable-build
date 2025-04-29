
import React from "react";
import { useNavigate } from "react-router-dom";
import ProgramSidebar from "./program_dashboard/Sidebar";
import ProgramHeader from "./program_dashboard/ProgramHeader";
import CurrentlyViewingSection from "./program_dashboard/CurrentlyViewingSection";
import CoursesList from "./program_dashboard/CoursesList";
import AssistantSection from "./program_dashboard/AssistantSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/dashboard/day1/Header";

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
          {/* Fixed top header from day1 Header component for consistency */}
          <div className="sticky top-0 z-30 px-3 pt-2.5">
            <Header />
          </div>
          
          {/* Secondary fixed program-specific header */}
          <div className="sticky top-[80px] z-20 px-4 pt-3.5 w-full">
            <ProgramHeader />
          </div>
          
          {/* Fixed background with blue gradient */}
          <div className="fixed top-[146px] left-[56px] right-0 bottom-0 bg-gradient-to-b from-blue-200 via-blue-300/70 to-blue-400/50 z-0" />
          
          {/* Three-column layout inside a scrollable container */}
          <div className="relative z-10 px-4 pt-2.5 mt-2.5 h-[calc(100vh-146px)]">
            <div className="flex h-full">
              {/* Left column: Currently Viewing (fixed) */}
              <div className="w-[346px] h-full pr-5 flex-shrink-0">
                <div className="h-full overflow-hidden">
                  <div className="flex items-start mb-6">
                    <button 
                      className="flex justify-center items-center p-2 border-2 border-white border-solid rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      onClick={handleBackClick}
                    >
                      <ArrowLeft className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  <CurrentlyViewingSection />
                </div>
              </div>
              
              {/* Middle column: Course navigation and scrollable cards */}
              <div className="w-[445px] h-full px-5 flex-shrink-0">
                <div className="h-full flex flex-col">
                  <CoursesList />
                </div>
              </div>
              
              {/* Right column: Assistant (fixed) */}
              <div className="w-[273px] h-full pl-5 flex-shrink-0">
                <div className="h-full overflow-hidden">
                  <AssistantSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProgramDashboard;
