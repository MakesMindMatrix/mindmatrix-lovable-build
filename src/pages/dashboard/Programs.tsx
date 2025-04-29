
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { Card, CardContent } from "@/components/ui/card";
import ProgressGraphCard from "@/widgets/day2onwards_widgets/progress_graph";
import ProgressTracker from "@/widgets/day2onwards_widgets/overall_progress/ProgressTracker";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { ScrollArea } from "@/components/ui/scroll-area";

const Programs = () => {
  return (
    <Desktop activeTab="programs">
      <GradientBackground className="h-[calc(100vh-120px)] rounded-3xl">
        <ScrollArea className="h-full py-6 px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Progress Summary</h2>
            <div className="flex gap-6">
              <ProgressGraphCard />
              <ProgressTracker />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">My Current Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Program cards will go here in future implementation */}
            </div>
          </div>
        </ScrollArea>
      </GradientBackground>
    </Desktop>
  );
};

export default Programs;
