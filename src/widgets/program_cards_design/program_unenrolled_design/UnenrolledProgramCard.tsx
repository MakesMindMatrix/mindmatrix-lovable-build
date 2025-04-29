
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
    <Card className="flex flex-col justify-center w-full overflow-hidden rounded-xl bg-white/10 border border-white/30 transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={program_image} 
          alt={program_title} 
          className="w-full h-[140px] object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${tagColorClass} text-white border border-white/70`}
        >
          {program_tag}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h2 className="text-lg font-medium text-white mb-2 line-clamp-1">{program_title}</h2>
        <p className="text-sm text-white/90 mb-4 line-clamp-2">{program_description}</p>
        
        <div className="flex flex-wrap justify-between items-center mt-2 w-full">
          <div className="flex gap-1 items-center">
            <BookmarkCheck className="w-[18px] h-[18px] text-white" />
            <span className="text-xs font-medium text-white">
              {modules_count} Modules
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <Clock className="w-[18px] h-[18px] text-white" />
            <span className="text-xs font-medium text-white">
              {duration_weeks} Weeks
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <Users className="w-[18px] h-[18px] text-white" />
            <span className="text-xs font-medium text-white">
              {views_count}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnenrolledProgramCard;
