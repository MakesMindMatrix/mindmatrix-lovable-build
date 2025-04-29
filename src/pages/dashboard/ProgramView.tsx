
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EnrolledProgramCard } from "@/widgets/program_cards_design/program_enrolled_design";
import { Card, CardContent } from "@/components/ui/card";
import CourseDisplay from "@/components/course/CourseDisplay";
import { EnrolledProgramCard as EnrolledProgramCardType } from "@/widgets/program_cards_design/types";

// Sample data for the program card (this would ideally come from a state or context in a real app)
const sampleProgram: EnrolledProgramCardType = {
  program_image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  program_title: "Advanced Engineering Concepts",
  program_description: "Learn cutting-edge engineering principles and practical applications in this comprehensive program.",
  program_tag: "AEC",
  theme_color: "purple",
  modules_count: 8,
  duration_weeks: 12,
  views_count: 1245,
  progress_percent: 65,
  completed_modules: 5,
  in_progress_modules: 2,
  earned_points: 350
};

const ProgramView = () => {
  return (
    <Desktop activeTab="programs">
      <div className="flex w-full h-[calc(100vh-72px)] gap-6">
        {/* Left Section - Program Card */}
        <div className="w-1/4">
          <ScrollArea className="h-full">
            <div className="pr-4 pb-4">
              <EnrolledProgramCard program={sampleProgram} />
            </div>
          </ScrollArea>
        </div>
        
        {/* Middle Section - Course Content */}
        <div className="w-2/4">
          <ScrollArea className="h-full">
            <div className="pr-4 pb-4">
              <CourseDisplay />
            </div>
          </ScrollArea>
        </div>
        
        {/* Right Section - Additional Info */}
        <div className="w-1/4">
          <ScrollArea className="h-full">
            <div className="pl-2 pb-4">
              <h2 className="text-2xl font-semibold mb-6">Resources</h2>
              <p className="text-gray-600 mb-4">
                Supplementary materials and resources to help you succeed in this program.
              </p>
              
              {/* Placeholder resources - this would be replaced with actual resources */}
              <div className="space-y-4">
                {Array.from({length: 3}).map((_, i) => (
                  <Card key={i} className="border border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-medium">Resource {i + 1}</h3>
                      <p className="text-sm text-gray-500">
                        Description of this supplementary resource.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Desktop>
  );
};

export default ProgramView;
