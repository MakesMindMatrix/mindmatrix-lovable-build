
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UnenrolledProgramCard } from "@/widgets/program_cards_design/program_unenrolled_design";
import { EnrolledProgramCard } from "@/widgets/program_cards_design/program_enrolled_design";
import { EnrolledProgramCard as EnrolledProgramCardType, UnenrolledProgramCard as UnenrolledProgramCardType } from "@/widgets/program_cards_design/types";
import ProgressGraphCard from "@/widgets/day2onwards_widgets/progress_graph/ProgressGraphCard";
import ProgressTracker from "@/widgets/day2onwards_widgets/overall_progress/ProgressTracker";

// Sample data for demonstration
const enrolledPrograms: EnrolledProgramCardType[] = [
  {
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
  },
  {
    program_image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    program_title: "Data Science Foundations",
    program_description: "Master the fundamentals of data science with Python, statistics, and machine learning algorithms.",
    program_tag: "Certification",
    theme_color: "green",
    modules_count: 6,
    duration_weeks: 8,
    views_count: 2312,
    progress_percent: 42,
    completed_modules: 2,
    in_progress_modules: 1,
    earned_points: 180
  }
];

const unenrolledPrograms: UnenrolledProgramCardType[] = [
  {
    program_image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    program_title: "Computer Science Minor Degree",
    program_description: "Complement your major with a comprehensive minor in computer science fundamentals.",
    program_tag: "Minor Degree",
    theme_color: "blue",
    modules_count: 12,
    duration_weeks: 16,
    views_count: 3421
  },
  {
    program_image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    program_title: "Business Leadership Certification",
    program_description: "Develop essential leadership skills for modern business environments with practical case studies.",
    program_tag: "Certification",
    theme_color: "green",
    modules_count: 5,
    duration_weeks: 6,
    views_count: 1870
  },
  {
    program_image: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    program_title: "Artificial Intelligence AEC",
    program_description: "Explore advanced concepts in AI, neural networks, and their real-world applications.",
    program_tag: "AEC",
    theme_color: "purple",
    modules_count: 10,
    duration_weeks: 14,
    views_count: 2856
  },
  {
    program_image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    program_title: "Digital Marketing Certificate",
    program_description: "Learn modern digital marketing strategies including social media, SEO, and content marketing.",
    program_tag: "Certification",
    theme_color: "green",
    modules_count: 8,
    duration_weeks: 10,
    views_count: 2156
  }
];

const Programs = () => {
  return (
    <Desktop activeTab="programs">
      <div className="flex w-full h-[calc(100vh-72px)] p-0">
        {/* Left Panel - Programs (65%) */}
        <div className="w-[65%] bg-linear-to-r from-blue-500 to-blue-600 p-6 mr-4 rounded-xl">
          <ScrollArea className="h-full pr-4">
            {/* Enrolled Programs Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">My Enrolled Programs</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledPrograms.map((program, index) => (
                  <EnrolledProgramCard key={`enrolled-${index}`} program={program} />
                ))}
              </div>
            </div>
            
            {/* Recommended Programs Section */}
            <div className="mb-8 pb-4">
              <h2 className="text-2xl font-semibold mb-6 text-white">My Recommended Programs</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {unenrolledPrograms.map((program, index) => (
                  <UnenrolledProgramCard key={`unenrolled-${index}`} program={program} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
        
        {/* Right Panel - Progress Summary (30%) - Shifted right to align with top toolbar */}
        <div className="w-[30%] bg-linear-to-r from-blue-500 to-blue-600 p-6 rounded-xl ml-4">
          <h2 className="text-2xl font-semibold mb-6 text-white">Progress Summary</h2>
          <div className="space-y-6">
            {/* Progress Graph */}
            <ProgressGraphCard />
            
            {/* Progress Tracker */}
            <ProgressTracker />
          </div>
        </div>
      </div>
    </Desktop>
  );
};

export default Programs;
