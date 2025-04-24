"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PasswordForm: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
      });
      return;
    }
    toast({
      title: "All set!",
      description: "You can now continue to the next step.",
    });
    navigate("/signup-name");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mb-0 max-w-full w-[456px] max-md:mb-2.5"
    >
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          alt="App icon"
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
        />
        <h2 className="self-stretch mt-7 text-3xl font-medium tracking-tight leading-10 text-center max-md:max-w-full">
          Choose a{" "}
          <em className="not-italic" style={{ fontStyle: "italic" }}>
            strong
          </em>{" "}
          password
        </h2>
        <div className="mt-7 max-w-full text-base leading-none w-[346px]">
          <div className="items-stretch flex w-full flex-col max-md:max-w-full">
            <label
              htmlFor="password"
              className="text-base leading-none text-white max-md:max-w-full"
            >
              Password
            </label>
            <div className="relative flex items-center w-full max-md:max-w-full">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4 w-full text-base text-indigo-300 rounded-md max-md:max-w-full"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="items-stretch flex mt-5 w-full flex-col max-md:max-w-full">
            <label
              htmlFor="confirmPassword"
              className="text-base leading-none text-white max-md:max-w-full"
            >
              Confirm Password
            </label>
            <div className="relative flex items-center w-full max-md:max-w-full">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Retype your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-4 w-full text-base text-indigo-300 rounded-md max-md:max-w-full"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-20 px-16 py-3 w-full text-base leading-none text-center text-white bg-blue-700 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          All set
        </button>
      </div>
    </form>
  );
};
