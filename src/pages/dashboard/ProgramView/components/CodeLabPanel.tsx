
import React, { useState } from "react";
import { ArrowLeft, Link2, ExternalLink, FileMinus, FilePlus, ListCheck, FileText, FilePdf, Download, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface CodeLabPanelProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  codeLanguage: string;
  setCodeLanguage: (language: string) => void;
}

const CodeLabPanel: React.FC<CodeLabPanelProps> = ({
  activeTab,
  handleTabChange,
  codeLanguage,
  setCodeLanguage
}) => {
  // Main Resources tab active sub-tab
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("learning");
  // Secondary layer of tabs for each primary sub-tab
  const [activeResourceItems, setActiveResourceItems] = useState<string>("pdf1");
  
  // Define resource materials for each sub-tab category
  const learningModules = [
    { id: "pdf1", type: "PDF", title: "Introduction to Python Basics", pages: 10 },
    { id: "pdf2", type: "PDF", title: "Intermediate Python Concepts", pages: 15 },
    { id: "ppt1", type: "PPT", title: "Python Workshop Slides", pages: 25 }
  ];
  
  const preSessionResources = [
    { id: "pre-pdf1", type: "PDF", title: "Pre-Session Guide", pages: 5 },
    { id: "pre-ppt1", type: "PPT", title: "Session Preparation Materials", pages: 8 },
    { id: "pre-video1", type: "VIDEO", title: "Introduction Video", duration: "5:30" }
  ];
  
  const postSessionResources = [
    { id: "post-pdf1", type: "PDF", title: "Post-Session Summary", pages: 7 },
    { id: "post-ppt1", type: "PPT", title: "Additional Learning Materials", pages: 12 },
    { id: "post-video1", type: "VIDEO", title: "Deep Dive Tutorial", duration: "10:15" }
  ];
  
  const tasks = [
    { id: "task1", title: "Complete Python Basics Quiz", due: "Today" },
    { id: "task2", title: "Submit Lab Assignment", due: "Tomorrow" },
    { id: "task3", title: "Prepare for Code Review", due: "Friday" }
  ];
  
  // Get current resources based on active sub-tab
  const getCurrentResources = () => {
    switch (resourcesSubTab) {
      case "learning":
        return learningModules;
      case "pre-session":
        return preSessionResources;
      case "post-session":
        return postSessionResources;
      default:
        return [];
    }
  };
  
  // Handle resource item click
  const handleResourceItemClick = (itemId: string) => {
    setActiveResourceItems(itemId);
  };
  
  // Rendering resource item based on type
  const renderResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FilePdf className="h-5 w-5 text-red-400" />;
      case "PPT":
        return <FileText className="h-5 w-5 text-blue-400" />;
      case "VIDEO":
        return <FileText className="h-5 w-5 text-purple-400" />; // Using FileText as a placeholder for video
      default:
        return <FileText className="h-5 w-5 text-gray-400" />;
    }
  };
  
  return (
    <div className="flex-1 backdrop-blur-xl bg-gradient-to-br from-[#2A3A80]/70 to-[#1A2C6B]/60 border border-white/10 rounded-lg flex flex-col overflow-hidden z-10 h-full shadow-lg">
      {/* Tab navigation */}
      <div className="flex bg-[#1E2D6F]/80 backdrop-blur-md rounded-t-lg border-b border-white/10">
        <Button 
          variant="ghost" 
          className={`${activeTab === 'labs' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('labs')}
        >
          <span className="text-sm">Labs</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'resources' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('resources')}
        >
          <span className="text-sm">Resources</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'notifications' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('notifications')}
        >
          <span className="text-sm">Notifications</span>
        </Button>
      </div>
      
      {/* Content area */}
      <div className="flex-1 p-3 rounded-b-lg overflow-hidden flex flex-col">
        {activeTab === 'labs' && (
          <>
            {/* Lab type selection */}
            <div className="mb-3">
              <Button 
                className="mr-2 bg-[#3A4A90]/30 hover:bg-[#3A4A90]/40 text-white text-sm py-1 h-auto px-4"
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
                  className="bg-transparent text-white border-none pr-8 appearance-none cursor-pointer text-sm"
                >
                  <option value="Python" className="bg-[#2A3A80]">Python</option>
                  <option value="JavaScript" className="bg-[#2A3A80]">JavaScript</option>
                  <option value="C++" className="bg-[#2A3A80]">C++</option>
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
            
            {/* Code editor - replaced with placeholder for code environment */}
            <div className="flex-1 bg-white rounded-lg p-3 font-mono text-gray-800 text-xs overflow-y-auto min-h-[calc(100%-80px)] flex flex-col justify-center items-center">
              <div className="text-center max-w-md">
                <div className="mb-4 flex justify-center">
                  <Link2 className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Connect Code Environment</h3>
                <p className="text-xs text-gray-500 mb-4">
                  Attach an external code environment or IDE to practice your coding skills in real-time.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8 text-xs flex items-center gap-1">
                    <Link2 className="h-3.5 w-3.5" />
                    Connect Environment
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 h-8 text-xs flex items-center gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'resources' && (
          <div className="text-white h-full flex flex-col gap-2 overflow-y-auto">
            {/* Sub-tab navigation for Resources - Layer 1 */}
            <div className="flex gap-2 overflow-x-auto pb-2 items-center">
              <Button 
                size="sm"
                variant={resourcesSubTab === "learning" ? "default" : "outline"}
                className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
                  resourcesSubTab === "learning" 
                    ? "bg-blue-500 hover:bg-blue-600 text-white" 
                    : "bg-transparent border-white/20 text-white hover:bg-white/10"
                }`}
                onClick={() => setResourcesSubTab("learning")}
              >
                Learning Module
              </Button>
              <Button 
                size="sm"
                variant={resourcesSubTab === "pre-session" ? "default" : "outline"}
                className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
                  resourcesSubTab === "pre-session" 
                    ? "bg-green-500 hover:bg-green-600 text-white" 
                    : "bg-transparent border-white/20 text-white hover:bg-white/10"
                }`}
                onClick={() => setResourcesSubTab("pre-session")}
              >
                Pre Session
              </Button>
              <Button 
                size="sm"
                variant={resourcesSubTab === "post-session" ? "default" : "outline"}
                className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
                  resourcesSubTab === "post-session" 
                    ? "bg-purple-500 hover:bg-purple-600 text-white" 
                    : "bg-transparent border-white/20 text-white hover:bg-white/10"
                }`}
                onClick={() => setResourcesSubTab("post-session")}
              >
                Post Session
              </Button>
              <Button 
                size="sm"
                variant={resourcesSubTab === "tasks" ? "default" : "outline"}
                className={`rounded-full px-4 py-1 h-auto whitespace-nowrap text-xs ${
                  resourcesSubTab === "tasks" 
                    ? "bg-amber-500 hover:bg-amber-600 text-white" 
                    : "bg-transparent border-white/20 text-white hover:bg-white/10"
                }`}
                onClick={() => setResourcesSubTab("tasks")}
              >
                To-Dos
              </Button>
            </div>
            
            {/* Layer 2 - Floating pill resources */}
            {resourcesSubTab !== "tasks" && (
              <div className="flex flex-wrap gap-2 mb-3">
                {getCurrentResources().map((resource) => (
                  <Badge
                    key={resource.id}
                    variant="outline"
                    className={`cursor-pointer py-1 px-3 ${
                      activeResourceItems === resource.id 
                        ? "bg-white/20 border-white" 
                        : "bg-transparent border-white/20"
                    } hover:bg-white/10 transition-colors`}
                    onClick={() => handleResourceItemClick(resource.id)}
                  >
                    {resource.type === "PDF" && "PDF"}
                    {resource.type === "PPT" && "PPT"}
                    {resource.type === "VIDEO" && "Video"}
                  </Badge>
                ))}
              </div>
            )}
            
            {/* Task pills for tasks tab */}
            {resourcesSubTab === "tasks" && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tasks.map((task) => (
                  <Badge
                    key={task.id}
                    variant="outline"
                    className={`cursor-pointer py-1 px-3 ${
                      activeResourceItems === task.id 
                        ? "bg-amber-500/30 border-amber-400" 
                        : "bg-transparent border-white/20"
                    } hover:bg-white/10 transition-colors`}
                    onClick={() => handleResourceItemClick(task.id)}
                  >
                    {task.title}
                  </Badge>
                ))}
              </div>
            )}
            
            {/* Content display based on selected sub-tab and resource */}
            <div className="bg-white/10 p-4 rounded-lg flex-1">
              {resourcesSubTab !== "tasks" ? (
                <>
                  {/* Display selected resource content */}
                  {getCurrentResources().filter(r => r.id === activeResourceItems).map((resource) => (
                    <div key={resource.id} className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {renderResourceIcon(resource.type)}
                          <div>
                            <h3 className="font-medium text-white">{resource.title}</h3>
                            <p className="text-xs text-white/60">
                              {resource.type === "PDF" || resource.type === "PPT" 
                                ? `${resource.pages} pages` 
                                : `Duration: ${resource.duration}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-8">
                            <Save className="h-4 w-4 mr-1" /> Save
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white h-8">
                            <Download className="h-4 w-4 mr-1" /> Download
                          </Button>
                        </div>
                      </div>
                      
                      {/* Placeholder for document preview */}
                      <div className="flex-1 bg-white rounded-lg flex flex-col justify-center items-center p-6 min-h-[200px]">
                        {resource.type === "PDF" && (
                          <div className="text-center">
                            <FilePdf className="h-16 w-16 text-red-400 mx-auto mb-3" />
                            <p className="text-gray-700 font-medium">{resource.title}</p>
                            <p className="text-gray-500 text-sm">{resource.pages} pages</p>
                            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                              Open PDF
                            </Button>
                          </div>
                        )}
                        {resource.type === "PPT" && (
                          <div className="text-center">
                            <FileText className="h-16 w-16 text-blue-400 mx-auto mb-3" />
                            <p className="text-gray-700 font-medium">{resource.title}</p>
                            <p className="text-gray-500 text-sm">{resource.pages} slides</p>
                            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                              View Presentation
                            </Button>
                          </div>
                        )}
                        {resource.type === "VIDEO" && (
                          <div className="text-center">
                            <div className="w-full max-w-md h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                              </div>
                            </div>
                            <p className="text-gray-700 font-medium">{resource.title}</p>
                            <p className="text-gray-500 text-sm">Duration: {resource.duration}</p>
                            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                              Play Video
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {/* Task detail view */}
                  {tasks.filter(t => t.id === activeResourceItems).map((task) => (
                    <div key={task.id} className="h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <ListCheck className="h-5 w-5 text-amber-400" />
                          <div>
                            <h3 className="font-medium text-white">{task.title}</h3>
                            <p className="text-xs text-white/60">Due: {task.due}</p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white h-8">
                          Mark as Complete
                        </Button>
                      </div>
                      
                      {/* Task details */}
                      <div className="bg-white rounded-lg p-4">
                        <div className="mb-4">
                          <h4 className="text-gray-800 font-medium mb-2">Task Description</h4>
                          <p className="text-gray-600 text-sm">
                            Complete the assigned task related to Python programming concepts covered in the session.
                            Make sure to follow all instructions and submit your work before the deadline.
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-gray-800 font-medium mb-2">Requirements</h4>
                          <ul className="list-disc list-inside text-gray-600 text-sm">
                            <li>Implement all required functions</li>
                            <li>Include proper documentation</li>
                            <li>Test your code with the provided test cases</li>
                            <li>Submit as a single Python file</li>
                          </ul>
                        </div>
                        
                        <div className="flex justify-end mt-6">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Start Task
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="text-white h-full flex items-center justify-center">
            <p className="text-sm">Notifications content will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeLabPanel;
