
import React, { useState, useRef, useEffect } from "react";
import { ZunoMessage } from "./ZunoMessage";
import { UserMessage } from "./UserMessage";
import { ChatInput } from "./ChatInput";
import { ResponseOptions } from "./ResponseOptions";

// Types for messages
export type MessageType = {
  id: string;
  content: string;
  sender: "zuno" | "user";
  timestamp: Date;
  options?: string[];
};

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      content: "👋 Hi there! I'm Zuno, your AI career mentor. Welcome to MindMatrix! I'm here to help you achieve your career goals.",
      sender: "zuno",
      timestamp: new Date(),
      options: [
        "Thanks! I'm excited to start",
        "What can you help me with?",
        "How does this work?"
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const newUserMessage: MessageType = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate Zuno's response after a delay
    setTimeout(() => {
      // This is a placeholder - in your real app, you'll have the actual Zuno responses
      const zunoResponse: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "That's great! I'm here to guide you through your career journey. Let's start by understanding your goals better.",
        sender: "zuno",
        timestamp: new Date(),
        options: [
          "I want to improve my skills",
          "I'm looking for a new job",
          "I want to change careers"
        ]
      };
      
      setMessages((prev) => [...prev, zunoResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionSelect = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          message.sender === "zuno" ? (
            <ZunoMessage key={message.id} message={message} />
          ) : (
            <UserMessage key={message.id} message={message} />
          )
        ))}
        
        {/* Show response options for the last Zuno message */}
        {messages.length > 0 && 
          messages[messages.length - 1].sender === "zuno" && 
          messages[messages.length - 1].options && (
            <ResponseOptions 
              options={messages[messages.length - 1].options!} 
              onSelect={handleOptionSelect}
            />
        )}
        
        {isTyping && (
          <div className="flex items-center text-gray-500 text-sm">
            <div className="animate-pulse flex space-x-1">
              <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
            </div>
            <span className="ml-2">Zuno is typing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSend={() => {
          if (inputValue.trim()) {
            handleSendMessage(inputValue);
          }
        }}
      />
    </div>
  );
};
