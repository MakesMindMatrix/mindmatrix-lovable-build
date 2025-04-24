
import Input from "@/components/shared/Input";
import { RegisterFormData, RegisterFormErrors } from "@/types/auth";

interface RegisterPersonalProps {
  formData: RegisterFormData;
  errors: RegisterFormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterPersonal = ({ formData, errors, onChange }: RegisterPersonalProps) => {
  return (
    <div className="space-y-6">
      <Input
        label="First Name"
        name="firstName"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={onChange}
        error={errors.firstName}
      />
      <Input
        label="Last Name"
        name="lastName"
        placeholder="Enter your last name"
        value={formData.lastName}
        onChange={onChange}
        error={errors.lastName}
      />
    </div>
  );
};

export default RegisterPersonal;
