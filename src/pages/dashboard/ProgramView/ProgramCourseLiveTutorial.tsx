
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, Eye, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ChatSidebar from "./components/ChatSidebar";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  const [courseExpanded, setCourseExpanded] = useState(false);
  
  const handleBackClick = () => {
    // Navigate to the program view (course card)
    navigate("/dashboard-programView");
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const toggleCourseExpanded = () => {
    setCourseExpanded(!courseExpanded);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-80px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-3 w-full h-full flex flex-col">
            {/* Main content area */}
            <div className="flex flex-1 gap-3 h-full">
              {/* Left Section - Video and Chat */}
              <div className="w-[60%] flex flex-col gap-3">
                {/* Video Section */}
                <div className="relative rounded-lg overflow-hidden w-full bg-black h-[40%] min-h-[240px]">
                  {/* Back button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 left-3 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white"
                    onClick={handleBackClick}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  
                  {/* Live indicator */}
                  <div className="absolute top-3 left-14 z-10 bg-red-500/80 px-3 py-1 rounded flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white text-sm">Live Class-Web Development Fundamentals</span>
                  </div>
                  
                  {/* Viewer count */}
                  <div className="absolute top-3 right-3 z-10 bg-black/50 px-2 py-1 rounded flex items-center">
                    <Eye className="h-4 w-4 text-white mr-1" />
                    <span className="text-white text-sm">Attending <span className="bg-white/20 px-2 py-0.5 rounded ml-1">280</span></span>
                  </div>
                  
                  {/* Video */}
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png" 
                      alt="Video Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Play button overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
                      {isPlaying ? (
                        <Pause className="h-7 w-7 text-white" />
                      ) : (
                        <Play className="h-7 w-7 text-white ml-1" />
                      )}
                    </div>
                  </div>
                  
                  {/* Time indicator */}
                  <div className="absolute bottom-3 right-3 z-10 bg-black/50 px-2 py-1 rounded">
                    <span className="text-white text-sm">52:34</span>
                  </div>
                </div>
                
                {/* Chat Section - Using transparent background */}
                <div className="flex-1 overflow-hidden">
                  <ChatSidebar />
                </div>
              </div>
              
              {/* Right Section - Course Details and Lab */}
              <div className="w-[40%] flex flex-col gap-3">
                {/* Course name card with dropdown */}
                <div className="rounded-lg bg-[#6388D7] p-3">
                  <Button 
                    variant="ghost" 
                    className="w-full flex justify-between items-center text-white hover:bg-white/10"
                    onClick={toggleCourseExpanded}
                  >
                    <span>Course 1</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${courseExpanded ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {courseExpanded && (
                    <div className="mt-2 text-white">
                      <p className="text-sm">Energy Management in Electric Vehicles</p>
                      <p className="text-xs text-white/70 mt-1">Introduction to Electric Vehicles</p>
                    </div>
                  )}
                </div>
                
                {/* Lab Navigation Card - Changed color to #4B6291 */}
                <div className="flex-1 flex flex-col rounded-lg overflow-hidden">
                  {/* Tab navigation */}
                  <div className="flex bg-[#4B6291]">
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'labs' ? 'bg-[#5a74a4] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
                      onClick={() => handleTabChange('labs')}
                    >
                      <span className="text-sm">Labs</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'resources' ? 'bg-[#5a74a4] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
                      onClick={() => handleTabChange('resources')}
                    >
                      <span className="text-sm">Resources</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'notifications' ? 'bg-[#5a74a4] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
                      onClick={() => handleTabChange('notifications')}
                    >
                      <span className="text-sm">Notifications</span>
                    </Button>
                  </div>
                  
                  {/* Content area */}
                  <div className="flex-1 bg-[#1E1E1E] p-3 overflow-hidden flex flex-col">
                    {activeTab === 'labs' && (
                      <>
                        {/* Lab type selection */}
                        <div className="mb-3">
                          <Button 
                            className="mr-2 bg-white/20 hover:bg-white/30 text-white text-sm py-1 h-auto px-4"
                          >
                            Code
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="text-white/60 hover:text-white text-sm py-1 h-auto px-4"
                          >
                            CAD Labs
                          </Button>
                        </div>
                        
                        {/* Code language and controls */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="relative">
                            <select
                              value={codeLanguage}
                              onChange={(e) => setCodeLanguage(e.target.value)}
                              className="bg-[#1E1E1E] text-white border-none pr-8 appearance-none cursor-pointer text-sm"
                            >
                              <option value="Python" className="bg-[#1E1E1E]">Python</option>
                              <option value="JavaScript" className="bg-[#1E1E1E]">JavaScript</option>
                              <option value="C++" className="bg-[#1E1E1E]">C++</option>
                            </select>
                            <ArrowLeft className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 h-4 w-4 text-white" />
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                              Save
                            </Button>
                            <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                              Copy
                            </Button>
                            <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                              Reset
                            </Button>
                            <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-7 text-xs">
                              Run
                            </Button>
                          </div>
                        </div>
                        
                        {/* Code editor */}
                        <div className="flex-1 bg-white rounded-lg p-3 font-mono text-gray-800 text-xs overflow-y-auto">
                          <p>prompt = ""</p>
                          <p>You are a helpful assistant. Please answer</p>
                          <p>the following question clearly and</p>
                          <p>concisely.</p>
                          <br />
                          <p>Question: &#123;user_input&#125;</p>
                          <p>Answer:</p>
                          <p>""</p>
                        </div>
                      </>
                    )}
                    
                    {activeTab === 'resources' && (
                      <div className="text-white h-full flex items-center justify-center">
                        <p className="text-sm">Resources content will appear here</p>
                      </div>
                    )}
                    
                    {activeTab === 'notifications' && (
                      <div className="text-white h-full flex items-center justify-center">
                        <p className="text-sm">Notifications content will appear here</p>
                      </div>
                    )}
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

export default ProgramCourseLiveTutorial;
