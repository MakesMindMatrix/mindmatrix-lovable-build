
"use client";

import * as React from "react";
import TabNavigation from "./TabNavigation";
import CourseCard from "./CourseCard";

function CourseDisplay() {
  return (
    <section className="flex flex-col max-w-full">
      <TabNavigation />
      <div className="overflow-hidden mt-9 w-full">
        <div className="w-full">
          <div className="w-full">
            <CourseCard
              courseNumber="Course 1"
              title="Course Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              hours={2}
              sessions={7}
              iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/c68242a9b1af8ba76d6c3016a98fa2f752d355da?placeholderIfAbsent=true"
            />

            <div className="flex gap-4 items-start mt-5 w-full">
              <div className="flex flex-1 shrink gap-4 justify-between items-start w-full basis-0 min-w-60">
                <CourseCard
                  courseNumber="Course 2"
                  title="Course Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  hours={2}
                  sessions={7}
                  iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/c47a9b8a19099ff348e9429ef814f1f1ccc21b79?placeholderIfAbsent=true"
                  clockIconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/3f20d0856b29a889b46b14aab8bd29c74a877535?placeholderIfAbsent=true"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-5 w-full min-h-0" />
        </div>
      </div>
    </section>
  );
}

export default CourseDisplay;
