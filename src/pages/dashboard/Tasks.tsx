
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Desktop from "@/components/dashboard/day1/Desktop";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";

const Tasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { taskTitle, courseId, courseTitle, sessionId } = location.state || {};

  const handleBackClick = () => {
    navigate("/dashboard-programView");
  };

  return (
    <Desktop activeTab="tasks" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full">
            {/* Back button and title */}
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white/20 hover:bg-white/30 text-white mr-4"
                onClick={handleBackClick}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl text-white font-medium">Task Details</h1>
            </div>

            {taskTitle ? (
              <Card className="max-w-4xl bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="text-sm text-white/70 mb-2">
                    {courseTitle} {sessionId && sessionId > 0 ? `• Session ${sessionId}` : sessionId === -1 ? '• Quiz' : '• A+'}
                  </div>
                  <CardTitle className="text-white text-2xl">{taskTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-white/90">
                      This is the task details page for {taskTitle}. You can customize this content based on the specific task type and requirements.
                    </p>
                    
                    <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                      <h3 className="font-medium mb-2">Task Instructions</h3>
                      <p className="text-sm text-white/80">
                        Follow the instructions provided in the materials to complete this task. If you have any questions, feel free to reach out to your mentor for guidance.
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-white/20 hover:bg-white/30 text-white">
                        Mark as Complete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="text-white p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-2xl">
                <h2 className="text-xl font-medium mb-4">Your Tasks</h2>
                <p>
                  No specific task selected. Navigate to a course and select a task to view its details.
                </p>
              </div>
            )}
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default Tasks;
