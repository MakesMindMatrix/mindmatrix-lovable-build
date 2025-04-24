
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { RegisterFormData, RegisterFormErrors, RegisterStep } from "@/types/auth";

const REGISTER_STEPS: RegisterStep[] = [
  {
    title: "Create Account",
    fields: ["email", "password", "confirmPassword"],
  },
  {
    title: "Personal Information",
    fields: ["firstName", "lastName"],
  },
  {
    title: "Confirm Details",
    fields: [],
  },
];

export const useRegister = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const currentFields = REGISTER_STEPS[currentStep].fields;
    const newErrors = { ...errors };
    let isValid = true;

    currentFields.forEach((field) => {
      if (!formData[field as keyof RegisterFormData]) {
        newErrors[field as keyof RegisterFormErrors] = `${field} is required`;
        isValid = false;
      } else if (field === "email" && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      } else if (field === "password" && formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
        isValid = false;
      } else if (
        field === "confirmPassword" &&
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < REGISTER_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Account created!",
      description: "You have successfully registered.",
    });
    navigate("/onboarding");
  };

  return {
    currentStep,
    formData,
    errors,
    steps: REGISTER_STEPS,
    handleChange,
    handleNext,
    handleBack,
  };
};
