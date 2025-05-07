
"use client";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '@/components/auth/GradientBackground';

const WelcomeBack = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigate('/overall-progress');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden bg-white shadow-lg">
        {/* Logo at top */}
        <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
          <div className="flex items-center text-gray-700 font-semibold text-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            MindMatrix
          </div>
        </div>
        
        {/* Main content with gradient background */}
        <div className="h-full">
          <GradientBackground>
            <div className="flex flex-col items-center justify-center h-full text-white px-6">
              <img 
                src="/lovable-uploads/7e946df4-7925-4540-a44d-1856ec390ae6.png" 
                alt="Profile Avatar" 
                className="w-16 h-16 rounded-full mb-4"
              />
              
              <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
              
              <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
              <p className="text-center text-lg max-w-md">
                You have completed your learning streak for 5 days!
                <br />
                Let's dive in and see how you did!
              </p>
              
              {/* Progress dots at bottom */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
              </div>
            </div>
          </GradientBackground>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
