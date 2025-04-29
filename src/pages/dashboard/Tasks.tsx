
import React from "react";
import Desktop from "@/components/dashboard/day1/Desktop";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Tasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const taskData = location.state;
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <Desktop activeTab="tasks" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 absolute inset-0">
          <div className="p-6 w-full h-full">
            {/* Back button and title */}
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
                onClick={handleBack}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl text-white font-medium">Tasks</h1>
            </div>
            
            {taskData ? (
              <div className="flex flex-row h-[calc(100%-64px)]">
                {/* Task Content */}
                <div className="w-[70%] mr-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 h-full">
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="h-6 w-6 text-white" />
                      <h2 className="text-xl font-medium text-white">{taskData.taskTitle}</h2>
                    </div>
                    
                    {taskData.courseTitle && (
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <div className="text-sm text-white/70 mb-1">Course</div>
                        <div className="text-white font-medium">{taskData.courseTitle}</div>
                      </div>
                    )}
                    
                    {taskData.sessionTitle && (
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <div className="text-sm text-white/70 mb-1">Session</div>
                        <div className="text-white font-medium">{taskData.sessionTitle}</div>
                      </div>
                    )}
                    
                    <ScrollArea className="h-[calc(100%-200px)]">
                      <div className="text-white space-y-4">
                        <p>This is the content for {taskData.taskTitle}. Replace this with actual task content when available.</p>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-4 w-4 text-white/70" />
                            <div className="text-sm text-white font-medium">Due Date</div>
                          </div>
                          <div className="text-white">2 weeks from now</div>
                        </div>
                        
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <h3 className="font-medium text-white mb-2">Resources</h3>
                          <ul className="list-disc list-inside text-white/80 space-y-1">
                            <li>Resource document 1</li>
                            <li>Video tutorial</li>
                            <li>Additional reading</li>
                          </ul>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </div>
                
                {/* Task Info Sidebar */}
                <div className="w-[30%]">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 h-full">
                    <h3 className="font-medium text-white text-lg mb-4">Task Info</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Status</div>
                        <div className="bg-green-500/20 text-green-300 rounded-full px-3 py-1 text-sm inline-block">
                          In Progress
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-white/70 mb-1">Type</div>
                        <div className="text-white">Assignment</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-white/70 mb-1">Difficulty</div>
                        <div className="text-white">Intermediate</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-white/70 mb-1">Estimated Time</div>
                        <div className="text-white">2 hours</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-white/70 mb-1">Points</div>
                        <div className="text-white">50 points</div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                          Submit Task
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                <p className="text-white">Select a task from one of your courses to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Desktop>
  );
};

export default Tasks;
