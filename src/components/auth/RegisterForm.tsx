
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PasswordField from "./PasswordField";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[456px] space-y-6">
      <div className="flex flex-col items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          alt="App icon"
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
        />
        <h2 className="mt-7 text-3xl font-medium tracking-tight text-center">
          Let's get started
        </h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full"
          />
        </div>

        <PasswordField
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordField
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        Continue
      </Button>

      <p className="text-xl text-center">
        <span>Already have an account?</span>{" "}
        <button type="button" className="font-semibold underline">
          Log in
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
