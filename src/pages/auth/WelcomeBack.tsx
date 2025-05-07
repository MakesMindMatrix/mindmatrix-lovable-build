
"use client";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-b from-blue-400/50 to-blue-700/50 backdrop-blur-md">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <img 
            src="/lovable-uploads/7e946df4-7925-4540-a44d-1856ec390ae6.png" 
            alt="Profile Avatar" 
            className="w-20 h-20 rounded-full mb-6"
          />
          
          <h1 className="text-4xl font-semibold mb-4">Welcome Back</h1>
          <p className="text-lg text-center max-w-md">
            You have completed your learning streak for 5 days!
            <br />
            Let's dive in and see how you did!
          </p>
        </div>
        
        {/* Progress dots at bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
