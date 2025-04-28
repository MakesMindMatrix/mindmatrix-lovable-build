
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-5 justify-between items-center self-stretch my-auto min-w-60 w-[1416px]">
      <Sidebar />
      <MainContent />
    </main>
  );
};

export default Dashboard;
