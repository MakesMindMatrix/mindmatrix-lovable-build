
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { Card, CardContent } from "@/components/ui/card";
import ProgressGraphCard from "@/widgets/day2onwards_widgets/progress_graph";
import ProgressTracker from "@/widgets/day2onwards_widgets/overall_progress/ProgressTracker";

const Programs = () => {
  return (
    <Desktop activeTab="programs">
      <div className="p-6 bg-blue-100 min-h-screen">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Progress Summary</h2>
          <div className="flex gap-6">
            <ProgressGraphCard />
            <ProgressTracker />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Current Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program cards will go here in future implementation */}
          </div>
        </div>
      </div>
    </Desktop>
  );
};

export default Programs;
