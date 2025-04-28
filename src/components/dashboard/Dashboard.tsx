
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center px-3 py-2.5 bg-white">
      <div className="flex justify-between items-center w-full max-md:max-w-full">
        <div className="flex justify-between items-center self-stretch my-auto min-w-60 w-[1416px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-center self-stretch my-auto min-w-60 w-[1416px]">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
