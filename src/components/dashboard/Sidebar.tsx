
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
    <aside className="self-stretch my-auto w-[191px]">
      <div className="flex flex-col w-full">
        <Logo />
        <nav className="mt-16 w-full font-semibold text-stone-500 max-md:mt-10">
          <NavigationSection title="GENERAL" items={generalNavItems} />
          <NavigationSection
            title="PERSONAL"
            items={personalNavItems}
            className="mt-6"
          />
        </nav>
      </div>

      <div className="mt-32 w-full font-semibold max-md:mt-10">
        <PromotionBanner />
        <nav className="mt-3.5 w-full space-y-2">
          {supportNavItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center px-5 py-4 rounded-xl text-stone-500 hover:bg-gray-50"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
