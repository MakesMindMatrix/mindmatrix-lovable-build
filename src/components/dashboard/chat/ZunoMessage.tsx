
import React from "react";
import { WidgetContainer } from "./WidgetContainer";
import { MessageType } from "./ChatInterface";

interface ZunoMessageProps {
  message: MessageType;
}

export const ZunoMessage: React.FC<ZunoMessageProps> = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
        Z
      </div>
      <div className="max-w-[80%]">
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-gray-800">{message.content}</p>
        </div>
        
        {/* Display widget if widgetId is present */}
        {message.widgetId && (
          <div className="mt-3">
            <WidgetContainer 
              widgetId={message.widgetId} 
              widgetProps={message.widgetProps} 
            />
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};
