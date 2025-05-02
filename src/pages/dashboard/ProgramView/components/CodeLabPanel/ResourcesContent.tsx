
import React, { useState } from "react";
import { File, FileText, Save, Download, ListCheck, Youtube, Video, FileType, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResourceItem, Task } from "./types";
import ResourcePreview from "./ResourcePreview";
import TaskPreview from "./TaskPreview";

interface ResourcesContentProps {
  onVideoSelect?: (videoId: string) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ onVideoSelect }) => {
  // Main Resources tab active sub-tab
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("learning");
  // Secondary layer of tabs for each primary sub-tab
  const [activeResourceItems, setActiveResourceItems] = useState<string>("pdf1");
  
  // Define resource materials for each sub-tab category
  const learningModules: ResourceItem[] = [
    { id: "pdf1", type: "PDF", title: "Introduction to Python Basics", pages: 10 },
    { id: "pdf2", type: "PDF", title: "Intermediate Python Concepts", pages: 15 },
    { id: "ppt1", type: "PPT", title: "Python Workshop Slides", pages: 25 },
    { id: "pdf3", type: "PDF", title: "Python Data Structures", pages: 12 },
    { id: "ppt2", type: "PPT", title: "Python Best Practices", pages: 18 }
  ];
  
  const preSessionResources: ResourceItem[] = [
    { id: "pre-pdf1", type: "PDF", title: "Pre-Session Guide", pages: 5 },
    { id: "pre-ppt1", type: "PPT", title: "Session Preparation Materials", pages: 8 },
    { id: "pre-pdf2", type: "PDF", title: "Setup Instructions", pages: 3 },
    { id: "pre-ppt2", type: "PPT", title: "Course Overview", pages: 10 },
    { id: "pre-video1", type: "VIDEO", title: "Introduction Video", duration: "5:30", videoId: "PkZNo7MFNFg" }
  ];
  
  const postSessionResources: ResourceItem[] = [
    { id: "post-pdf1", type: "PDF", title: "Post-Session Summary", pages: 7 },
    { id: "post-ppt1", type: "PPT", title: "Additional Learning Materials", pages: 12 },
    { id: "post-pdf2", type: "PDF", title: "Practice Exercises", pages: 15 },
    { id: "post-ppt2", type: "PPT", title: "Advanced Concepts", pages: 20 },
    { id: "post-video1", type: "VIDEO", title: "Deep Dive Tutorial", duration: "10:15", videoId: "rfscVS0vtbw" }
  ];

  // Video resources section
  const videoResources: ResourceItem[] = [
    { id: "video1", type: "VIDEO", title: "JavaScript Tutorial for Beginners", duration: "16:30", videoId: "PkZNo7MFNFg" },
    { id: "video2", type: "VIDEO", title: "Python for Beginners - Full Course", duration: "4:26:51", videoId: "rfscVS0vtbw" },
    { id: "video3", type: "VIDEO", title: "Python Tutorial for Beginners", duration: "12:40", videoId: "8DvywoWv6fI" },
    { id: "video4", type: "VIDEO", title: "HTML & CSS Full Course", duration: "11:25", videoId: "G3e-cpL7ofc" },
    { id: "video5", type: "VIDEO", title: "React.js Crash Course", duration: "29:54", videoId: "bMknfKXIFA8" }
  ];
  
  const tasks: Task[] = [
    { id: "task1", title: "Complete Python Basics Quiz", due: "Today" },
    { id: "task2", title: "Submit Lab Assignment", due: "Tomorrow" },
    { id: "task3", title: "Prepare for Code Review", due: "Friday" }
  ];
  
  // Get current resources based on active sub-tab
  const getCurrentResources = (): ResourceItem[] => {
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
  
  // Handle playing a video in the main player
  const handlePlayVideo = (videoId?: string) => {
    if (videoId && onVideoSelect) {
      onVideoSelect(videoId);
    }
  };
  
  return (
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

      {/* Video resources section - Now shown when any type is VIDEO */}
      {resourcesSubTab !== "tasks" && getCurrentResources().find(r => r.id === activeResourceItems)?.type === "VIDEO" && (
        <div className="space-y-2 mb-3">
          {getCurrentResources()
            .filter(resource => resource.type === "VIDEO")
            .map((video) => (
              <div 
                key={video.id}
                className="flex items-center gap-3 p-2 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
              >
                <div className="h-16 w-28 bg-gray-900 rounded flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Youtube className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">{video.title}</h3>
                  <p className="text-xs text-white/60">Duration: {video.duration}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-red-500/20 border-red-500/30 text-white hover:bg-red-500/30"
                  onClick={() => handlePlayVideo(video.videoId)}
                >
                  <Play className="h-4 w-4 mr-1" /> Play
                </Button>
              </div>
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
            {getCurrentResources()
              .filter(r => r.id === activeResourceItems)
              .filter(r => r.type !== "VIDEO") // Only show non-video resources here
              .map((resource) => (
                <ResourcePreview 
                  key={resource.id} 
                  resource={resource} 
                  onPlayVideo={handlePlayVideo}
                />
              ))}
          </>
        ) : (
          <>
            {/* Task detail view */}
            {tasks
              .filter(t => t.id === activeResourceItems)
              .map((task) => (
                <TaskPreview key={task.id} task={task} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ResourcesContent;
