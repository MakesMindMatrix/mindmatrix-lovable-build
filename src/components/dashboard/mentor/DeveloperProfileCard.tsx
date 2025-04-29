
import React from "react";
import ExperienceItem from "./ExperienceItem";
import ExpertiseTag from "./ExpertiseTag";

interface MentorProps {
  name: string;
  role: string;
  avatar: string;
  experience: string;
  workHistory: string;
  expertise: string[];
  about: string;
}

const DeveloperProfileCard: React.FC<{ mentor: MentorProps }> = ({ mentor }) => {
  // Define background colors for expertise tags
  const bgColors = ["bg-pink-500/70", "bg-teal-600/70", "bg-indigo-500/70"];

  return (
    <article className="flex flex-col items-start py-9 pr-16 pl-9 rounded-3xl border border-solid border-white/20 min-w-60 shadow-[0px_1px_30px_rgba(69,42,124,0.1)] bg-gradient-to-r from-purple-800 to-indigo-900">
      <header className="flex gap-5 items-center font-medium text-white">
        <img
          src={mentor.avatar}
          alt={`${mentor.name} profile picture`}
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[68px]"
        />
        <div className="self-stretch my-auto w-[196px]">
          <h1 className="text-xl leading-none">{mentor.name}</h1>
          <p className="mt-1.5 text-base">{mentor.role}</p>
        </div>
      </header>

      <section className="flex flex-col mt-10 w-full max-w-[277px]">
        <ExperienceItem
          iconSrc="/lovable-uploads/6748724c-657b-4d8f-b64b-b0a8ddcd0535.png"
          title={mentor.experience.split(" ")[0]}
          subtitle={mentor.experience.split(" ").slice(1).join(" ")}
        />
        <ExperienceItem
          iconSrc="/lovable-uploads/ac462153-e730-4ad4-82db-b019514b8834.png"
          title={mentor.workHistory}
          subtitle="Work Experience"
          className="mt-5"
        />
      </section>

      <section className="mt-10 max-w-full font-medium text-white w-[221px]">
        <h2 className="text-xl leading-10">Areas of Expertise</h2>
        <div className="flex flex-col items-start mt-4 w-full text-base">
          {mentor.expertise.map((skill, index) => (
            <ExpertiseTag 
              key={index}
              text={skill}
              bgColor={bgColors[index % bgColors.length]}
              className={index > 0 ? "mt-2" : ""}
            />
          ))}
        </div>
      </section>

      <section className="self-stretch mt-10 w-full font-medium text-white">
        <h2 className="text-xl leading-10">About</h2>
        <p className="mt-4 text-base leading-5">
          {mentor.about}
        </p>
      </section>
    </article>
  );
};

export default DeveloperProfileCard;
