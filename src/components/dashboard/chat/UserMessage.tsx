
import React from "react";
import { MessageType } from "./ChatInterface";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserMessageProps {
  message: MessageType;
}

export const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  return (
    <div className="flex items-start justify-end space-x-3">
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          <span className="text-xs text-gray-400 mr-2">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <p className="text-sm font-medium text-gray-700">You</p>
        </div>
        <div className="bg-blue-600 text-white rounded-lg rounded-tr-none p-3 mt-1 shadow-sm">
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    </div>
  );
};
