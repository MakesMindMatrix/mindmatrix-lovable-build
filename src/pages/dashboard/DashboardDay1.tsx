
import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ChatInterface } from "@/components/dashboard/chat/ChatInterface";
import { GoalWidget } from "@/components/dashboard/widgets/day1/GoalWidget";
import { TipWidget } from "@/components/dashboard/widgets/day1/TipWidget";

const DashboardDay1: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="h-full flex">
        {/* Main Chat Area */}
        <div className="flex-1 pr-4">
          <ChatInterface />
        </div>
        
        {/* Right Sidebar with Widgets */}
        <div className="w-80 space-y-4">
          <GoalWidget />
          <TipWidget />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardDay1;
