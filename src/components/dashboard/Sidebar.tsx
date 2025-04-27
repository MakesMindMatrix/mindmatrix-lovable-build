
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Bookmark, CheckSquare, User, HelpCircle, Settings } from "lucide-react";

export const Sidebar: React.FC = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard-Day1" },
    { icon: Bookmark, label: "Programs", path: "/programs" },
    { icon: CheckSquare, label: "Tasks", path: "/tasks" },
    { icon: User, label: "My Space", path: "/my-space" },
    { icon: HelpCircle, label: "Support", path: "/support" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
            alt="MindMatrix Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-gray-800">MindMatrix</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive 
                      ? "bg-blue-50 text-blue-700" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Subscription Promo Card */}
      <div className="p-4">
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <h3 className="font-bold text-lg">Get 50% Off</h3>
          <p className="text-sm text-blue-100 mt-1">Upgrade to Premium and save</p>
          <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};
