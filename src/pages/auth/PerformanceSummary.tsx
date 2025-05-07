
"use client";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PerformanceSummaryWidget from '@/widgets/day2onwards_widgets/performance/PerformanceSummary';

const PerformanceSummaryScreen = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigate('/skill-momentum');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  const handleSkip = () => {
    navigate('/dashboard-Day1');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-b from-blue-400/50 to-blue-700/50 backdrop-blur-md">
        {/* Skip button */}
        <button 
          onClick={handleSkip} 
          className="absolute top-4 right-4 text-white text-sm flex items-center gap-1 px-3 py-1 rounded-md bg-blue-600/30 backdrop-blur-sm hover:bg-blue-600/50 transition"
        >
          Skip 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Header with avatar and message */}
        <div className="flex flex-col items-center pt-12 text-white">
          <img 
            src="/lovable-uploads/7e946df4-7925-4540-a44d-1856ec390ae6.png" 
            alt="Profile Avatar" 
            className="w-16 h-16 rounded-full mb-4"
          />
          
          <p className="text-center max-w-md mb-12">
            Great job on yesterday's quiz! Remember, small progress
            leads to big achievements. Keep pushing!
          </p>
        </div>
        
        {/* Widget Carousel - Current widget in focus, others faded */}
        <div className="flex justify-center items-center gap-6 px-12">
          {/* Previous widget (faded) */}
          <div className="w-[300px] transform scale-90 opacity-30 transition-all duration-300 blur-[1px]">
            <div className="w-full h-[200px] rounded-xl bg-indigo-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <span className="text-white/70 flex items-center gap-2">
                Overall Progress
              </span>
            </div>
          </div>
          
          {/* Active widget */}
          <div className="w-[309px] transform scale-100 opacity-100 transition-all duration-300">
            <PerformanceSummaryWidget />
          </div>
          
          {/* Next widget (faded) */}
          <div className="w-[300px] transform scale-90 opacity-30 transition-all duration-300 blur-[1px]">
            <div className="w-full h-[200px] rounded-xl bg-indigo-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <span className="text-white/70 flex items-center gap-2">
                Skill Momentum
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress dots at bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSummaryScreen;
