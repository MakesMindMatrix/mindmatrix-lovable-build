
"use client";
import * as React from "react";
import ProgressCircle from "./ProgressCircle";
import StatItem from "./StatItem";

const ProgressTracker: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-4 py-6 rounded-xl bg-stone-900/70 backdrop-blur-md border border-white/20 w-full shadow-lg relative">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-stone-900/80 to-stone-800/80 backdrop-blur-md z-0" />
      
      <div className="w-full relative z-10">
        <div className="flex justify-between items-center w-full">
          <article className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0">
            <header className="flex gap-3 items-center self-start text-lg font-semibold tracking-tight text-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f33e70577e3dde645a9dd82bc8059e5bcb2f33c4?placeholderIfAbsent=true"
                alt="Progress icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              />
              <h2 className="self-stretch my-auto">Overall Progress</h2>
            </header>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center mt-4 w-full">
              <ProgressCircle percentage={60} />

              <div className="flex gap-8 items-center self-stretch my-auto font-medium tracking-tight">
                <div className="self-stretch my-auto">
                  <StatItem
                    value="3"
                    label="Tasks Completed"
                    valueClassName="text-xl text-white"
                  />

                  <div className="mt-4 w-full">
                    <StatItem
                      value="100Pts"
                      label="Career coins earned"
                      valueClassName="text-lg text-white"
                    />
                  </div>
                </div>

                <div className="self-stretch my-auto">
                  <StatItem
                    value="2"
                    label="Tasks Missed"
                    valueClassName="text-xl text-white"
                  />

                  <div className="mt-4">
                    <StatItem
                      value="4"
                      label="Programs"
                      valueClassName="text-lg text-white"
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
