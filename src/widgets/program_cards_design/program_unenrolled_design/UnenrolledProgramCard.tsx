
import React from "react";
import { BookmarkCheck, Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UnenrolledProgramCard, getProgramTagColor } from "../types";

interface ProgramCardProps {
  program: UnenrolledProgramCard;
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
    <Card className="w-full max-w-[340px] overflow-hidden rounded-[20px] backdrop-blur-md bg-white/20 border border-white/30 transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={program_image} 
          alt={program_title} 
          className="w-full h-[160px] object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${tagColorClass} text-white`}
        >
          {program_tag}
        </Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg text-white mb-2 line-clamp-1">{program_title}</h3>
        <p className="text-sm text-white/80 mb-4 line-clamp-2">{program_description}</p>
        
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          <div className="flex items-center gap-1">
            <BookmarkCheck className="h-4 w-4" />
            <span>{modules_count} Modules</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration_weeks} Weeks</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{views_count} Views</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnenrolledProgramCard;
