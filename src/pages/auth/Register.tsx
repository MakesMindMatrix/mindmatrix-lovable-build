
import Button from "@/components/shared/Button";
import ProgressBar from "@/components/auth/ProgressBar";
import RegisterAccount from "@/components/auth/RegisterAccount";
import RegisterPersonal from "@/components/auth/RegisterPersonal";
import RegisterReview from "@/components/auth/RegisterReview";
import { useRegister } from "@/hooks/useRegister";

const Register = () => {
  const {
    currentStep,
    formData,
    errors,
    steps,
    handleChange,
    handleNext,
    handleBack,
  } = useRegister();

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <RegisterAccount
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        );
      case 1:
        return (
          <RegisterPersonal
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        );
      case 2:
        return <RegisterReview formData={formData} />;
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
