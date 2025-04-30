
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Video, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Desktop from "@/components/dashboard/day1/Desktop";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import ChatOption from "./ChatOption";
import CourseHeader from "./CourseHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

const ProgramCourseLiveTutorial = () => {
  const navigate = useNavigate();
  const [mentorLive, setMentorLive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showLabView, setShowLabView] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");
  const [codeLanguage, setCodeLanguage] = useState("Python");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Automatically scroll to bottom when new content is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  
  useEffect(() => {
    // After 15 seconds, set mentor as live and show popup
    const timer = setTimeout(() => {
      setMentorLive(true);
      setShowPopup(true);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };
  
  const handlePopupConfirm = () => {
    setShowPopup(false);
    setShowLabView(true);
    toast({
      title: "Joined Live Session",
      description: "You've successfully joined the mentor's live session.",
    });
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full flex flex-col">
            {/* Back button and title - fixed at top */}
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl text-white font-medium">Live Tutorial</h1>
            </div>
            
            {!showLabView ? (
              // Original view (waiting for mentor)
              <div className="flex flex-col max-w-3xl mx-auto w-full h-[calc(100%-130px)] relative">
                {/* Mentor notification with glass effect - fixed at top */}
                <div className={`backdrop-blur-md ${mentorLive ? 'bg-green-400/10 border-green-400/30' : 'bg-white/10 border-white/30'} border rounded-lg p-4 mb-8 shadow-lg max-w-md mx-auto transition-all duration-300`}>
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                      alt="Mentor" 
                      className="w-10 h-10 rounded-full mr-4" 
                    />
                    <div>
                      <p className="text-white">{mentorLive ? "Mentor is online and ready!" : "Mentor will join in a few minutes. Let's do a quick recap while you wait!"}</p>
                      <p className="text-white/80 text-sm">{mentorLive ? "Join the session now" : "Expected to start in 15 minutes..."}</p>
                    </div>
                  </div>
                </div>
                
                {/* Scrollable conversation area */}
                <div className="flex-1 overflow-hidden mb-4 relative">
                  <ScrollArea className="h-full pr-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="text-white text-center text-xl max-w-md mb-12">
                        Hey there! 👋 Your mentor will be here shortly. In the meantime, let's do a quick recap on yesterday's topic: Prompt Engineering.
                      </p>
                    
                      {/* Selection options */}
                      <div className="mt-4 max-w-md mx-auto w-full">
                        <p className="text-white/80 flex items-center mb-4">
                          <span className="mr-2">🔄</span>
                          Select to continue conversation
                        </p>
                        
                        <div className="space-y-4">
                          <ChatOption text="Yes, let's go!" />
                          <ChatOption text="Can we do a quick quiz instead?" />
                          <ChatOption text="Wait, what's Prompt Engineering again?" />
                        </div>
                      </div>
                      
                      <div ref={messagesEndRef} className="h-20"></div>
                    </div>
                  </ScrollArea>
                </div>
                
                {/* Type something input - fixed at bottom */}
                <div className="absolute bottom-0 left-0 right-0 max-w-md mx-auto w-full">
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-lg">
                    <input 
                      type="text" 
                      placeholder="Type something..."
                      className="w-full bg-transparent text-white placeholder-white/60 rounded-lg py-3 px-4 pr-12"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Lab View (after mentor is live and popup is confirmed)
              <div className="flex flex-1 gap-4 h-[calc(100%-64px)]">
                {/* Left sidebar - Modules */}
                <div className="w-64 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 overflow-hidden">
                  <div className="mb-4">
                    <div className="text-white text-sm font-medium mb-2">Program:</div>
                    <div className="text-white">Energy Management in Electric Vehicles</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-white text-sm font-medium mb-2">Course:</div>
                    <div className="text-white">Introduction to Electric Vehicles</div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
                          <span className="text-xs">1</span>
                        </div>
                        Session 1
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 rounded-full bg-white/10"
                      >
                        <ArrowLeft className="h-3 w-3 text-white rotate-90" />
                      </Button>
                    </div>
                    
                    <div className="ml-7 space-y-3">
                      <div className="text-white/80 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Learning Module
                      </div>
                      <div className="text-white/80 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Pre-session Reference
                      </div>
                      <div className="text-white/80 text-sm flex items-center font-medium">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Live Tutorial
                      </div>
                      <div className="text-white/80 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Post-session Reference
                      </div>
                      <div className="text-white/80 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Task 1
                      </div>
                      <div className="text-white/80 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Task 2
                      </div>
                      <div className="text-white/80 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Task 3
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
                          <span className="text-xs">2</span>
                        </div>
                        Session 2
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 rounded-full bg-white/10"
                      >
                        <ArrowLeft className="h-3 w-3 text-white rotate-90" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white flex items-center">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-2">
                          <span className="text-xs">3</span>
                        </div>
                        Session 3
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 rounded-full bg-white/10"
                      >
                        <ArrowLeft className="h-3 w-3 text-white rotate-90" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Middle section - Video and Lab */}
                <div className="flex-1 flex flex-col">
                  {/* Video section */}
                  <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                    <div className="absolute top-0 left-0 z-10 m-4 bg-red-500/80 px-2 py-1 rounded flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      <span className="text-white text-sm">Live Class-Web Development Fundamentals</span>
                    </div>
                    
                    <div className="absolute top-0 right-0 z-10 m-4 bg-black/50 px-2 py-1 rounded flex items-center">
                      <Eye className="h-4 w-4 text-white mr-1" />
                      <span className="text-white text-sm">Attending 280</span>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 z-10 m-4 bg-black/50 px-2 py-1 rounded">
                      <span className="text-white text-sm">52:34</span>
                    </div>
                    
                    <img 
                      src="/lovable-uploads/8eae9165-5b6f-4641-a457-52257f53f3a1.png" 
                      alt="Live Class" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Lab navigation */}
                  <div className="flex bg-white/5 rounded-t-lg border-b border-white/10">
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'labs' ? 'bg-white/10 text-white' : 'text-white/60'} rounded-none px-6`}
                      onClick={() => handleTabChange('labs')}
                    >
                      Labs
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'resources' ? 'bg-white/10 text-white' : 'text-white/60'} rounded-none px-6`}
                      onClick={() => handleTabChange('resources')}
                    >
                      Resources
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`${activeTab === 'notifications' ? 'bg-white/10 text-white' : 'text-white/60'} rounded-none px-6`}
                      onClick={() => handleTabChange('notifications')}
                    >
                      Notifications
                    </Button>
                  </div>
                  
                  {/* Lab content */}
                  <div className="flex-1 bg-white/5 rounded-b-lg p-4">
                    <div className="mb-4">
                      <Button 
                        variant="secondary" 
                        className={`mr-2 bg-white/10 hover:bg-white/20 text-white ${activeTab === 'labs' && 'bg-white/20'}`}
                      >
                        Code
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="text-white/60 hover:text-white"
                      >
                        CAD Labs
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <select
                          value={codeLanguage}
                          onChange={(e) => setCodeLanguage(e.target.value)}
                          className="bg-transparent text-white border-none pr-8 appearance-none cursor-pointer"
                        >
                          <option value="Python" className="bg-gray-800">Python</option>
                          <option value="JavaScript" className="bg-gray-800">JavaScript</option>
                          <option value="C++" className="bg-gray-800">C++</option>
                        </select>
                        <ArrowLeft className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 h-4 w-4 text-white" />
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" className="bg-transparent border-white/20 text-white">
                          Save
                        </Button>
                        <Button variant="outline" className="bg-transparent border-white/20 text-white">
                          Copy
                        </Button>
                        <Button variant="outline" className="bg-transparent border-white/20 text-white">
                          Reset
                        </Button>
                        <Button variant="outline" className="bg-transparent border-white/20 text-white">
                          Run
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 h-56 font-mono text-gray-800 text-sm">
                      <p>prompt = ""</p>
                      <p>You are a helpful assistant. Please answer</p>
                      <p>the following question clearly and</p>
                      <p>concisely.</p>
                      <br />
                      <p>Question: &#123;user_input&#125;</p>
                      <p>Answer:</p>
                    </div>
                  </div>
                </div>
                
                {/* Right sidebar - Chat */}
                <div className="w-64 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex flex-col">
                  <div className="p-4 flex-1 overflow-hidden">
                    <ScrollArea className="h-full pr-2">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                              alt="Zuno" 
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3 text-white text-sm">
                          Welcome to this lesson! We'll explore the fundamentals of neural networks. Are you ready to get started?
                        </div>
                        
                        <div className="text-white/60 text-xs text-center">Select to continue conversation</div>
                        
                        <div className="bg-white/10 rounded-lg p-2 text-white text-sm flex items-center justify-between">
                          <div>Yes Lets Begin</div>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-2 text-white text-sm flex items-center justify-between">
                          <div>Okay sure</div>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-2 text-white/70 text-sm flex items-center justify-between">
                          <div>Yes Lets Begin</div>
                        </div>
                        
                        <div className="text-white/60 text-xs">Zuno is typing...</div>
                      </div>
                    </ScrollArea>
                  </div>
                  
                  <div className="p-3 border-t border-white/10">
                    <div className="bg-white/20 rounded-lg p-2 flex items-center">
                      <input 
                        type="text" 
                        placeholder="Type something..." 
                        className="bg-transparent text-white w-full border-none outline-none text-sm placeholder-white/50"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="rounded-full h-7 w-7 bg-white/20 hover:bg-white/30"
                      >
                        <ArrowRight className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </GradientBackground>
        
        {/* Popup when mentor is live */}
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="bg-white/10 backdrop-blur-md border border-white/20 text-white max-w-md">
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Mentor is live in the laboratory!</h2>
              <p className="text-white/80 text-center mb-6">Join now to participate in the live session with expert guidance and real-time interaction.</p>
              
              <Button
                onClick={handlePopupConfirm}
                className="glass-btn text-white px-8 py-2 rounded-full font-medium"
              >
                Let's Go!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Desktop>
  );
};

export default ProgramCourseLiveTutorial;
