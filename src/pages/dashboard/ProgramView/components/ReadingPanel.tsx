
import React from "react";
import { ArrowDown, BookOpenCheck, Save, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadingPanelProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
  documentFormat: string;
  setDocumentFormat: (format: string) => void;
}

const ReadingPanel: React.FC<ReadingPanelProps> = ({
  activeTab,
  handleTabChange,
  documentFormat,
  setDocumentFormat
}) => {
  return (
    <div className="flex-1 backdrop-blur-xl bg-linear-to-br from-[#2A3A80]/70 to-[#1A2C6B]/60 border border-white/10 rounded-lg flex flex-col overflow-hidden z-10 h-full shadow-lg">
      {/* Tab navigation */}
      <div className="flex bg-[#1E2D6F]/80 backdrop-blur-md rounded-t-lg border-b border-white/10">
        <Button 
          variant="ghost" 
          className={`${activeTab === 'read' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('read')}
        >
          <span className="text-sm">Read</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'resources' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('resources')}
        >
          <span className="text-sm">Resources</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`${activeTab === 'notifications' ? 'bg-[#2A3A80]/50 text-white' : 'text-white/60'} rounded-none px-6 py-1.5 h-auto flex-1`}
          onClick={() => handleTabChange('notifications')}
        >
          <span className="text-sm">Notifications</span>
        </Button>
      </div>
      
      {/* Content area */}
      <div className="flex-1 p-3 rounded-b-lg overflow-hidden flex flex-col">
        {activeTab === 'read' && (
          <>
            {/* Document type selection */}
            <div className="mb-3">
              <Button 
                className={`mr-2 ${documentFormat === 'PDF' ? 'bg-[#3A4A90]/40' : 'bg-[#3A4A90]/30'} hover:bg-[#3A4A90]/40 text-white text-sm py-1 h-auto px-4`}
                onClick={() => setDocumentFormat('PDF')}
              >
                PDF
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white/60 hover:text-white text-sm py-1 h-auto px-4 ${documentFormat === 'PPT' ? 'bg-[#3A4A90]/20' : ''}`}
                onClick={() => setDocumentFormat('PPT')}
              >
                PPT
              </Button>
            </div>
            
            {/* Document controls */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <BookOpenCheck className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">JavaScript Fundamentals</span>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-transparent border-white/20 text-white h-7 text-xs flex items-center gap-1"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-transparent border-white/20 text-white h-7 text-xs flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </Button>
              </div>
            </div>
            
            {/* PDF viewer */}
            <div className="flex-1 bg-white rounded-lg p-3 overflow-y-auto min-h-[calc(100%-80px)]">
              <div className="h-full w-full flex flex-col">
                <div className="text-center mb-4 bg-gray-100 py-3 rounded-md">
                  <h2 className="font-bold text-lg">JavaScript Fundamentals</h2>
                  <p className="text-sm text-gray-600">Learning Module</p>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="font-bold text-lg mb-2">1. Introduction to JavaScript</h3>
                  <p className="mb-3">
                    JavaScript is a lightweight, interpreted programming language that is designed for creating 
                    network-centric applications. It is complementary to and integrated with Java. JavaScript is very 
                    easy to implement because it is integrated with HTML.
                  </p>
                  
                  <h3 className="font-bold text-lg mb-2">2. Variables and Data Types</h3>
                  <p className="mb-3">
                    JavaScript has several data types: String, Number, Boolean, Object, Undefined, Null, Symbol (ES6).
                  </p>
                  
                  <pre className="bg-gray-100 p-2 rounded-md my-3 overflow-x-auto">
                    <code>
                      {`// Variable declaration
let name = "John"; // String
const age = 25;    // Number
var isActive = true; // Boolean`}
                    </code>
                  </pre>
                  
                  <h3 className="font-bold text-lg mb-2">3. Operators</h3>
                  <p className="mb-3">
                    JavaScript includes various operators: arithmetic, comparison, logical, assignment, 
                    and more.
                  </p>
                  
                  <h3 className="font-bold text-lg mb-2">4. Control Flow</h3>
                  <p className="mb-3">
                    Control flow statements enable you to control the execution flow based on different conditions.
                  </p>
                  
                  <pre className="bg-gray-100 p-2 rounded-md my-3 overflow-x-auto">
                    <code>
                      {`// If-else statement
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
                    </code>
                  </pre>
                  
                  <h3 className="font-bold text-lg mb-2">5. Functions</h3>
                  <p className="mb-3">
                    Functions are one of the fundamental building blocks in JavaScript.
                  </p>
                  
                  <pre className="bg-gray-100 p-2 rounded-md my-3 overflow-x-auto">
                    <code>
                      {`// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function (ES6)
const multiply = (a, b) => a * b;`}
                    </code>
                  </pre>
                  
                  <h3 className="font-bold text-lg mb-2">6. Objects and Arrays</h3>
                  <p className="mb-3">
                    Objects and arrays are essential for storing and manipulating data in JavaScript.
                  </p>
                  
                  <pre className="bg-gray-100 p-2 rounded-md my-3 overflow-x-auto">
                    <code>
                      {`// Object literal
const person = {
  name: "John",
  age: 25,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// Array
const fruits = ["Apple", "Banana", "Orange"];`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'resources' && (
          <div className="text-white h-full flex items-center justify-center">
            <p className="text-sm">Resources content will appear here</p>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="text-white h-full flex items-center justify-center">
            <p className="text-sm">Notifications content will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingPanel;
