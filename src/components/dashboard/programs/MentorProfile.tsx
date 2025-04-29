
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Award, Briefcase } from "lucide-react";

interface Mentor {
  name: string;
  role: string;
  avatar: string;
  experience: string;
  workHistory: string;
  expertise: string[];
  about: string;
}

interface MentorProfileProps {
  mentor: Mentor;
}

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor }) => {
  return (
    <div className="bg-gray-400/30 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <Avatar className="h-20 w-20 mr-4">
          <AvatarImage src={mentor.avatar} alt={mentor.name} />
          <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl text-white font-medium">{mentor.name}</h2>
          <p className="text-white/80">{mentor.role}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <Award className="h-5 w-5 text-white" />
          </div>
          <span className="text-white">{mentor.experience}</span>
        </div>
        
        <div className="flex items-center">
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-white">{mentor.workHistory}</span>
            <p className="text-white/70 text-sm">Work Experience</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg text-white mb-3">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill, index) => (
            <span 
              key={index} 
              className={`px-4 py-2 rounded-full text-white ${
                index === 0 ? 'bg-pink-500/70' : 
                index === 1 ? 'bg-green-500/70' : 
                'bg-blue-500/70'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg text-white mb-3">About</h3>
        <p className="text-white/90">{mentor.about}</p>
      </div>
    </div>
  );
};

export default MentorProfile;
