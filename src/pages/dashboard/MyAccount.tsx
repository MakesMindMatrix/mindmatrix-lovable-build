
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Desktop from "@/components/dashboard/day1/Desktop";

const MyAccount = () => {
  return (
    <Desktop>
      <div className="p-6 w-full max-w-7xl mx-auto">
        {/* Profile Header Section */}
        <div className="bg-blue-100/50 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Left section with avatar and info */}
            <div className="flex-1">
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24 border-4 border-white/30">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/cd1ba95f379203244c9e3f857b6fca3674f72f63" 
                    alt="Divyam V" 
                    className="h-full w-full object-cover"
                  />
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-medium text-white">Divyam V</h2>
                    <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-white/80">C/o+o.divyam.077@gmail.com</p>
                  <div>
                    <Badge className="bg-white/20 hover:bg-white/30 text-white text-xs">Working Professional</Badge>
                  </div>
                  <div className="pt-3">
                    <Button variant="outline" size="sm" className="bg-white text-blue-600 hover:bg-white/90">
                      Sync with LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right section with ZUNO card */}
            <div className="w-full md:w-80 lg:w-96">
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-4 shadow-lg relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-30"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/40 to-purple-500/40 filter blur-xl rounded-full transform translate-x-10 -translate-y-10"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-white font-medium">ZUNO BANK</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
                    </div>
                  </div>
                  
                  <p className="text-white text-lg tracking-widest font-mono mb-2">3234 1229 6234 3218</p>
                  <p className="text-white/70 text-xs mb-4">Valid till 08/2029</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-lime-400">500</span>
                      <span className="text-white text-sm ml-1">Career coins</span>
                    </div>
                  </div>
                </div>
                
                {/* Side indicators */}
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-lime-400 flex flex-col justify-between py-4">
                  <span className="text-xs font-bold text-black vertical-text">M</span>
                  <span className="text-xs font-bold text-black vertical-text">A</span>
                  <span className="text-xs font-bold text-black vertical-text">T</span>
                  <span className="text-xs font-bold text-black vertical-text">R</span>
                  <span className="text-xs font-bold text-black vertical-text">I</span>
                  <span className="text-xs font-bold text-black vertical-text">X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Me Section */}
        <Card className="bg-blue-100/50 backdrop-blur-md border-white/20 text-white mb-6 relative">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-xl font-medium">About me</h2>
            <Button variant="ghost" size="icon" className="text-white h-8 w-8">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-6">
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Card>
        
        {/* Education Section */}
        <Card className="bg-blue-100/50 backdrop-blur-md border-white/20 text-white mb-6">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-xl font-medium">Education</h2>
            <Button variant="ghost" size="icon" className="text-white h-8 w-8">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="divide-y divide-white/10">
            {/* School entry */}
            <div className="flex p-6 gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5802f9002d90883dc1bf0288d9022d0c1d7ecc53" 
                    alt="School logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium">School Name</h3>
                <p className="text-sm text-white/80">Bachelors in Arts</p>
                <p className="text-sm text-white/80">2024-2025</p>
                <p className="text-sm text-white/80">Bengaluru, Karnataka, India</p>
                <p className="text-sm text-white/80">CGPA: 3.8/4.0</p>
              </div>
            </div>
            
            {/* University entry */}
            <div className="flex p-6 gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a9ced579ea853ef0485d8fd0f7a0b584b4c4733c" 
                    alt="University logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium">University Name</h3>
                <p className="text-sm text-white/80">Bachelors in Computer Science</p>
                <p className="text-sm text-white/80">2024-2025</p>
                <p className="text-sm text-white/80">Bengaluru, Karnataka, India</p>
                <p className="text-sm text-white/80">CGPA: 3.8/4.0</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Work Experience Section */}
        <Card className="bg-blue-100/50 backdrop-blur-md border-white/20 text-white mb-6">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-xl font-medium">Work Experience</h2>
            <Button variant="ghost" size="icon" className="text-white h-8 w-8">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="divide-y divide-white/10">
            {/* First company */}
            <div className="flex p-6 gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5802f9002d90883dc1bf0288d9022d0c1d7ecc53" 
                    alt="Company logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium">Company Name</h3>
                <p className="text-sm text-white/80">Position</p>
                <p className="text-sm text-white/80">2024-2025</p>
                <p className="text-sm text-white/80">Bengaluru, Karnataka, India</p>
                <p className="text-sm text-white/80">Description</p>
              </div>
            </div>
            
            {/* Second company */}
            <div className="flex p-6 gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a9ced579ea853ef0485d8fd0f7a0b584b4c4733c" 
                    alt="Company logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium">Company Name 2</h3>
                <p className="text-sm text-white/80">Position</p>
                <p className="text-sm text-white/80">2024-2025</p>
                <p className="text-sm text-white/80">Bengaluru, Karnataka, India</p>
                <p className="text-sm text-white/80">Designation</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Skills Section */}
        <Card className="bg-blue-100/50 backdrop-blur-md border-white/20 text-white mb-6">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-xl font-medium">Skills</h2>
            <Button variant="ghost" size="icon" className="text-white h-8 w-8">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical Skills */}
              <div>
                <div className="mb-3">
                  <Badge className="bg-blue-200/20 text-white hover:bg-blue-200/30">Technical Skills</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="text-white/80">Python</li>
                  <li className="text-white/80">Machine Learning</li>
                  <li className="text-white/80">Data Analysis</li>
                  <li className="text-white/80">Java Script</li>
                </ul>
              </div>
              
              {/* Soft Skills */}
              <div>
                <div className="mb-3">
                  <Badge className="bg-blue-200/20 text-white hover:bg-blue-200/30">Soft Skills</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="text-white/80">Communication</li>
                  <li className="text-white/80">Teamwork</li>
                  <li className="text-white/80">Problem Solving</li>
                  <li className="text-white/80">Team Management</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Certification & Badges Section */}
        <Card className="bg-blue-100/50 backdrop-blur-md border-white/20 text-white mb-6">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-xl font-medium">Certification & Badges</h2>
            <Button variant="ghost" size="icon" className="text-white h-8 w-8">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-6">
            {/* Certifications */}
            <div className="mb-6">
              <div className="mb-3">
                <Badge className="bg-blue-200/20 text-white hover:bg-blue-200/30">Certification</Badge>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Python for Data Science</p>
                    <p className="text-sm text-white/70">Completed on March 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Deep Learning Fundamentals</p>
                    <p className="text-sm text-white/70">Completed on May 2024</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Badges */}
            <div>
              <div className="mb-3">
                <Badge className="bg-blue-200/20 text-white hover:bg-blue-200/30">Badges</Badge>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Data Specialist</p>
                    <p className="text-sm text-white/70">Received on March 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Task Completion Streak</p>
                    <p className="text-sm text-white/70">Received on May 2024</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Desktop>
  );
};

export default MyAccount;
