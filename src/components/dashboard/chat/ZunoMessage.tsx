
import React from "react";
import { MessageType } from "./ChatInterface";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ZunoMessageProps {
  message: MessageType;
}

export const ZunoMessage: React.FC<ZunoMessageProps> = ({ message }) => {
  return (
    <div className="flex items-start space-x-3">
      <Avatar className="w-8 h-8 bg-blue-600">
        <AvatarImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727" />
        <AvatarFallback>Z</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center">
          <p className="text-sm font-medium text-blue-600">Zuno</p>
          <span className="text-xs text-gray-400 ml-2">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="bg-white rounded-lg rounded-tl-none p-3 mt-1 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-800">{message.content}</p>
        </div>
      </div>
    </div>
  );
};
