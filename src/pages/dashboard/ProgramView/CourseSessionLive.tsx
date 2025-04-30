
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import Desktop from "@/components/dashboard/day1/Desktop";
import Desktop121 from "./Desktop121";

const CourseSessionLive = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard-programView");
  };

  return (
    <Desktop activeTab="programs" simplified>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <GradientBackground className="absolute inset-0">
          <div className="p-6 w-full h-full">
            <Desktop121 />
          </div>
        </GradientBackground>
      </div>
    </Desktop>
  );
};

export default CourseSessionLive;
