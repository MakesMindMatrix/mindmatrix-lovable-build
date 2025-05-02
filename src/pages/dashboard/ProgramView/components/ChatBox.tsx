
import React, { useState, useRef, useEffect } from "react";
import { Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatBoxProps {
  expandedView?: boolean;
}

const ChatBox: React.FC<ChatBoxProps> = ({ expandedView = false }) => {
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
          content: expandedView 
            ? "I see you're reviewing resource materials. Would you like me to explain any concepts from these resources in more detail?" 
            : "I'm happy to help with JavaScript fundamentals. What specific topic would you like to explore first?",
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
      {/* Header only shown in expanded view */}
      {expandedView && (
        <div className="flex items-center mb-3 p-3 bg-blue-500/20 rounded-t-lg">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
            <img 
              src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
              alt="Zuno" 
              className="w-6 h-6 rounded-full"
            />
          </div>
          <div className="text-white font-medium">
            Zuno - Learning Assistant
          </div>
        </div>
      )}
      
      {/* Chat messages area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea ref={scrollAreaRef} className="h-full">
          <div className="p-4 pb-20"> {/* Add padding at bottom to ensure messages aren't hidden behind input */}
            {/* Zuno avatar and badge - only show in non-expanded view */}
            {!expandedView && (
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
            )}

            {/* Message bubbles */}
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.sender === "user" ? "flex justify-end" : "flex"}`}>
                {message.sender === "zuno" && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage 
                      src="/lovable-uploads/ba53cec3-ed80-4d2f-bdca-9d0a14fd6e1d.png" 
                      alt="Zuno" 
                    />
                    <AvatarFallback className="bg-blue-600 text-white">Z</AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`${
                  message.sender === "zuno" 
                    ? "bg-blue-50 rounded-lg p-4 text-blue-900" 
                    : "bg-blue-100 rounded-lg p-4 text-blue-900"
                  } max-w-[85%]`}>
                  {message.content}
                </div>
                
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {/* "Zuno is ready to help" status */}
            {messages.length > 0 && messages[messages.length - 1].sender === "zuno" && (
              <div className="text-blue-800 text-sm mt-4 mb-2">
                Zuno is ready to help...
              </div>
            )}
            
            {/* Action buttons - modified for expanded view */}
            <div className="flex justify-end mb-4 gap-2 flex-wrap">
              {expandedView ? (
                <>
                  <Button 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-full px-4 py-2"
                    onClick={() => {
                      const helpMessage = {
                        id: `user-${new Date().getTime()}`,
                        sender: "user",
                        content: "Can you explain this resource?",
                        timestamp: new Date(),
                      };
                      
                      setMessages([...messages, helpMessage]);
                      
                      // Simulate Zuno response
                      setTimeout(() => {
                        const zunoResponse = {
                          id: `zuno-${new Date().getTime()}`,
                          sender: "zuno",
                          content: "This resource covers key concepts in programming. The document explains variables, control structures, and functions. Would you like me to focus on any particular section?",
                          timestamp: new Date(),
                        };
                        
                        setMessages(prevMessages => [...prevMessages, zunoResponse]);
                      }, 1500);
                    }}
                  >
                    Explain this resource
                  </Button>
                  <Button 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-full px-4 py-2"
                    onClick={() => {
                      const helpMessage = {
                        id: `user-${new Date().getTime()}`,
                        sender: "user",
                        content: "Summarize the key points",
                        timestamp: new Date(),
                      };
                      
                      setMessages([...messages, helpMessage]);
                      
                      // Simulate Zuno response
                      setTimeout(() => {
                        const zunoResponse = {
                          id: `zuno-${new Date().getTime()}`,
                          sender: "zuno",
                          content: "Key points from this resource:\n\n1. Variables store data and can be declared with let, const, or var\n2. Functions help organize code into reusable blocks\n3. Control structures like if/else and loops control program flow\n4. Data types include strings, numbers, booleans, arrays, and objects",
                          timestamp: new Date(),
                        };
                        
                        setMessages(prevMessages => [...prevMessages, zunoResponse]);
                      }, 1500);
                    }}
                  >
                    Summarize key points
                  </Button>
                </>
              ) : (
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
              )}
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
