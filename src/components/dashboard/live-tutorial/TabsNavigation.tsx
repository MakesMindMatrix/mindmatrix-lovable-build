
import React from "react";
import { Beaker, Link2, Bell } from "lucide-react";
import TabButton from "./TabButton";

const TabsNavigation: React.FC = () => {
  return (
    <div className="bg-blue-700/90 text-white h-12 flex">
      <TabButton icon={<Beaker className="h-5 w-5" />} label="Labs" />
      <TabButton icon={<Link2 className="h-5 w-5" />} label="Resources" />
      <TabButton icon={<Bell className="h-5 w-5" />} label="Notifications" />
    </div>
  );
};

export default TabsNavigation;
