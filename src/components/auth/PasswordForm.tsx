
import React, { useState } from "react";
import FormField from "./FormField";
import { useNavigate } from "react-router-dom";

const PasswordForm = () => {
  const [email] = useState("example@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/setup");
  };

  return (
    <div className="relative mb-0 max-w-full w-[456px] max-md:mb-2.5">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          alt="App icon"
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
        />
        <h2 className="self-stretch mt-7 text-3xl font-medium tracking-tight leading-10 text-center max-md:max-w-full">
          Got it! Now create a password to keep your journey safe with us.
        </h2>
        <form onSubmit={handleSubmit} className="mt-7 max-w-full w-[456px]">
          <FormField
            label="Email"
            value={email}
            onChange={() => {}}
            placeholder="example@gmail.com"
            type="email"
            readOnly
          />
          <FormField
            label="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Must be 8 characters"
            type="password"
          />
          <FormField
            label="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat password"
            type="password"
          />
          <button
            type="submit"
            className="overflow-hidden px-16 py-3 mt-9 w-full text-base leading-none text-center text-white bg-[#012fff] rounded-xl max-md:px-5"
          >
            All set <span className="font-semibold">Whats Next?</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
