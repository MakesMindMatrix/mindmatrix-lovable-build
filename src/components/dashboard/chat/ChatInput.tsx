
import React, { ChangeEvent, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Button 
          onClick={onSend} 
          disabled={!value.trim()} 
          variant="default" 
          size="icon"
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
