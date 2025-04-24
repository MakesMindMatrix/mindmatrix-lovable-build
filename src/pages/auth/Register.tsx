
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import ProgressBar from "@/components/auth/ProgressBar";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const steps = [
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const currentFields = steps[currentStep].fields;
    const newErrors = { ...errors };
    let isValid = true;

    currentFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field as keyof typeof errors] = `${field} is required`;
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
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Submit the form
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <Input
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="p-6 bg-mindmatrix-accent rounded-lg">
              <h3 className="text-lg font-medium mb-4">Review your information</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Name:</span> {formData.firstName}{" "}
                  {formData.lastName}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mindmatrix-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-mindmatrix-primary mb-2">MindMatrix</h1>
          <p className="text-mindmatrix-dark">Unlock your cognitive potential</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-mindmatrix-border p-8">
          <h2 className="text-2xl font-semibold mb-6">{steps[currentStep].title}</h2>
          
          <ProgressBar
            currentStep={currentStep + 1}
            totalSteps={steps.length}
            className="mb-8"
          />

          <form className="space-y-8">
            {renderStepContent()}

            <div className="flex justify-between">
              {currentStep > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button
                type="button"
                onClick={handleNext}
              >
                {currentStep === steps.length - 1 ? "Complete" : "Continue"}
              </Button>
            </div>
          </form>
        </div>

        {currentStep === 0 && (
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-mindmatrix-primary font-medium hover:underline">
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
