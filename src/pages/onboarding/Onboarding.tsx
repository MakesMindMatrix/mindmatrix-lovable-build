
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import StepIndicator from "@/components/onboarding/StepIndicator";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    goals: "",
    experience: "beginner",
    preferences: [],
    focusAreas: [],
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const steps = [
    "Welcome",
    "Goals",
    "Experience",
    "Preferences",
    "Focus Areas",
    "Complete",
  ];

  const experiences = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const preferenceOptions = [
    { value: "focus", label: "Improving Focus" },
    { value: "memory", label: "Memory Enhancement" },
    { value: "creativity", label: "Boosting Creativity" },
    { value: "stress", label: "Stress Reduction" },
    { value: "productivity", label: "Productivity" },
  ];

  const focusAreaOptions = [
    { value: "work", label: "Work Performance" },
    { value: "academic", label: "Academic Success" },
    { value: "personal", label: "Personal Growth" },
    { value: "wellness", label: "Mental Wellness" },
    { value: "relationships", label: "Relationships" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, experience: value }));
  };

  const handlePreferenceToggle = (value: string) => {
    setFormData((prev) => {
      const preferences = [...prev.preferences];
      if (preferences.includes(value)) {
        return { ...prev, preferences: preferences.filter((p) => p !== value) };
      } else {
        return { ...prev, preferences: [...preferences, value] };
      }
    });
  };

  const handleFocusAreaToggle = (value: string) => {
    setFormData((prev) => {
      const focusAreas = [...prev.focusAreas];
      if (focusAreas.includes(value)) {
        return { ...prev, focusAreas: focusAreas.filter((f) => f !== value) };
      } else {
        return { ...prev, focusAreas: [...focusAreas, value] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const completeOnboarding = () => {
    toast({
      title: "Onboarding complete!",
      description: "You're all set to start your MindMatrix journey.",
    });
    navigate("/dashboard");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Welcome
        return (
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-mindmatrix-primary">Welcome to MindMatrix</h1>
            <p className="text-lg">
              Let's set up your personalized cognitive enhancement experience.
              We'll ask you a few questions to tailor our platform to your needs.
            </p>
            <div className="pt-4">
              <Button
                onClick={handleNext}
                className="mx-auto flex items-center gap-2"
              >
                Get Started <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        );
      case 1: // Goals
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What are your main goals?</h2>
            <p className="text-gray-600">
              Tell us what you hope to achieve with MindMatrix.
            </p>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              placeholder="I want to improve my focus and productivity..."
              className="mindmatrix-input h-32 resize-none"
            />
          </div>
        );
      case 2: // Experience
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What's your experience level?</h2>
            <p className="text-gray-600">
              Select your experience with cognitive training techniques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {experiences.map((exp) => (
                <button
                  key={exp.value}
                  type="button"
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.experience === exp.value
                      ? "border-mindmatrix-primary bg-mindmatrix-accent"
                      : "border-mindmatrix-border hover:border-mindmatrix-secondary"
                  }`}
                  onClick={() => handleExperienceSelect(exp.value)}
                >
                  <div className="font-medium text-lg mb-1">{exp.label}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 3: // Preferences
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What are your preferences?</h2>
            <p className="text-gray-600">
              Select all the areas you're interested in (select at least one).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {preferenceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`p-4 rounded-lg border-2 transition-all flex justify-between items-center ${
                    formData.preferences.includes(option.value)
                      ? "border-mindmatrix-primary bg-mindmatrix-accent"
                      : "border-mindmatrix-border hover:border-mindmatrix-secondary"
                  }`}
                  onClick={() => handlePreferenceToggle(option.value)}
                >
                  <span className="font-medium">{option.label}</span>
                  {formData.preferences.includes(option.value) && (
                    <Check size={18} className="text-mindmatrix-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      case 4: // Focus Areas
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Choose your focus areas</h2>
            <p className="text-gray-600">
              What aspects of your life do you want to enhance?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {focusAreaOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`p-4 rounded-lg border-2 transition-all flex justify-between items-center ${
                    formData.focusAreas.includes(option.value)
                      ? "border-mindmatrix-primary bg-mindmatrix-accent"
                      : "border-mindmatrix-border hover:border-mindmatrix-secondary"
                  }`}
                  onClick={() => handleFocusAreaToggle(option.value)}
                >
                  <span className="font-medium">{option.label}</span>
                  {formData.focusAreas.includes(option.value) && (
                    <Check size={18} className="text-mindmatrix-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      case 5: // Complete
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold">You're all set!</h2>
            <p className="text-gray-600">
              We've personalized your MindMatrix experience based on your preferences.
            </p>
            <div className="pt-4">
              <Button
                onClick={completeOnboarding}
                className="mx-auto"
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-mindmatrix-background p-4">
      {currentStep > 0 && currentStep < steps.length - 1 && (
        <div className="w-full max-w-3xl mx-auto mt-8 mb-6">
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
          />
        </div>
      )}

      <div className="flex-grow flex items-center justify-center py-8">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-md border border-mindmatrix-border p-8">
          {renderStepContent()}

          {currentStep > 0 && currentStep < steps.length - 1 && (
            <div className="flex justify-between mt-12">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
              >
                Back
              </Button>
              
              <Button
                type="button"
                onClick={handleNext}
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
