
import React from "react";
import { BookmarkCheck, Clock, Eye, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EnrolledProgramCard as EnrolledProgramCardType, getProgramTagColor } from "../types";

interface ProgramCardProps {
  program: EnrolledProgramCardType;
}

const EnrolledProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const {
    program_image,
    program_title,
    program_description,
    program_tag,
    modules_count,
    duration_weeks,
    views_count,
    progress_percent,
    completed_modules,
    in_progress_modules,
    earned_points,
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
        <p className="text-sm text-white/80 mb-3 line-clamp-2">{program_description}</p>
        
        <div className="mb-3">
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-white/80">Progress</span>
            <span className="text-white font-medium">{progress_percent}%</span>
          </div>
          <Progress 
            value={progress_percent} 
            className="h-2 bg-white/20"
          />
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-sm">
          <div className="flex items-center gap-1 text-white/70">
            <BookmarkCheck className="h-4 w-4" />
            <span>{modules_count} Modules</span>
          </div>
          <div className="flex items-center gap-1 text-white/70">
            <Clock className="h-4 w-4" />
            <span>{duration_weeks} Weeks</span>
          </div>
          <div className="flex items-center gap-1 text-white/70">
            <Eye className="h-4 w-4" />
            <span>{views_count} Views</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
          <div className="text-center">
            <p className="text-lg font-semibold text-white">{earned_points}</p>
            <p className="text-xs text-white/70">Points</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-white">{completed_modules}</p>
            <p className="text-xs text-white/70">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-white">{in_progress_modules}</p>
            <p className="text-xs text-white/70">In Progress</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnrolledProgramCard;
