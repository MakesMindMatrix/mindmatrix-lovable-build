
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, Eye, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";
import ChatSidebar from "./components/ChatSidebar";
import ProgramSidebar from "./components/ProgramSidebar";
import LabSection from "./components/LabSection";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  
  const handleBackClick = () => {
    // Navigate to the program view (course card)
    navigate("/dashboard-programView");
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-80px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-3 w-full h-full flex flex-col">
            {/* Main content area */}
            <div className="flex flex-1 gap-4 h-full">
              {/* Left Section */}
              <div className="w-[65%] flex flex-col gap-4">
                {/* Back button positioned in top left */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-5 left-5 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10"
                  onClick={handleBackClick}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                
                {/* Video Section with reduced aspect ratio */}
                <div className="mt-12 rounded-lg overflow-hidden bg-black w-full">
                  <AspectRatio ratio={16/9} className="relative">
                    {/* Live indicator */}
                    <div className="absolute top-3 left-3 z-10 bg-red-500/80 px-3 py-1 rounded flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      <span className="text-white text-sm">Live Class-Web Development Fundamentals</span>
                    </div>
                    
                    {/* Viewer count */}
                    <div className="absolute top-3 right-3 z-10 bg-black/50 px-2 py-1 rounded flex items-center">
                      <Eye className="h-4 w-4 text-white mr-1" />
                      <span className="text-white text-sm">Attending <span className="bg-white/20 px-2 py-0.5 rounded ml-1">280</span></span>
                    </div>
                    
                    {/* Video */}
                    <video 
                      className="w-full h-full object-cover"
                      poster="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png"
                    >
                      <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
                    </video>
                    
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
                  </AspectRatio>
                </div>
                
                {/* Chat Section - No background card */}
                <div className="flex-1 overflow-hidden">
                  {/* Chat messages area */}
                  <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
                    <div className="mb-4">
                      <div className="flex mb-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                            alt="Zuno" 
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-white text-sm">
                        These courses will help you upskill at the areas you are currently still yet to improve at
                      </div>
                    </div>
                    
                    <div className="text-white/70 text-xs mb-2">
                      Zuno is typing...
                    </div>
                    
                    {/* Action button */}
                    <div className="flex justify-end">
                      <Button 
                        className="bg-white text-blue-800 hover:bg-white/90 text-xs py-1 h-auto px-3 rounded-lg"
                      >
                        I want to know more
                      </Button>
                    </div>
                  </div>
                  
                  {/* Chat input */}
                  <div className="h-[60px] p-3 flex items-center">
                    <div className="relative w-full bg-white/20 rounded-full">
                      <input 
                        type="text" 
                        placeholder="Type something..." 
                        className="bg-transparent border-none text-white w-full outline-none pl-4 pr-10 py-2 placeholder-white/50 text-sm"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-6 w-6 bg-white/20 hover:bg-white/30"
                      >
                        <ArrowLeft className="h-3 w-3 text-white rotate-180" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Section */}
              <div className="w-[35%] flex flex-col gap-4">
                {/* Course name card with accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="course-details" className="border-none">
                    <AccordionTrigger className="py-3 px-4 bg-[#6388D7] rounded-lg text-white hover:no-underline">
                      <span className="text-base font-medium">Course 1</span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#6388D7] mt-1 rounded-lg p-3 text-white">
                      <p className="text-sm">Energy Management in Electric Vehicles</p>
                      <p className="text-xs text-white/70 mt-1">Introduction to Electric Vehicles</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Lab Navigation Card */}
                <div className="flex-1">
                  {/* Tab navigation */}
                  <div className="flex bg-[#2D3044] rounded-t-lg">
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'labs' ? 'bg-[#4B6291] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
                      onClick={() => handleTabChange('labs')}
                    >
                      <span className="text-sm">Labs</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'resources' ? 'bg-[#4B6291] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
                      onClick={() => handleTabChange('resources')}
                    >
                      <span className="text-sm">Resources</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'notifications' ? 'bg-[#4B6291] text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
                      onClick={() => handleTabChange('notifications')}
                    >
                      <span className="text-sm">Notifications</span>
                    </Button>
                  </div>
                  
                  {/* Content area */}
                  <div className="flex-1 bg-[#4B6291] p-3 rounded-b-lg overflow-hidden flex flex-col">
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
                              className="bg-[#4B6291] text-white border-none pr-8 appearance-none cursor-pointer text-sm"
                            >
                              <option value="Python" className="bg-[#4B6291]">Python</option>
                              <option value="JavaScript" className="bg-[#4B6291]">JavaScript</option>
                              <option value="C++" className="bg-[#4B6291]">C++</option>
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
