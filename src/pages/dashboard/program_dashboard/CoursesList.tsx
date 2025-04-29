
import React from "react";
import CourseCard from "./CourseCard";

const CoursesList = () => {
  return (
    <section className="flex flex-col min-w-60 w-[445px] max-md:max-w-full">
      <nav className="self-end max-w-full text-xs font-medium leading-loose whitespace-nowrap w-[387px]">
        <div className="flex flex-wrap gap-0.5 items-end w-full max-w-[387px]">
          <button className="gap-2.5 self-stretch py-1 pr-6 pl-2.5 text-indigo-300 max-md:pr-5">
            Mentor
          </button>
          <button className="gap-2.5 self-stretch py-1 pr-3 pl-2.5 text-white border-b-2 border-white">
            Courses
          </button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/579e33d63e2029996b266db60d7dbec7a690ba14?placeholderIfAbsent=true"
            className="object-contain aspect-[333.33] min-w-60 w-[387px]"
            alt="Navigation divider"
          />
        </div>
      </nav>
      <div className="overflow-hidden mt-9 w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex gap-4 justify-between items-start w-full max-md:max-w-full">
              <button className="flex justify-center items-center p-3 bg-slate-400 rounded-[100px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[42px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/c68242a9b1af8ba76d6c3016a98fa2f752d355da?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto w-5 aspect-square"
                  alt="Course icon"
                />
              </button>
              <CourseCard
                courseNumber="Course 1"
                title="Course Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="flex gap-4 items-start mt-5 w-full max-md:max-w-full">
              <div className="flex flex-1 shrink gap-4 justify-between items-start w-full basis-0 min-w-60 max-md:max-w-full">
                <button className="flex justify-center items-center p-3 bg-slate-400 rounded-[100px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[42px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/c47a9b8a19099ff348e9429ef814f1f1ccc21b79?placeholderIfAbsent=true"
                    className="object-contain self-stretch my-auto w-5 aspect-square"
                    alt="Course icon"
                  />
                </button>
                <CourseCard
                  courseNumber="Course 2"
                  title="Course Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-5 w-full min-h-0 max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
