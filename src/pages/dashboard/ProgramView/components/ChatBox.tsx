
import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "zuno",
      content: "Welcome to the JavaScript Fundamentals learning module. I'm here to guide you through the material and answer any questions you might have.",
      timestamp: new Date(),
    },
  ]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage = {
        id: `user-${new Date().getTime()}`,
        sender: "user",
        content: inputValue,
        timestamp: new Date(),
      };
      
      setMessages([...messages, userMessage]);
      setInputValue("");
      
      // Simulate Zuno typing response
      setTimeout(() => {
        const zunoResponse = {
          id: `zuno-${new Date().getTime()}`,
          sender: "zuno",
          content: "I'm happy to help with JavaScript fundamentals. What specific topic would you like to explore first?",
          timestamp: new Date(),
        };
        
        setMessages(prevMessages => [...prevMessages, zunoResponse]);
      }, 1500);
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Chat messages area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea ref={scrollAreaRef} className="h-full">
          <div className="p-4 pb-20"> {/* Add padding at bottom to ensure messages aren't hidden behind input */}
            {/* Zuno avatar and badge */}
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <img 
                  src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                  alt="Zuno" 
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Zuno
              </div>
            </div>

            {/* Message bubbles */}
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.sender === "user" ? "flex justify-end" : ""}`}>
                {message.sender === "zuno" ? (
                  <div className="bg-blue-50 rounded-lg p-4 text-blue-900 max-w-[90%]">
                    {message.content}
                  </div>
                ) : (
                  <div className="bg-blue-100 rounded-lg p-4 text-blue-900 max-w-[90%]">
                    {message.content}
                  </div>
                )}
              </div>
            ))}
            
            {/* "Zuno is ready to help" status */}
            {messages.length > 0 && messages[messages.length - 1].sender === "zuno" && (
              <div className="text-blue-800 text-sm mt-4 mb-2">
                Zuno is ready to help...
              </div>
            )}
            
            {/* Action button */}
            <div className="flex justify-end mb-4">
              <Button 
                className="bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-full px-4 py-2"
                onClick={() => {
                  const helpMessage = {
                    id: `user-${new Date().getTime()}`,
                    sender: "user",
                    content: "I want to know more",
                    timestamp: new Date(),
                  };
                  
                  setMessages([...messages, helpMessage]);
                  
                  // Simulate Zuno response
                  setTimeout(() => {
                    const zunoResponse = {
                      id: `zuno-${new Date().getTime()}`,
                      sender: "zuno",
                      content: "JavaScript has three ways to declare variables: var, let, and const. Each has different scoping rules and behavior. Would you like me to explain the differences?",
                      timestamp: new Date(),
                    };
                    
                    setMessages(prevMessages => [...prevMessages, zunoResponse]);
                  }, 1500);
                }}
              >
                I want to know more
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>
      
      {/* Fixed Chat Input at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 bg-gradient-to-t from-blue-50 via-blue-50 to-transparent">
        <div className="flex items-center bg-white rounded-full border border-blue-100 pr-2 overflow-hidden">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type something..." 
            className="flex-1 px-4 py-3 bg-transparent outline-none text-blue-900"
          />
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full h-8 w-8 bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
