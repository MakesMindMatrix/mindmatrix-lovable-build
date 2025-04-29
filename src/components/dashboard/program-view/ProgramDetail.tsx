
import React from "react";
import { Badge } from "@/components/ui/badge";

const ProgramDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <button className="flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-white/20">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <p className="text-white text-lg">Currently Viewing</p>
      </div>

      <div className="mt-4 bg-gradient-to-r from-orange-300 to-orange-400 rounded-3xl p-4 shadow-lg overflow-hidden">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Circuit design" 
            className="w-full h-32 object-cover rounded-2xl"
          />
          <Badge className="absolute top-2 right-2 bg-orange-500 text-white border-0">
            AEC
          </Badge>
          <div className="absolute bottom-2 left-2 bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-xs text-white">Prompt</span>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl text-white font-semibold">Introduction to Circuit Design</h2>
          <p className="text-white/90 text-sm mt-2">
            Learn the core technologies that power the web: this course covers everything from basic technologies that power the web, this course covers everything from basic.
          </p>
        </div>

        <div className="flex justify-between mt-4 text-white">
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7H7V9H9V7Z" fill="white"/>
              <path d="M9 11H7V13H9V11Z" fill="white"/>
              <path d="M9 15H7V17H9V15Z" fill="white"/>
              <path d="M13 7H11V9H13V7Z" fill="white"/>
              <path d="M17 7H15V9H17V7Z" fill="white"/>
              <path d="M13 11H11V13H13V11Z" fill="white"/>
              <path d="M17 11H15V13H17V11Z" fill="white"/>
              <path d="M13 15H11V17H13V15Z" fill="white"/>
              <path d="M17 15H15V17H17V15Z" fill="white"/>
            </svg>
            <span className="ml-1 text-sm">12 Modules</span>
          </div>

          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-1 text-sm">8 Weeks</span>
          </div>

          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.0004 5C7.52281 5 3.73253 7.94288 2.45825 12C3.73251 16.0571 7.52281 19 12.0004 19C16.478 19 20.2683 16.0571 21.5426 12C20.2683 7.94291 16.478 5 12.0004 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-1 text-sm">280</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl text-white font-medium">47%</span>
            <span className="text-sm text-white/90">Completed</span>
          </div>
          <div className="h-2 w-full bg-white/30 rounded-full">
            <div className="h-full bg-white rounded-full" style={{ width: "47%" }}></div>
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <p className="text-xl font-medium text-white">10</p>
              <p className="text-xs text-white/90">Completed</p>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-medium text-white">2</p>
              <p className="text-xs text-white/90">In progress</p>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-medium text-white">100Pts</p>
              <p className="text-xs text-white/90">Earned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
