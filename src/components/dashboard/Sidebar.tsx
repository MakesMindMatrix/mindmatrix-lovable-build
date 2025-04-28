
import React from "react";
import Logo from "./Logo";
import NavigationSection from "./NavigationSection";
import PromotionBanner from "./PromotionBanner";
import NavigationItem from "./NavigationItem";
import { HomeIcon, BookOpen, CheckSquare, User, HelpCircle, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-6">
      <div className="flex flex-col h-full">
        <Logo />
        
        <nav className="mt-12 flex-1">
          <NavigationSection title="GENERAL">
            <NavigationItem icon={<HomeIcon className="w-5 h-5" />} label="Home" isActive={true} />
            <NavigationItem icon={<BookOpen className="w-5 h-5" />} label="Programs" isActive={false} />
            <NavigationItem icon={<CheckSquare className="w-5 h-5" />} label="Tasks" isActive={false} />
          </NavigationSection>

          <NavigationSection title="PERSONAL">
            <NavigationItem icon={<User className="w-5 h-5" />} label="My Space" isActive={false} />
          </NavigationSection>
        </nav>

        <div className="mt-auto">
          <PromotionBanner />
          <div className="mt-4 space-y-2">
            <NavigationItem icon={<HelpCircle className="w-5 h-5" />} label="Support" isActive={false} />
            <NavigationItem icon={<Settings className="w-5 h-5" />} label="Settings" isActive={false} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
