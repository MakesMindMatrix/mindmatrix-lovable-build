
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const EducationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    college: "",
    state: "",
    year: "",
    branch: ""
  });

  const handleValueChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with:", formData);
    navigate("/user-registration/input-details");
  };

  return (
    <div className="w-full max-w-[400px]">
      <form onSubmit={handleSubmit} className="w-full leading-none space-y-6">
        <FormSelect 
          label="College Name"
          placeholder="Select your college"
          value={formData.college}
          onValueChange={(value) => handleValueChange("college", value)}
        >
          <SelectItem value="iit">IIT</SelectItem>
          <SelectItem value="nit">NIT</SelectItem>
          <SelectItem value="bits">BITS</SelectItem>
        </FormSelect>

        <FormSelect 
          label="State / University"
          placeholder="Select your State"
          value={formData.state}
          onValueChange={(value) => handleValueChange("state", value)}
        >
          <SelectItem value="delhi">Delhi</SelectItem>
          <SelectItem value="mumbai">Mumbai</SelectItem>
          <SelectItem value="bangalore">Bangalore</SelectItem>
        </FormSelect>

        <FormSelect 
          label="Year of Study"
          placeholder="Select year"
          value={formData.year}
          onValueChange={(value) => handleValueChange("year", value)}
        >
          <SelectItem value="1">1st Year</SelectItem>
          <SelectItem value="2">2nd Year</SelectItem>
          <SelectItem value="3">3rd Year</SelectItem>
          <SelectItem value="4">4th Year</SelectItem>
        </FormSelect>

        <FormSelect 
          label="Branch / Specialization"
          placeholder="Select branch"
          value={formData.branch}
          onValueChange={(value) => handleValueChange("branch", value)}
        >
          <SelectItem value="cs">Computer Science</SelectItem>
          <SelectItem value="it">Information Technology</SelectItem>
          <SelectItem value="ec">Electronics</SelectItem>
        </FormSelect>

        <Button 
          type="submit" 
          className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 rounded-xl mt-6"
        >
          Sure thing!
        </Button>
      </form>
    </div>
  );
};

interface FormSelectProps {
  label: string;
  placeholder: string;
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}

const FormSelect = ({ label, placeholder, children, value, onValueChange }: FormSelectProps) => {
  return (
    <div className="w-full">
      <label className="block text-base text-white mb-2">{label}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="glass-input bg-white/10 backdrop-blur-sm border border-white/30 text-white">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {children}
        </SelectContent>
      </Select>
    </div>
  );
};

export default EducationForm;
