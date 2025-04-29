
import React from "react";
import { UnenrolledProgramCard as UnenrolledProgramCardType, getProgramTagColor, getProgramThemeColor } from "../types";
import { Badge } from "@/components/ui/badge";
import { BookmarkCheck, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProgramCardProps {
  program: UnenrolledProgramCardType;
}

const UnenrolledProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const navigate = useNavigate();
  const themeColorClass = getProgramThemeColor(program.program_tag);
  const tagColorClass = getProgramTagColor(program.program_tag);

  const handleViewProgram = () => {
    navigate("/dashboard-programView", {
      state: { program, isEnrolled: false }
    });
  };

  return (
    <div className={`flex flex-col w-full rounded-3xl overflow-hidden shadow-lg max-w-[340px] cursor-pointer`} onClick={handleViewProgram}>
      {/* Banner/Image Section */}
      <div className={`h-48 relative bg-gradient-to-r ${themeColorClass}`}>
        <img 
          src={program.program_image} 
          alt={program.program_title} 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <Badge 
          className={`absolute top-3 right-3 ${tagColorClass} text-white border border-white/70`}
        >
          {program.program_tag}
        </Badge>
      </div>
      
      {/* Content Section */}
      <div className={`bg-gradient-to-r ${themeColorClass} p-5 text-white flex-1`}>
        <h3 className="font-semibold text-xl mb-2">{program.program_title}</h3>
        <p className="text-white/80 text-sm mb-4 line-clamp-2">{program.program_description}</p>
        
        {/* Metadata */}
        <div className="flex justify-between text-sm mb-4">
          <div className="flex items-center gap-1">
            <BookmarkCheck className="w-4 h-4" />
            <span>{program.modules_count} Modules</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{program.duration_weeks} Weeks</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{program.views_count}</span>
          </div>
        </div>
        
        {/* Enroll Button */}
        <Button 
          className="w-full bg-white text-gray-800 hover:bg-white/90"
          onClick={(e) => {
            e.stopPropagation();
            // Enrollment functionality would go here
          }}
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default UnenrolledProgramCard;
