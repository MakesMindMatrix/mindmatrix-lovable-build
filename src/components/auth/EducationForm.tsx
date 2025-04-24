
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with:", formData);
    navigate("/registration/input-details");
  };

  return (
    <div className="relative w-full max-w-[456px] p-6">
      <h2 className="text-3xl font-medium tracking-tight leading-10 text-white text-center mb-12 max-md:text-2xl">
        Tell us about your education
      </h2>
      <form onSubmit={handleSubmit} className="w-full leading-none space-y-9">
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
          className="w-full bg-blue-700 hover:bg-blue-600 glass-btn py-3"
        >
          All set <span className="font-semibold ml-1">What's Next?</span>
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
      <label className="text-base text-white mb-2 block">{label}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="mt-2 bg-transparent border-none text-indigo-300 shadow-[0px_1px_30px_rgba(69,42,124,0.1)] glass-input">
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
