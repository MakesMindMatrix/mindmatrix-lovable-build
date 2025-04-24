
import { RegisterFormData } from "@/types/auth";

interface RegisterReviewProps {
  formData: RegisterFormData;
}

const RegisterReview = ({ formData }: RegisterReviewProps) => {
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
};

export default RegisterReview;
