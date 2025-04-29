
import React, { useState } from "react";

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mentor" | "courses">("courses");
  
  return (
    <div className="flex w-full justify-center border-b border-white/30">
      <div className="flex text-sm">
        <button 
          onClick={() => setActiveTab("mentor")}
          className={`px-6 py-3 font-medium transition-colors ${activeTab === "mentor" ? "text-white border-b-2 border-white" : "text-white/60 hover:text-white/80"}`}
        >
          Mentor
        </button>
        <button 
          onClick={() => setActiveTab("courses")}
          className={`px-6 py-3 font-medium transition-colors ${activeTab === "courses" ? "text-white border-b-2 border-white" : "text-white/60 hover:text-white/80"}`}
        >
          Courses
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
