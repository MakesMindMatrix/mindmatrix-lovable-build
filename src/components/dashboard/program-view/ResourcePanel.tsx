
import React from "react";

const ResourcePanel = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/cd1ba95f379203244c9e3f857b6fca3674f72f63"
            alt="AI assistant" 
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <p className="text-white text-sm mb-4">
        These courses will help you upskill at the areas you are currently still yet to improve at
      </p>
      
      <div className="space-y-3">
        <button className="w-full py-2 px-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white text-sm text-left flex items-center justify-between">
          <span>Select to continue conversation</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="w-full py-2 px-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white text-sm flex items-center justify-between">
          <span>I want to know more</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="w-full py-2 px-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white text-sm flex items-center justify-between">
          <span>are you sure?</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="mt-3 text-white/60 text-xs">
        I want to know more
      </div>
      
      <div className="mt-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-3 mb-3">
          <p className="text-white/60 text-xs">Zuno is typing...</p>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Type something..." 
            className="w-full py-3 px-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/40"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcePanel;
