
import React from "react";
import { ChatInterface } from "./chat/ChatInterface";

const ChatArea: React.FC = () => {
  return (
    <div className="mt-4 bg-gradient-to-br from-blue-100/80 to-blue-300/30 rounded-2xl p-6 h-[calc(100vh-10rem)]">
      <ChatInterface />
    </div>
  );
};

export default ChatArea;
