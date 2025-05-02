
import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      {/* Scrollable Chat Area that fills available space */}
      <div className="h-[calc(100%-60px)] overflow-hidden">
        <ScrollArea ref={scrollAreaRef} className="h-full pb-2">
          <div className="px-4">
            {messages.map((message) => (
              <div key={message.id} className="mb-4">
                {message.sender === "zuno" ? (
                  <div className="mb-4">
                    <div className="flex mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100/50 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                          alt="Zuno" 
                          className="w-6 h-6 rounded-full"
                        />
                      </div>
                      <Badge variant="outline" className="ml-2 bg-blue-100/50 text-blue-900 text-xs">Zuno</Badge>
                    </div>
                    <div className="bg-blue-100/70 backdrop-blur-sm border border-blue-200/50 rounded-lg p-3 text-blue-900 text-sm">
                      {message.content}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row-reverse mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200/50 flex items-center justify-center ml-2">
                      <div className="text-gray-600 text-xs font-semibold">You</div>
                    </div>
                    <div className="bg-gray-200/70 backdrop-blur-sm border border-gray-300/50 rounded-lg p-3 text-gray-800 text-sm">
                      {message.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {messages.length > 0 && messages[messages.length - 1].sender === "zuno" && (
              <div className="text-blue-900 text-xs mb-2">
                Zuno is ready to help...
              </div>
            )}
            
            {/* Action button */}
            <div className="flex justify-end mb-2">
              <Button 
                className="bg-blue-100/50 text-blue-800 hover:bg-blue-200/50 text-xs py-1 h-auto px-3 rounded-lg"
                onClick={() => {
                  const helpMessage = {
                    id: `user-${new Date().getTime()}`,
                    sender: "user",
                    content: "I want to know more about JavaScript variables.",
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
      <div className="h-[60px] border-t border-blue-200/30 bg-white/10 backdrop-blur-sm p-3">
        <div className="relative w-full">
          <Textarea 
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type something..." 
            className="min-h-[40px] bg-transparent border border-blue-200/50 px-4 py-2 rounded-md text-blue-900 w-full resize-none pr-10 placeholder-blue-400/70 text-sm"
            style={{ height: '40px' }}
          />
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-6 w-6 bg-blue-100/50 hover:bg-blue-200/50 text-blue-800"
            onClick={handleSendMessage}
          >
            <Send className="h-3 w-3 text-blue-800 rotate-45" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
