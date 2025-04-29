
import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-full w-[43px] bg-white justify-between py-4">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6f57eda035506c522fe70bf8c8b04d15157a0bd5?placeholderIfAbsent=true"
            className="object-contain aspect-[2.05] w-[41px]"
            alt="Logo"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ea5596b34e872f4b821ee3a8b4415436f8b07993?placeholderIfAbsent=true"
          className="object-contain mt-8 aspect-[0.33] w-[43px]"
          alt="Navigation divider"
        />
        
        <div className="mt-6 flex flex-col gap-6 items-center">
          <button className="h-10 w-10 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </button>
          
          <button className="h-10 w-10 rounded-md flex items-center justify-center bg-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </button>
          
          <button className="h-10 w-10 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          </button>
          
          <button className="h-10 w-10 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="7" height="7" x="3" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="14" rx="1"/>
              <rect width="7" height="7" x="3" y="14" rx="1"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <button className="h-10 w-10 rounded-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
        </button>
        
        <button className="h-10 w-10 rounded-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
            <path d="M12 2v2"/>
            <path d="M12 22v-2"/>
            <path d="m17 20.66-1-1.73"/>
            <path d="M11 10.27 7 3.34"/>
            <path d="m20.66 17-1.73-1"/>
            <path d="m3.34 7 1.73 1"/>
            <path d="M14 12h8"/>
            <path d="M2 12h2"/>
            <path d="m20.66 7-1.73 1"/>
            <path d="m3.34 17 1.73-1"/>
            <path d="m17 3.34-1 1.73"/>
            <path d="m11 13.73-4 6.93"/>
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
