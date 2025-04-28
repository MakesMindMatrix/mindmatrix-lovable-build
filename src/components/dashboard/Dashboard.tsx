
import React from "react";
import { SidebarProvider, Sidebar, SidebarContent } from "@/components/ui/sidebar";
import CustomSidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f8f9fe]">
        <Sidebar>
          <SidebarContent>
            <CustomSidebar />
          </SidebarContent>
        </Sidebar>
        <MainContent />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
