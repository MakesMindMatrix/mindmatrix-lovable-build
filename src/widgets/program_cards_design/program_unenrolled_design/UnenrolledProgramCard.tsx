
import React from "react";
import { BookmarkCheck, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UnenrolledProgramCard as UnenrolledProgramCardType, getProgramTagColor } from "../types";

interface ProgramCardProps {
  program: UnenrolledProgramCardType;
}

const UnenrolledProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const {
    program_image,
    program_title,
    program_description,
    program_tag,
    modules_count,
    duration_weeks,
    views_count,
  } = program;

  const tagColorClass = getProgramTagColor(program_tag);

  return (
    <Card className="flex flex-col justify-center pt-0 pb-4 w-full overflow-hidden rounded-3xl backdrop-blur-md bg-white/20 border border-white/30 transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={program_image} 
          alt={program_title} 
          className="w-full h-[160px] object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${tagColorClass} text-white border border-white/70`}
        >
          {program_tag}
        </Badge>
      </div>
      
      <CardContent className="p-5">
        <h2 className="text-2xl font-medium leading-8 text-white mb-4 line-clamp-1">{program_title}</h2>
        <p className="text-base text-white/90 mb-6 line-clamp-2">{program_description}</p>
        
        <div className="flex flex-wrap justify-between items-center mt-4 w-full">
          <div className="flex gap-1.5 items-center">
            <BookmarkCheck className="w-[22px] h-[22px] text-white" />
            <span className="text-sm font-medium text-white">
              {modules_count} Modules
            </span>
          </div>

          <div className="flex gap-1.5 items-center">
            <Clock className="w-[22px] h-[22px] text-white rounded-full" />
            <span className="text-sm font-medium text-white">
              {duration_weeks} Weeks
            </span>
          </div>

          <div className="flex gap-1.5 items-center">
            <Users className="w-[22px] h-[22px] text-white rounded-full" />
            <span className="text-sm font-medium text-white">
              {views_count}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnenrolledProgramCard;
