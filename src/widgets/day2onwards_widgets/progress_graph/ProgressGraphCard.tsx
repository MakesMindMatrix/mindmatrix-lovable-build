
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from "recharts";

// Mock data for the two journey lines
const data = [
  { month: "Jan", ideal: 10, current: 5, target: 70 },
  { month: "Feb", ideal: 20, current: 10, target: 70 },
  { month: "Mar", ideal: 30, current: 20, target: 70 },
  { month: "Apr", ideal: 40, current: 25, target: 70 },
  { month: "May", ideal: 50, current: 35, target: 70 },
  { month: "Jun", ideal: 60, current: 45, target: 70 },
  { month: "Jul", ideal: 70, current: 60, target: 70 },
];

const ProgressGraphCard: React.FC = () => {
  const config = {
    idealLine: {
      label: "Ideal Journey",
      color: "#FFFFFF",
    },
    currentLine: {
      label: "Current Journey",
      color: "#CCCCCC",
    },
  };

  const currentLevel = 40; // This should come from your actual data
  const progressPercentage = 57; // Hardcoded to match the design

  return (
    <Card className="w-full bg-indigo-700/60 backdrop-blur-md border border-white/20 text-white shadow-lg relative rounded-xl overflow-hidden">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/70 to-indigo-900/70 backdrop-blur-md z-0" />
      
      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f33e70577e3dde645a9dd82bc8059e5bcb2f33c4?placeholderIfAbsent=true"
            alt="Progress icon"
            className="w-5 h-5 object-contain"
          />
          Progress Graph
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2 relative z-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span className="text-xs">Your Ideal Journey</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <span className="text-xs">Your Current Journey</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Left side with large percentage */}
          <div className="flex flex-col items-center mr-4">
            <div className="text-5xl font-bold">{progressPercentage}</div>
            <div className="text-xl">%</div>
          </div>
          
          {/* Right side with graph */}
          <div className="flex-1 h-[120px] relative">
            <ChartContainer config={config} className="h-full text-white">
              <LineChart data={data} margin={{ top: 20, right: 10, left: -30, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorIdeal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#CCCCCC" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#CCCCCC" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'white', fontSize: 8 }}
                  stroke="rgba(255,255,255,0.3)"
                />
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="rgba(255,255,255,0.1)" 
                  vertical={true} 
                />
                <ChartTooltip
                  content={<ChartTooltipContent className="bg-white/80 text-blue-900" />}
                />
                {/* Ideal journey line */}
                <Line 
                  type="monotone" 
                  dataKey="ideal" 
                  stroke="white" 
                  strokeWidth={2}
                  dot={false}
                />
                {/* Current journey line */}
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="rgba(200,200,200,0.8)" 
                  strokeWidth={2}
                  dot={false}
                />
                
                {/* Career goal indicator */}
                <ReferenceDot 
                  x="Jul" 
                  y={70} 
                  r={4} 
                  fill="white" 
                  stroke="none"
                />
                
                {/* Current level indicator */}
                <ReferenceDot 
                  x="Mar" 
                  y={20} 
                  r={4} 
                  fill="white" 
                  stroke="none"
                />
              </LineChart>
            </ChartContainer>
            
            {/* Current level label - placed with absolute positioning */}
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-900 rounded px-1.5 py-0.5 text-[10px] font-medium shadow-md whitespace-nowrap">
              Your Current Level
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressGraphCard;
