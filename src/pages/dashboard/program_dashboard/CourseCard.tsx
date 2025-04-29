
import React from "react";

interface CourseCardProps {
  courseNumber: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseNumber,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col justify-center p-9 font-medium text-white bg-blue-400 rounded-3xl min-w-60 shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[388px] max-md:px-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <span className="gap-2.5 self-start px-2.5 py-1 text-xs leading-loose border border-white border-solid bg-white bg-opacity-0 rounded-[100px]">
            {courseNumber}
          </span>
          <h3 className="mt-2.5 text-xl leading-none">{title}</h3>
        </div>
        <p className="mt-4 text-base leading-5">{description}</p>
        <div className="flex flex-col justify-center mt-4 max-w-full text-sm leading-loose w-[158px]">
          <div className="flex gap-6 items-center w-full">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/8835df94b588dc38f6348408762bf546ec940e22?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Time icon"
              />
              <span className="self-stretch my-auto">2 Hours</span>
            </div>
            <span className="self-stretch my-auto">7 Sessions</span>
          </div>
        </div>
        <button className="gap-2.5 self-start px-5 py-3 mt-4 text-sm font-semibold leading-none text-center bg-white rounded-[100px] text-neutral-400">
          View Course
        </button>
      </div>
    </article>
  );
};

export default CourseCard;
