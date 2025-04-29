
import React from "react";
import { Home, FileText, Calendar, Settings, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 flex flex-col items-center justify-between py-6 w-[56px] bg-white border-r border-gray-100">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="flex overflow-hidden flex-col justify-center p-px w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6f57eda035506c522fe70bf8c8b04d15157a0bd5?placeholderIfAbsent=true"
            className="object-contain aspect-[2.05] w-[41px]"
            alt="Logo"
          />
        </div>
        
        <div className="flex flex-col items-center gap-6 mt-6">
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Home size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <FileText size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Calendar size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Users size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
      
      <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
        <Settings size={20} className="text-gray-400" />
      </button>
    </aside>
  );
};

export default Sidebar;
