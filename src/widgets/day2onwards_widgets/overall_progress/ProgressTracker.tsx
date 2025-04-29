
"use client";
import * as React from "react";
import ProgressCircle from "./ProgressCircle";
import StatItem from "./StatItem";

const ProgressTracker: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-5 py-9 rounded-[20px] bg-stone-900/70 backdrop-blur-md border border-white/20 w-[400px] h-[240px] shadow-lg relative">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 to-stone-800/80 backdrop-blur-md z-0" />
      
      <div className="w-full relative z-10">
        <div className="flex justify-between items-center w-full">
          <article className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60">
            <header className="flex gap-4 items-center self-start text-xl font-semibold tracking-tight text-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f33e70577e3dde645a9dd82bc8059e5bcb2f33c4?placeholderIfAbsent=true"
                alt="Progress icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
              />
              <h2 className="self-stretch my-auto">Overall Progress</h2>
            </header>

            <div className="flex gap-7 justify-between items-center mt-6 w-full">
              <ProgressCircle percentage={60} />

              <div className="flex gap-10 items-center self-stretch my-auto font-medium tracking-tight">
                <div className="self-stretch my-auto w-[114px]">
                  <StatItem
                    value="3"
                    label="Tasks Completed"
                    valueClassName="text-2xl text-white"
                  />

                  <div className="mt-8 w-full">
                    <StatItem
                      value="100Pts"
                      label="Career coins earned"
                      valueClassName="text-xl text-white"
                    />
                  </div>
                </div>

                <div className="self-stretch my-auto w-[78px]">
                  <StatItem
                    value="2"
                    label="Tasks Missed"
                    valueClassName="text-2xl text-white"
                  />

                  <div className="mt-8 w-14 whitespace-nowrap">
                    <StatItem
                      value="4"
                      label="Programs"
                      valueClassName="text-xl text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
