
import React from "react";
import { BookmarkCheck, Clock, Users } from "lucide-react";

interface CourseHeaderProps {
  tag: string;
  title: string;
  description: string;
  coverImage: string;
  modules: number;
  weeks: number;
  enrollments: number;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
  tag,
  title,
  description,
  coverImage,
  modules,
  weeks,
  enrollments,
}) => {
  let tagBgColor = "bg-purple-500";
  
  if (tag === "Certification") {
    tagBgColor = "bg-green-500";
  } else if (tag === "Minor Degree") {
    tagBgColor = "bg-blue-500";
  }

  return (
    <header className="flex flex-col justify-center items-center pt-5 pb-4 -mb-px w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
      <div className="max-w-full w-[306px]">
        <div className="w-full text-base font-medium text-white">
          <div className="w-full">
            <figure className="overflow-hidden w-full whitespace-nowrap rounded-3xl">
              <div className="flex relative flex-col items-end pt-5 pr-7 pb-32 pl-8 w-full aspect-[1.522]">
                <img
                  src={coverImage}
                  alt={title}
                  className="object-cover absolute inset-0 size-full"
                />
                <span className={`relative gap-10 self-stretch mb-0 ${tagBgColor} rounded-3xl border border-white border-solid min-h-[38px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[71px] text-center py-1`}>
                  {tag}
                </span>
              </div>
            </figure>
            <h2 className="mt-4 text-xl leading-7 line-clamp-1">{title}</h2>
            <p className="mt-2 text-sm line-clamp-2">{description}</p>
          </div>
        </div>
        <CourseMetadata
          modules={modules}
          weeks={weeks}
          enrollments={enrollments}
        />
      </div>
    </header>
  );
};

interface CourseMetadataProps {
  modules: number;
  weeks: number;
  enrollments: number;
}

const CourseMetadata: React.FC<CourseMetadataProps> = ({
  modules,
  weeks,
  enrollments,
}) => {
  return (
    <div className="flex gap-5 items-center mt-6 w-full max-w-[306px]">
      <div className="flex gap-1.5 items-center self-stretch my-auto">
        <BookmarkCheck className="w-5 h-5" />
        <span className="self-stretch my-auto text-sm font-medium text-white">
          {modules} Modules
        </span>
      </div>
      <div className="flex gap-5 items-center self-stretch my-auto">
        <div className="flex gap-1.5 items-center self-stretch my-auto">
          <Clock className="w-5 h-5" />
          <span className="self-stretch my-auto text-sm font-medium text-white">
            {weeks} Weeks
          </span>
        </div>
        <div className="flex gap-1.5 items-center self-stretch my-auto text-sm font-medium text-white whitespace-nowrap">
          <Users className="w-5 h-5" />
          <span className="self-stretch my-auto">{enrollments}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
