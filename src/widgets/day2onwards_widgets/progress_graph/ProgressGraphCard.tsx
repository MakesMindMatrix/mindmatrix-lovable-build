
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

const data = [
  { month: "Jan", value: 10, target: 30 },
  { month: "Feb", value: 15, target: 30 },
  { month: "Mar", value: 20, target: 30 },
  { month: "Apr", value: 25, target: 30 },
  { month: "May", value: 35, target: 30 },
  { month: "Jun", value: 45, target: 30 },
  { month: "Jul", value: 60, target: 30 },
];

const ProgressGraphCard: React.FC = () => {
  const config = {
    line: {
      label: "Progress Line",
      color: "#FFFFFF",
    },
  };

  return (
    <Card className="w-[460px] h-[270px] bg-blue-500 text-white overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f33e70577e3dde645a9dd82bc8059e5bcb2f33c4?placeholderIfAbsent=true"
            alt="Progress icon"
            className="w-5 h-5 object-contain"
          />
          Progress Graph
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex gap-4 items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span className="text-xs">Your Ideal Journey</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span className="text-xs">Your Current Journey</span>
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="text-6xl font-bold">2</div>
          <div className="text-2xl">%</div>
        </div>

        <div className="h-[100px] w-full relative">
          <ChartContainer config={config} className="h-full text-white">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', fontSize: 10 }}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" vertical={false} />
              <ChartTooltip
                content={<ChartTooltipContent className="bg-white/80 text-blue-900" />}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="white" 
                dot={false}
                strokeWidth={2} 
              />
              <ReferenceDot x="Jul" y={60} r={4} fill="white" stroke="none">
                <Label position="top" fill="white">
                  Your Current Goal
                </Label>
              </ReferenceDot>
            </LineChart>
          </ChartContainer>
          
          {/* Target label */}
          <div className="absolute top-0 right-10 bg-white text-blue-900 rounded px-2 py-0.5 text-xs">
            Your Target: 60%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressGraphCard;
