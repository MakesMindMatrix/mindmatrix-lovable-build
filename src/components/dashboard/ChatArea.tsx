
import React from "react";
import { ChatInterface } from "./chat/ChatInterface";

const ChatArea: React.FC = () => {
  return (
    <div className="mt-4 bg-gradient-to-br from-[#b7ccf0] to-[#b7ccf0]/30 rounded-2xl p-6 h-[calc(100vh-10rem)] relative overflow-hidden">
      {/* Blue gradient overlay for visual effect */}
      <div className="absolute w-full h-full top-0 left-0 right-0 pointer-events-none">
        <div className="absolute w-[938px] h-[767px] top-0 left-1/2 transform -translate-x-1/2 bg-[#0f56cc] rounded-[469px/383.5px] blur-[250px] opacity-20"></div>
        <div className="absolute w-[402px] h-[330px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0f56cc] rounded-[201px/165px] blur-[75px] opacity-20"></div>
      </div>
      <ChatInterface />
    </div>
  );
};

export default ChatArea;
