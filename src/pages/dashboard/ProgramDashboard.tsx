
import React from "react";
import { useNavigate } from "react-router-dom";
import ProgramSidebar from "./program_dashboard/Sidebar";
import ProgramHeader from "./program_dashboard/ProgramHeader";
import CurrentlyViewingSection from "./program_dashboard/CurrentlyViewingSection";
import CoursesList from "./program_dashboard/CoursesList";
import AssistantSection from "./program_dashboard/AssistantSection";

function ProgramDashboard() {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <main className="flex overflow-hidden flex-col justify-center px-4 py-3.5 bg-white min-h-screen">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <ProgramSidebar />
        <div className="self-stretch my-auto min-w-60 w-[1352px] max-md:max-w-full">
          <ProgramHeader />
          <div className="flex overflow-hidden flex-wrap gap-6 px-10 pt-3.5 pb-px mt-2.5 w-full bg-blue-200 rounded-2xl max-md:px-5 max-md:max-w-full">
            <button 
              className="flex flex-col justify-center self-start px-2 py-2.5 border-2 border-white border-solid rounded-[100px]"
              onClick={handleBackClick}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/fcc5b6e8ec73639d67c1da65afeda67bb4da4274?placeholderIfAbsent=true"
                className="object-contain aspect-[1.18] w-[13px]"
                alt="Back button"
              />
            </button>
            <div className="flex flex-auto gap-10 items-end mt-1.5 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 justify-between items-end min-w-60 w-[1217px] max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-start min-w-60 max-md:max-w-full">
                  <CurrentlyViewingSection />
                  <CoursesList />
                </div>
                <AssistantSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProgramDashboard;
