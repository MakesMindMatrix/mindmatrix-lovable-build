
import React from "react";
import { Save, Copy, RefreshCcw, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CodeEditor: React.FC = () => {
  return (
    <>
      {/* Code editor section */}
      <div className="bg-blue-800/80 px-3 py-2">
        <div className="flex space-x-2">
          <Button variant="secondary" className="bg-blue-600/80 text-white hover:bg-blue-700 text-xs py-1 px-3 h-auto">
            Code
          </Button>
          <Button variant="secondary" className="bg-blue-600/30 text-white hover:bg-blue-700 text-xs py-1 px-3 h-auto">
            CAD Labs
          </Button>
        </div>
      </div>
      
      {/* Code editor toolbar */}
      <div className="bg-blue-900/80 flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <span className="text-white mr-2">Python</span>
          <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M5 7l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
            <Save className="h-5 w-5" />
            Save
          </Button>
          <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
            <Copy className="h-5 w-5" />
            Copy
          </Button>
          <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
            <RefreshCcw className="h-5 w-5" />
            Reset
          </Button>
          <Button variant="ghost" className="text-white bg-transparent hover:bg-blue-700/50 flex items-center gap-2">
            <Play className="h-5 w-5" />
            Run
          </Button>
        </div>
      </div>
      
      {/* Code editor content */}
      <div className="flex-grow bg-white p-4 overflow-y-auto">
        <pre className="text-gray-800 font-mono whitespace-pre-wrap">
          {`prompt = """\nYou are a helpful assistant. Please answer\nthe following question clearly and\nconcisely.\n\nQuestion: {user_input}\nAnswer:`}
        </pre>
      </div>
    </>
  );
};

export default CodeEditor;
