
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, BookOpenCheck, ListTodo, FileText, FileType, Youtube, Video, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceItem, Task } from "../CodeLabPanel/types"; // Reuse types from CodeLabPanel

interface ResourcesContentProps {
  onVideoSelect?: (videoId: string) => void;
  onResourceTypeChange?: (isVideoResource: boolean) => void;
}

const ResourcesContent: React.FC<ResourcesContentProps> = ({ 
  onVideoSelect,
  onResourceTypeChange
}) => {
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("pre-session");
  const [selectedResourceType, setSelectedResourceType] = useState<string>("none");
  
  // Sample PDF URLs for demonstration
  const pdfSamples = [
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf"
  ];
  
  // Handle video selection
  const handleVideoClick = (videoId: string) => {
    // Set the selected resource type to video
    setSelectedResourceType("video");
    
    // If there's a video player control function passed in, trigger it
    if (onVideoSelect) {
      onVideoSelect(videoId);
    }
    
    // Notify parent about resource type change
    if (onResourceTypeChange) {
      onResourceTypeChange(true);
    }
    
    console.log("Video selected:", videoId);
  };

  // Handle non-video resource selection
  const handleResourceClick = (resourceType: string) => {
    setSelectedResourceType(resourceType);
    
    // Notify parent about resource type change (not a video)
    if (onResourceTypeChange) {
      onResourceTypeChange(false);
    }
    
    console.log("Resource selected:", resourceType);
  };

  // Update the parent component when tab changes
  useEffect(() => {
    // On initial render or tab change, check if we should show video
    const isVideoTab = resourcesSubTab === "videos";
    
    if (onResourceTypeChange) {
      // If on videos tab, show video player by default
      if (isVideoTab) {
        onResourceTypeChange(true);
        setSelectedResourceType("video");
      } else {
        // For other tabs, hide video player initially
        onResourceTypeChange(false);
        setSelectedResourceType("none");
      }
    }
  }, [resourcesSubTab, onResourceTypeChange]);
  
  return (
    <div className="text-white h-full flex flex-col gap-2 overflow-y-auto">
      {/* Sub-tab navigation for Resources */}
      <Tabs defaultValue="pre-session" value={resourcesSubTab} onValueChange={setResourcesSubTab} className="w-full">
        <TabsList className="bg-white/10 p-1 mb-2 flex w-full space-x-1">
          <TabsTrigger 
            value="pre-session" 
            className="flex-1 text-xs data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-200 data-[state=inactive]:text-white/60"
          >
            Pre-Session References
          </TabsTrigger>
          <TabsTrigger 
            value="post-session" 
            className="flex-1 text-xs data-[state=active]:bg-green-500/20 data-[state=active]:text-green-200 data-[state=inactive]:text-white/60"
          >
            Post-Session References
          </TabsTrigger>
          <TabsTrigger 
            value="videos" 
            className="flex-1 text-xs data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-200 data-[state=inactive]:text-white/60"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger 
            value="tasks" 
            className="flex-1 text-xs data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-200 data-[state=inactive]:text-white/60"
          >
            Tasks
          </TabsTrigger>
        </TabsList>
        
        {/* Pre-Session References Content */}
        <TabsContent value="pre-session" className="mt-0">
          <div className="bg-white/5 p-2 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileType className="h-4 w-4 text-blue-300" />
              <h3 className="text-blue-200 text-xs font-medium">Pre-Session References</h3>
            </div>
            <div className="space-y-1.5">
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("pdf")}
              >
                <div className="h-5 w-5 bg-red-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-red-300">PDF</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Introduction to Python Programming</p>
                  <p className="text-[10px] text-white/60">15 pages • Required reading</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                  onClick={() => {
                    window.open(pdfSamples[0], '_blank');
                    handleResourceClick("pdf");
                  }}
                >
                  View
                </Button>
              </div>
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("url")}
              >
                <div className="h-5 w-5 bg-green-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-green-300">URL</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Python Documentation</p>
                  <p className="text-[10px] text-white/60">External resource</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
                  onClick={() => {
                    window.open('https://docs.python.org/3/', '_blank');
                    handleResourceClick("url");
                  }}
                >
                  Open
                </Button>
              </div>
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("pdf")}
              >
                <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-blue-300">PDF</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Python Basics Reference Guide</p>
                  <p className="text-[10px] text-white/60">10 pages • Supplementary</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                  onClick={() => {
                    window.open(pdfSamples[1], '_blank');
                    handleResourceClick("pdf");
                  }}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Post-Session References Content */}
        <TabsContent value="post-session" className="mt-0">
          <div className="bg-white/5 p-2 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-green-300" />
              <h3 className="text-green-200 text-xs font-medium">Post-Session References</h3>
            </div>
            <div className="space-y-1.5">
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("ppt")}
              >
                <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-blue-300">PPT</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Advanced Python Techniques</p>
                  <p className="text-[10px] text-white/60">22 slides • Supplementary</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                  onClick={() => {
                    window.open('https://docs.google.com/presentation/d/1BgSKBqN3rXLnW-Qwpc28UY-8WqgbGCmO/edit?usp=sharing', '_blank');
                    handleResourceClick("ppt");
                  }}
                >
                  View
                </Button>
              </div>
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("pdf")}
              >
                <div className="h-5 w-5 bg-red-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-red-300">PDF</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Practice Exercises</p>
                  <p className="text-[10px] text-white/60">8 pages • Additional practice</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                  onClick={() => {
                    window.open(pdfSamples[0], '_blank');
                    handleResourceClick("pdf");
                  }}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Videos Content */}
        <TabsContent value="videos" className="mt-0">
          <div className="bg-white/5 p-2 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Youtube className="h-4 w-4 text-red-400" />
              <h3 className="text-purple-200 text-xs font-medium">Video Resources</h3>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-10 w-14 bg-gray-900 rounded flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                  <img src="https://img.youtube.com/vi/PkZNo7MFNFg/default.jpg" alt="Thumbnail" className="w-full h-full object-cover opacity-75" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">JavaScript Tutorial for Beginners</p>
                  <p className="text-[10px] text-white/60">16:30 • freeCodeCamp.org</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                  onClick={() => handleVideoClick("PkZNo7MFNFg")}
                >
                  Play
                </Button>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-10 w-14 bg-gray-900 rounded flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                  <img src="https://img.youtube.com/vi/rfscVS0vtbw/default.jpg" alt="Thumbnail" className="w-full h-full object-cover opacity-75" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Python for Beginners - Full Course</p>
                  <p className="text-[10px] text-white/60">4:26:51 • freeCodeCamp.org</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                  onClick={() => handleVideoClick("rfscVS0vtbw")}
                >
                  Play
                </Button>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-10 w-14 bg-gray-900 rounded flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                  <img src="https://img.youtube.com/vi/8DvywoWv6fI/default.jpg" alt="Thumbnail" className="w-full h-full object-cover opacity-75" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Python Tutorial for Beginners</p>
                  <p className="text-[10px] text-white/60">12:40 • Programming with Mosh</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-7 text-xs bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                  onClick={() => handleVideoClick("8DvywoWv6fI")}
                >
                  Play
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Tasks Content */}
        <TabsContent value="tasks" className="mt-0">
          <div className="bg-white/5 p-2 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ListTodo className="h-4 w-4 text-amber-300" />
              <h3 className="text-amber-200 text-xs font-medium">Tasks</h3>
            </div>
            <div className="space-y-1.5">
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("task")}
              >
                <div className="h-4 w-4 rounded-full border border-amber-400/50 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-amber-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Complete Introduction Exercise</p>
                  <p className="text-[10px] text-white/60">Due: Today</p>
                </div>
              </div>
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("task")}
              >
                <div className="h-4 w-4 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-transparent rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Submit Lab Assignment 1</p>
                  <p className="text-[10px] text-white/60">Due: Tomorrow</p>
                </div>
              </div>
              <div 
                className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer"
                onClick={() => handleResourceClick("task")}  
              >
                <div className="h-4 w-4 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-transparent rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Complete Quiz</p>
                  <p className="text-[10px] text-white/60">Due: Friday</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourcesContent;
