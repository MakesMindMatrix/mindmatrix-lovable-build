
"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EngagementSummaryCard from '@/widgets/day2onwards_widgets/engagement_summary/EngagementSummaryCard';

const EngagementSummaryScreen = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    navigate('/dashboard-Day1');
  };

  // Sample engagement data
  const engagementData = {
    streak: 5,
    timeInvested: 12.5, // hours
    weeklyConsistency: 80 // percentage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-b from-blue-400/50 to-blue-700/50 backdrop-blur-md">
        {/* Header with avatar and message */}
        <div className="flex flex-col items-center pt-12 text-white">
          <img 
            src="/lovable-uploads/7e946df4-7925-4540-a44d-1856ec390ae6.png" 
            alt="Profile Avatar" 
            className="w-16 h-16 rounded-full mb-4"
          />
          
          <p className="text-center max-w-md mb-12">
            You've logged in for 5 days straight! Your dedication is 
            commendable. Aim for a full week to unlock a bonus!
          </p>
        </div>
        
        {/* Widget Carousel - Current widget in focus, others faded */}
        <div className="flex justify-center items-center gap-6 px-12">
          {/* Previous widget (faded) */}
          <div className="w-[300px] transform scale-90 opacity-30 transition-all duration-300 blur-[1px]">
            <div className="w-full h-[200px] rounded-xl bg-indigo-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <span className="text-white/70 flex items-center gap-2">
                Skill Momentum
              </span>
            </div>
          </div>
          
          {/* Active widget */}
          <div className="w-[309px] transform scale-100 opacity-100 transition-all duration-300">
            <EngagementSummaryCard 
              streak={engagementData.streak}
              timeInvested={engagementData.timeInvested}
              weeklyConsistency={engagementData.weeklyConsistency}
            />
          </div>
        </div>
        
        {/* Continue button */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center">
          <button 
            onClick={handleContinue}
            className="px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all"
          >
            Let's continue
          </button>
        </div>
        
        {/* Progress dots at bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default EngagementSummaryScreen;
