
import React from "react";
import Logo from "./Logo";
import NavigationSection from "./NavigationSection";
import PromotionBanner from "./PromotionBanner";
import { Home, BookOpen, CheckSquare, User, HelpCircle, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  const generalNavItems = [
    { icon: <Home className="w-4 h-4" />, label: "Home", isActive: true },
    { icon: <BookOpen className="w-4 h-4" />, label: "Programs", isActive: false },
    { icon: <CheckSquare className="w-4 h-4" />, label: "Tasks", isActive: false },
  ];

  const personalNavItems = [
    { icon: <User className="w-4 h-4" />, label: "My Space", isActive: false },
  ];

  const supportNavItems = [
    { icon: <HelpCircle className="w-4 h-4" />, label: "Support", isActive: false },
    { icon: <Settings className="w-4 h-4" />, label: "Settings", isActive: false },
  ];

  return (
    <div className="flex flex-col h-full w-[191px] justify-between">
      <div className="flex flex-col w-full">
        <Logo />

        <nav className="mt-16 w-full font-semibold text-[#696969]">
          <NavigationSection title="GENERAL" items={generalNavItems} />
          <NavigationSection
            title="PERSONAL"
            items={personalNavItems}
            className="mt-6"
          />
        </nav>
      </div>

      <div className="mb-6 w-full">
        <PromotionBanner />

        <nav className="mt-3.5 w-full space-y-2">
          {supportNavItems.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-[#696969] hover:bg-gray-50 rounded-lg"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
