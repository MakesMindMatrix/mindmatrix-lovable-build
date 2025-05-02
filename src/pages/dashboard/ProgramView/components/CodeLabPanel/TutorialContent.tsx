
import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TutorialContent: React.FC = () => {
  // Tutorial information - this would typically come from props or context
  const tutorialInfo = {
    date: "May 5, 2025",
    time: "10:00 AM - 11:30 AM",
    mentor: "John Smith",
    isLive: true
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <Card className="bg-white/10 border-white/10">
        <CardContent className="p-5">
          <h3 className="text-lg font-medium text-white mb-4">Upcoming Tutorial</h3>
          
          <div className="space-y-3">
            <div className="flex items-center text-white/80">
              <Calendar className="mr-3 h-4 w-4" />
              <span>Date: {tutorialInfo.date}</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <Clock className="mr-3 h-4 w-4" />
              <span>Time: {tutorialInfo.time}</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <User className="mr-3 h-4 w-4" />
              <span>Mentor: {tutorialInfo.mentor}</span>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              className={tutorialInfo.isLive 
                ? "bg-green-500 hover:bg-green-600 text-white" 
                : "bg-gray-500 hover:bg-gray-600 text-white"}
            >
              {tutorialInfo.isLive ? "Join Live Session" : "Session Not Live"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TutorialContent;
