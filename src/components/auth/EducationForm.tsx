
import React from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const EducationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Will add navigation to next route when ready
    console.log("Form submitted");
  };

  return (
    <div className="self-stretch pt-40 pb-20 my-auto font-medium min-w-60 w-[456px] max-md:pt-24 max-md:max-w-full">
      <form onSubmit={handleSubmit} className="w-full leading-none max-md:max-w-full space-y-9">
        <FormSelect 
          label="College Name"
          placeholder="Select your college"
        >
          <SelectItem value="iit">IIT</SelectItem>
          <SelectItem value="nit">NIT</SelectItem>
          <SelectItem value="bits">BITS</SelectItem>
        </FormSelect>

        <FormSelect 
          label="State / University"
          placeholder="Select your State"
        >
          <SelectItem value="delhi">Delhi</SelectItem>
          <SelectItem value="mumbai">Mumbai</SelectItem>
          <SelectItem value="bangalore">Bangalore</SelectItem>
        </FormSelect>

        <FormSelect 
          label="Year of Study"
          placeholder="Select year"
        >
          <SelectItem value="1">1st Year</SelectItem>
          <SelectItem value="2">2nd Year</SelectItem>
          <SelectItem value="3">3rd Year</SelectItem>
          <SelectItem value="4">4th Year</SelectItem>
        </FormSelect>

        <FormSelect 
          label="Branch / Specialization"
          placeholder="Select branch"
        >
          <SelectItem value="cs">Computer Science</SelectItem>
          <SelectItem value="it">Information Technology</SelectItem>
          <SelectItem value="ec">Electronics</SelectItem>
        </FormSelect>

        <Button 
          type="submit" 
          className="w-full bg-blue-700 hover:bg-blue-600"
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
}

const FormSelect = ({ label, placeholder, children }: FormSelectProps) => {
  return (
    <div className="w-full max-md:max-w-full">
      <label className="text-base text-white max-md:max-w-full">{label}</label>
      <Select>
        <SelectTrigger className="mt-4 bg-transparent border-none text-indigo-300 shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
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
