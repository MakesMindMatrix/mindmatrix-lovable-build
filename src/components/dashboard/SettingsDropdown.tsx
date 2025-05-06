
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SettingsDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app with authentication, you would clear auth tokens here
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleViewPrivacyPolicy = () => {
    // In a real app, navigate to privacy policy page
    toast.info("Privacy Policy would open here");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
          <LogOut className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          Log Out
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleViewPrivacyPolicy} className="cursor-pointer">
          View Privacy Policy
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;
