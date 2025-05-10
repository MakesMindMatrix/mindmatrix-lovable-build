import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Main component
const ProfessionForm = () => {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();
  
  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle form submission
  const handleSubmit = () => {
    // console.log("Form submitted");
    navigate("/input-details");
    // Navigation would happen here in a real app
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center py-8 bg-transparent" >
      {/* w-full max-w-md mx-auto flex flex-col h-[600px] bg-opacity-80 rounded-xl shadow-lg */}
      {/* w-full max-w-md mx-auto */}
      <div className="w-full max-w-md mx-auto flex flex-col h-[625px]">
        <Typography sx={{"fontFamily": "Inter", "fontWeight": 500, "fontSize": "32px", "lineHeight": "129%", "letterSpacing": "-0.3px", "verticalAlign": "bottom", "color": "#fff", "textAlign": "center"}} className="mt-4 mb-2">
          Select your Profession
        </Typography>
        
        {/* Tabs */}
        <div className="flex mb-2 mt-3 w-full overflow-hidden gap-4 justify-center">
          <TabButton 
            active={activeTab === "student"} 
            onClick={() => handleTabChange("student")}
            label="College Student"
          />
          <TabButton 
            active={activeTab === "professional"} 
            onClick={() => handleTabChange("professional")}
            label="Working Professional"
          />
          <TabButton 
            active={activeTab === "jobseeker"} 
            onClick={() => handleTabChange("jobseeker")}
            label="Looking for a Job"
          />
        </div>
        
        {/* Form content */}
        {/* flex-1 overflow-y-auto px-2 py-3 */}
        {/* space-y-3 */}
        <div className="flex-1 overflow-y-auto px-4 scrollbar-hide">
          {activeTab === "student" && <StudentForm />}
          {activeTab === "professional" && <ProfessionalForm />}
          {activeTab === "jobseeker" && <JobSeekerForm />}
        </div>

        <div className="mt-4 mb-4 px-2">
            <button
            onClick={handleSubmit}
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-colors"
            >
            All set Whats Next?
            </button>
        </div>

        {/* <div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-colors mt-8"
          >
            All set Whats Next?
          </button>
        </div> */}
      </div>
    </div>
  );
};

// Tab Button Component
const TabButton = ({ active, onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`hover:bg-blue-700 flex-1 py-1 px-2 h-12 w-full text-center text-sm transition-colors rounded-lg ${
        active 
          ? "bg-blue-700 text-white" 
          : "bg-white/20 text-white backdrop-blur-sm"
      }`}
    >
      {label}
    </button>
  );
};

// Form Input Component
const FormInput = ({ label, type = "text", options, placeholder }) => {
  const [value, setValue] = useState("");
  
  return (
    <div className="mt-4">
      <label className=" text-white text-base">{label}</label>
      {type === "select" ? (
        <div className="relative">
          <select 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            // w-full mt-4 h-10 px-4 py-3 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder-white
            // w-full py-2 px-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-md appearance-none pr-10 placeholder-opacity-70
            className="w-full mt-2 h-10 px-3 py-2 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
            <option value="" disabled className="bg-blue-200 text-white">{placeholder || "Select option"}</option>
            {options?.map((option) => (
              <option key={option} value={option} className="bg-blue-600 text-white">
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-[-5.5px] top-[4.7px] flex items-center px-2 text-white">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        //   w-full mt-2 h-10 px-4 py-2 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder-white
        // w-full py-3 px-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-md placeholder-white placeholder-opacity-70
          className="w-full mt-2 h-10 px-3 py-2 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)]"
        />
      )}
    </div>
  );
};

// Student Form Component
const StudentForm = () => {
  return (
    <>
      <FormInput 
        label="College" 
        type="select" 
        options={["IIT", "NIT", "BITS", "Others"]} 
        placeholder="Select your college"
      />
      <FormInput 
        label="State" 
        type="select" 
        options={["Delhi", "Mumbai", "Bangalore", "Others"]} 
        placeholder="Select your state"
      />
      <FormInput 
        label="University" 
        type="select" 
        options={["IIT", "NIT", "BITS", "Others"]} 
        placeholder="Select your university"
      />
      <FormInput 
        label="Branch" 
        type="select" 
        options={["Computer Science", "IT", "Electronics", "Others"]} 
        placeholder="Select your branch"
      />
      <FormInput 
        label="Semester" 
        type="select" 
        options={["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]} 
        placeholder="Select your semester"
      />
      <FormInput 
        label="Degree" 
        type="select" 
        options={["Bachelor's", "Master's", "PhD"]} 
        placeholder="Select your degree"
      />
    </>
  );
};

// Professional Form Component
const ProfessionalForm = () => {
  return (
    <>
      <FormInput 
        label="University/College" 
        type="select" 
        options={["TCS", "Infosys", "Wipro", "Others"]} 
        placeholder="Select your current company"
      />
      <FormInput 
        label="Enter your company's website link" 
        placeholder="Enter company website link"
        options={["TCS", "Infosys", "Wipro", "Others"]}
      />
      <FormInput 
        label="Total years of experience" 
        type="select" 
        options={["0-2 Years", "2-5 Years", "5+ Years"]} 
        placeholder="Select number"
      />
      <FormInput 
        label="Current designation in your company" 
        placeholder="Current designation"
        options={["Developer", "QA Engineer", "Product Manager", "Others"]}
      />
    </>
  );
};

// Job Seeker Form Component
const JobSeekerForm = () => {
  return (
    <>
      <FormInput 
        label="Last Company" 
        type="select" 
        options={["TCS", "Infosys", "Wipro", "Others"]} 
        placeholder="Select your last company"
      />
      <FormInput 
        label="Last Role" 
        type="select" 
        options={["Developer", "QA Engineer", "Product Manager", "Others"]} 
        placeholder="Select your last role"
      />
      <FormInput 
        label="Education" 
        type="select" 
        options={["B.Tech", "M.Tech", "M.Sc", "Others"]} 
        placeholder="Select your education"
      />
      <FormInput 
        label="Preferred Role" 
        type="select" 
        options={["Developer", "QA Engineer", "Product Manager", "Others"]} 
        placeholder="Select your preferred role"
      />
      <FormInput 
        label="Location" 
        type="select" 
        options={["Bangalore", "Hyderabad", "Pune", "Others"]} 
        placeholder="Select your preferred location"
      />
    </>
  );
};

export default ProfessionForm;