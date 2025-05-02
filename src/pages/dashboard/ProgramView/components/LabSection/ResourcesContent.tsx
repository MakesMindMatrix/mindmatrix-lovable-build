
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, BookOpenCheck, ListTodo, FileText, FileMinus, FilePlus, ListCheck } from "lucide-react";
import { ResourceItem, Task } from "../CodeLabPanel/types"; // Reuse types from CodeLabPanel

const ResourcesContent: React.FC = () => {
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("pre-session");
  
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
              <FileMinus className="h-4 w-4 text-blue-300" />
              <h3 className="text-blue-200 text-xs font-medium">Pre-Session References</h3>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-blue-300">PDF</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Introduction to Python Programming</p>
                  <p className="text-[10px] text-white/60">15 pages • Required reading</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-5 w-5 bg-green-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-green-300">URL</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Python Documentation</p>
                  <p className="text-[10px] text-white/60">External resource</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-5 w-5 bg-purple-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-purple-300">VID</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Python Basics Tutorial</p>
                  <p className="text-[10px] text-white/60">10 min • Introduction</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Post-Session References Content */}
        <TabsContent value="post-session" className="mt-0">
          <div className="bg-white/5 p-2 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FilePlus className="h-4 w-4 text-green-300" />
              <h3 className="text-green-200 text-xs font-medium">Post-Session References</h3>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-5 w-5 bg-purple-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-purple-300">VID</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Advanced Python Techniques</p>
                  <p className="text-[10px] text-white/60">22 min • Supplementary</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-5 w-5 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-blue-300">PDF</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Practice Exercises</p>
                  <p className="text-[10px] text-white/60">8 pages • Additional practice</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Tasks Content */}
        <TabsContent value="tasks" className="mt-0">
          <div className="bg-white/5 p-2 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ListCheck className="h-4 w-4 text-amber-300" />
              <h3 className="text-amber-200 text-xs font-medium">Tasks</h3>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-4 w-4 rounded-full border border-amber-400/50 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-amber-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Complete Introduction Exercise</p>
                  <p className="text-[10px] text-white/60">Due: Today</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
                <div className="h-4 w-4 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-transparent rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white">Submit Lab Assignment 1</p>
                  <p className="text-[10px] text-white/60">Due: Tomorrow</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded border border-white/10 cursor-pointer">
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
