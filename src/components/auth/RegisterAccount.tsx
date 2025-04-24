
import Input from "@/components/shared/Input";
import { RegisterFormData, RegisterFormErrors } from "@/types/auth";

interface RegisterAccountProps {
  formData: RegisterFormData;
  errors: RegisterFormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterAccount = ({ formData, errors, onChange }: RegisterAccountProps) => {
  return (
    <div className="space-y-6">
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Create a password"
        value={formData.password}
        onChange={onChange}
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={onChange}
        error={errors.confirmPassword}
      />
    </div>
  );
};

export default RegisterAccount;
