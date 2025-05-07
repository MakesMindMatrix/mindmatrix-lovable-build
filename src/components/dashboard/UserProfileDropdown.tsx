
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { User, LogOut, Settings } from "lucide-react";
import { toast } from "sonner";

const UserProfileDropdown = () => {
  const navigate = useNavigate();

  const handleMyAccount = () => {
    navigate("/my-account");
  };

  const handleSignOut = () => {
    // In a real app with authentication, you would clear auth tokens here
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-[45px] w-[45px] cursor-pointer border-2 border-white/20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/cd1ba95f379203244c9e3f857b6fca3674f72f63"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={handleMyAccount} className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>My Account</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
