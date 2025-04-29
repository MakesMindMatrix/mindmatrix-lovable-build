
import React from "react";
import CourseProgressCard from "./CourseProgressCard";

const CurrentlyViewingSection = () => {
  return (
    <section className="min-w-60 w-[346px]">
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-3.5 items-center self-start text-xl font-semibold leading-10 text-white">
            <div className="flex shrink-0 self-stretch my-auto w-2.5 bg-indigo-300 rounded-md h-[26px]" />
            <h2 className="self-stretch my-auto">Currently Viewing</h2>
          </div>
          <div className="mt-5 w-full">
            <CourseCard />
            <CourseProgressCard />
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseCard = () => {
  return (
    <article className="flex flex-col justify-center items-center pt-5 pb-4 w-full bg-orange-400 rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
      <div className="max-w-full w-[306px]">
        <div className="w-full text-base font-medium text-white">
          <div className="w-full">
            <div className="overflow-hidden w-full whitespace-nowrap bg-red-600 rounded-3xl">
              <div className="flex relative flex-col items-end px-8 pt-3 pb-24 w-full aspect-[2.082] max-md:pl-5">
                <img
                  src="/lovable-uploads/436d916f-15b4-47b7-a586-6e09a9c7e3f2.png"
                  className="object-cover absolute inset-0 size-full"
                  alt="Course background"
                />
                <span className="relative px-4 py-1 bg-orange-500/80 backdrop-blur-sm text-white rounded-full">
                  AEC
                </span>
              </div>
            </div>
            <h3 className="mt-4 text-2xl leading-8">
              Introduction to Circuit Design
            </h3>
            <p className="mt-4">
              Learn the core technologies that power the web. this course covers
              everything from basic Learn the core technologies that power the
              web. this course covers everything from basic,
            </p>
          </div>
        </div>
        <div className="flex gap-10 items-center mt-11 w-full max-w-[306px] max-md:mt-10">
          <div className="flex gap-1.5 items-center self-stretch my-auto">
            <div className="flex gap-2 items-start self-stretch my-auto w-[22px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ff1e5ea7c6f9adefcb8b1e3055f86b15b07ac7a6?placeholderIfAbsent=true"
                className="object-contain aspect-square w-[22px]"
                alt="Modules icon"
              />
            </div>
            <span className="self-stretch my-auto text-sm font-medium text-white">
              12 Modules
            </span>
          </div>
          <div className="flex gap-5 items-center self-stretch my-auto">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <div className="flex gap-2 items-start self-stretch my-auto w-[22px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/2f3c868cb25946159c3e78ec561917843593e5d4?placeholderIfAbsent=true"
                  className="object-contain aspect-square rounded-[169px] w-[22px]"
                  alt="Duration icon"
                />
              </div>
              <span className="self-stretch my-auto text-sm font-medium text-white">
                8 Weeks
              </span>
            </div>
            <div className="flex gap-1.5 items-center self-stretch my-auto text-sm font-medium text-white whitespace-nowrap">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/4cf6064d0d97531f147bbd4fbccbf1371d8b8d77?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[169px] w-[22px]"
                alt="Students icon"
              />
              <span className="self-stretch my-auto">280</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CurrentlyViewingSection;
