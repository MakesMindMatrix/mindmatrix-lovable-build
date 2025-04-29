
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Save, Copy, RefreshCcw, Play, Beaker, Link2, Bell } from "lucide-react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";

const LiveTutorial: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Get data passed from course card
  const courseData = location.state?.courseData || {
    program: "Energy Management in Electric Vehicles",
    course: "Introduction to Electric Vehicles",
    session: "Session 1",
    title: "Live Class-Web Development Fundamentals"
  };
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="flex h-full">
            {/* Left sidebar */}
            <div className="w-[300px] bg-blue-600/90 pt-6 flex flex-col">
              <div className="px-6 pb-6">
                <h3 className="text-white text-sm font-medium mb-1">Program:</h3>
                <p className="text-white text-base">{courseData.program}</p>
                
                <h3 className="text-white text-sm font-medium mt-4 mb-1">Course 1:</h3>
                <p className="text-white text-base">{courseData.course}</p>
              </div>
              
              {/* Session accordions */}
              <div className="space-y-3 px-3 mt-2">
                <SessionAccordion title="Session 1" isActive={true} />
                <SessionAccordion title="Session 2" isActive={false} />
                <SessionAccordion title="Session 3" isActive={false} />
              </div>
              
              <div className="mt-auto flex justify-center pb-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/10 hover:bg-white/20 p-2"
                  onClick={handleBack}
                >
                  <ArrowLeft className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 flex flex-col">
              {/* Video section */}
              <div className="relative flex-grow">
                <div className="absolute inset-0 bg-black">
                  <img 
                    src="/lovable-uploads/494e7cbd-0d50-495c-a039-9f9ba4ccc9cd.png" 
                    alt="Tutorial video" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video title and viewers */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
                    <div className="flex items-center">
                      <div className="w-2 h-8 bg-red-500 rounded mr-3"></div>
                      <h2 className="text-white text-xl font-medium">{courseData.title}</h2>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <Eye className="h-5 w-5 text-white mr-2" />
                      <span className="text-white">Attending</span>
                      <span className="bg-white text-blue-600 ml-2 px-2 py-0.5 rounded text-sm">280</span>
                    </div>
                  </div>
                  
                  {/* Video timer */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-white">52:34</span>
                  </div>
                </div>
              </div>
              
              {/* Tab navigation */}
              <div className="bg-blue-700/90 text-white h-12 flex">
                <TabButton icon={<Beaker className="h-5 w-5" />} label="Labs" />
                <TabButton icon={<Link2 className="h-5 w-5" />} label="Resources" />
                <TabButton icon={<Bell className="h-5 w-5" />} label="Notifications" />
              </div>
              
              {/* Code editor section */}
              <div className="bg-blue-800/80 px-3 py-2">
                <div className="flex space-x-2">
                  <Button variant="secondary" className="bg-blue-600/80 text-white hover:bg-blue-700 text-xs py-1 px-3 h-auto">
                    Code
                  </Button>
                  <Button variant="secondary" className="bg-blue-600/30 text-white hover:bg-blue-700 text-xs py-1 px-3 h-auto">
                    CAD Labs
                  </Button>
                </div>
              </div>
              
              {/* Code editor toolbar */}
              <div className="bg-blue-900/80 flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                  <span className="text-white mr-2">Python</span>
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M5 7l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
                    <Save className="h-5 w-5" />
                    Save
                  </Button>
                  <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
                    <Copy className="h-5 w-5" />
                    Copy
                  </Button>
                  <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
                    <RefreshCcw className="h-5 w-5" />
                    Reset
                  </Button>
                  <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Run
                  </Button>
                </div>
              </div>
              
              {/* Code editor */}
              <div className="flex-grow bg-white p-4 overflow-y-auto">
                <pre className="text-gray-800 font-mono whitespace-pre-wrap">
                  {`prompt = """\nYou are a helpful assistant. Please answer\nthe following question clearly and\nconcisely.\n\nQuestion: {user_input}\nAnswer:`}
                </pre>
              </div>
            </div>
            
            {/* Right sidebar */}
            <div className="w-[300px] bg-blue-600/70 p-6 flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/2bc45feb-b419-4732-a199-f3e3975af95d.png" 
                    alt="Zuno" 
                    className="w-8 h-8"
                  />
                </div>
              </div>
              
              <div className="text-white">
                <p className="mb-6">
                  Welcome to this lesson! We'll explore the fundamentals of neural networks. Are you ready to get started?
                </p>
                
                <div className="flex items-center mb-3 text-sm">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M5 10l3 3 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Select to continue conversation</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <ResponseButton label="Yes Lets Begin" />
                  <ResponseButton label="Okay sure" />
                </div>
                
                <Button variant="default" className="w-full bg-blue-700 hover:bg-blue-800 text-white mb-4">
                  Yes Lets Begin
                </Button>
                
                <div className="mt-auto">
                  <p className="text-white mb-2">Zuno is typing...</p>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <p className="text-blue-300">Type something...</p>
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

interface SessionAccordionProps {
  title: string;
  isActive: boolean;
}

const SessionAccordion: React.FC<SessionAccordionProps> = ({ title, isActive }) => {
  return (
    <div className={`px-3 py-2 rounded-lg ${isActive ? 'bg-white/20' : ''}`}>
      <div className="flex items-center text-white">
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">
          <span className="text-white text-xs">S</span>
        </div>
        <span>{title}</span>
        <svg className="h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path d={isActive ? "M5 15l5-5 5 5" : "M5 7l5 5 5-5"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label }) => {
  return (
    <button className="flex items-center justify-center px-4 hover:bg-blue-800/90">
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

interface ResponseButtonProps {
  label: string;
}

const ResponseButton: React.FC<ResponseButtonProps> = ({ label }) => {
  return (
    <div className="bg-white/10 text-white p-3 rounded-lg flex justify-between items-center">
      <span>{label}</span>
      <ArrowLeft className="h-4 w-4 rotate-180" />
    </div>
  );
};

export default LiveTutorial;
