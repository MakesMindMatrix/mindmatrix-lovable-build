
import React, { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
