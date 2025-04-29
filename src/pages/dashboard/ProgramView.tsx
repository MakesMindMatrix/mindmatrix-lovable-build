
import React, { useState } from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { useLocation, useNavigate } from "react-router-dom";
import { EnrolledProgramCard } from "@/widgets/program_cards_design/program_enrolled_design";
import { UnenrolledProgramCard } from "@/widgets/program_cards_design/program_unenrolled_design";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { EnrolledProgramCard as EnrolledProgramCardType, UnenrolledProgramCard as UnenrolledProgramCardType } from "@/widgets/program_cards_design/types";
import { ArrowLeft, Square, Clock, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

// Course data type
interface Course {
  id: number;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  badge: string;
}

// Mentor data type
interface Mentor {
  name: string;
  role: string;
  avatar: string;
  experience: string;
  workHistory: string;
  expertise: string[];
  about: string;
}

// Mock mentor data
const mentor: Mentor = {
  name: "Sushmita Arora",
  role: "Senior Front end Developer",
  avatar: "/lovable-uploads/39611135-2d47-4f62-9b08-c1778217f3b4.png",
  experience: "10+ years in Web Development",
  workHistory: "Google, Microsoft, Freelance",
  expertise: ["Frontend Architecture", "UI/UX Implementation", "JavaScript Frameworks"],
  about: "Sarah is a passionate web developer with over a decade of experience building websites and applications. She specializes in frontend technologies and loves teaching beginners the fundamentals of web development."
};

// Mock courses data
const courses: Course[] = [
  {
    id: 1,
    title: "Course Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hours: 2,
    sessions: 7,
    badge: "Course 1"
  },
  {
    id: 2,
    title: "Course Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hours: 2,
    sessions: 7,
    badge: "Course 2"
  }
];

const ProgramView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const program = location.state?.program;
  const isEnrolled = location.state?.isEnrolled;
  const [activeTab, setActiveTab] = useState("courses"); // 'courses' or 'mentor'
  
  const handleBackClick = () => {
    navigate("/dashboard-programs");
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full">
            {/* Back button and title */}
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl text-white font-medium">Currently Viewing</h1>
            </div>
            
            <div className="flex flex-row h-full">
              {/* Left side - Program Card */}
              <div className="w-[30%] mr-4">
                {program && (
                  isEnrolled ? (
                    <EnrolledProgramCard program={program as EnrolledProgramCardType} />
                  ) : (
                    <UnenrolledProgramCard program={program as UnenrolledProgramCardType} />
                  )
                )}
                {!program && (
                  <div className="text-white p-4 bg-white/10 rounded-xl border border-white/20">
                    No program selected. Please go back to Programs and select a program.
                  </div>
                )}
              </div>
              
              {/* Middle - Content */}
              <div className="w-[45%] flex flex-col">
                {/* Tab navigation */}
                <div className="flex border-b border-white/20 mb-6">
                  <button 
                    className={`px-6 py-2 text-white ${activeTab === 'mentor' ? 'border-b-2 border-white font-medium' : 'opacity-80'}`}
                    onClick={() => setActiveTab('mentor')}
                  >
                    Mentor
                  </button>
                  <button 
                    className={`px-6 py-2 text-white ${activeTab === 'courses' ? 'border-b-2 border-white font-medium' : 'opacity-80'}`}
                    onClick={() => setActiveTab('courses')}
                  >
                    Courses
                  </button>
                </div>
                
                {activeTab === 'mentor' ? (
                  // Mentor profile content
                  <div className="bg-gray-400/30 rounded-lg p-6">
                    <div className="flex items-center mb-6">
                      <Avatar className="h-20 w-20 mr-4">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-xl text-white font-medium">{mentor.name}</h2>
                        <p className="text-white/80">{mentor.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-white/20 rounded-full p-2 mr-3">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white">{mentor.experience}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-white/20 rounded-full p-2 mr-3">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <span className="text-white">{mentor.workHistory}</span>
                          <p className="text-white/70 text-sm">Work Experience</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg text-white mb-3">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, index) => (
                          <span 
                            key={index} 
                            className={`px-4 py-2 rounded-full text-white ${
                              index === 0 ? 'bg-pink-500/70' : 
                              index === 1 ? 'bg-green-500/70' : 
                              'bg-blue-500/70'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg text-white mb-3">About</h3>
                      <p className="text-white/90">{mentor.about}</p>
                    </div>
                  </div>
                ) : (
                  // Course cards
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="bg-white/10 rounded-lg border border-white/20 p-6">
                        <div className="mb-2">
                          <span className="text-white bg-white/20 px-3 py-1 rounded-full text-xs">
                            {course.badge}
                          </span>
                        </div>
                        <h2 className="text-xl text-white font-medium mb-2">{course.title}</h2>
                        <p className="text-white/80 text-sm mb-4">{course.description}</p>
                        
                        <div className="flex items-center space-x-6 mb-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-white/70" />
                            <span className="text-white">{course.hours} Hours</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Square className="w-5 h-5 text-white/70" />
                            <span className="text-white">{course.sessions} Sessions</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                          View Course
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Right side - Help section directly on the gradient background */}
              <div className="w-[25%] ml-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <img src="/lovable-uploads/2bc45feb-b419-4732-a199-f3e3975af95d.png" alt="Courses icon" className="w-8 h-8" />
                  </div>
                  <p className="text-white text-center mb-6">
                    These courses will help you upskill at the areas you are currently still yet to improve at
                  </p>
                  
                  <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full mb-4">
                    <span className="flex-1 text-left">Select to continue conversation</span>
                  </Button>
                  
                  <div className="w-full space-y-2">
                    <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full justify-between">
                      <span>i want to know more</span>
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </Button>
                    <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full justify-between">
                      <span>are you sure?</span>
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                      <p className="text-white">Zuno is typing...</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 mt-4">
                      <p className="text-blue-300">Type something...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default ProgramView;
