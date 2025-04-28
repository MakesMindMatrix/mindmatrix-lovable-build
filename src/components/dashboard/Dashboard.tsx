
import React from "react";
import { SidebarProvider, Sidebar, SidebarContent } from "@/components/ui/sidebar";
import MainContent from "./MainContent";
import NavigationSection from "./NavigationSection";
import Logo from "./Logo";
import PromotionBanner from "./PromotionBanner";
import { Home, BookOpen, CheckSquare, User, HelpCircle, Settings } from "lucide-react";

const Dashboard: React.FC = () => {
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
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f8f9fe]">
        <Sidebar>
          <SidebarContent>
            <div className="flex flex-col h-full">
              <Logo />
              <nav className="mt-16 space-y-6">
                <NavigationSection title="GENERAL" items={generalNavItems} />
                <NavigationSection title="PERSONAL" items={personalNavItems} />
              </nav>
              <div className="mt-auto mb-6">
                <PromotionBanner />
                <nav className="mt-4 space-y-2">
                  {supportNavItems.map((item, index) => (
                    <button
                      key={index}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
        <MainContent />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
