
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
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
        <h2 className="self-stretch mt-7 text-3xl font-medium tracking-tight leading-10 text-center text-white max-md:max-w-full">
          Got it! Now create a{" "}
          <em className="not-italic" style={{ fontStyle: "italic" }}>
            password
          </em>{" "}
          to keep your journey safe with us.
        </h2>
        {/* <div className="mt-7 max-w-full text-base leading-none w-[346px] space-y-5"> */}
          <div className="mt-7 items-stretch flex w-full flex-col space-y-5 max-md:max-w-full">
            <label
              htmlFor="email"
              className="text-base leading-none text-white max-md:max-w-full"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-4 h-10 px-4 py-3 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder-white"
            />
            {/* <div className="relative flex items-center w-full max-md:max-w-full">
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // mt-4 w-full text-base text-indigo-300 rounded-md max-md:max-w-full glass-input
                className="w-full mt-4 px-4 py-3 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder:text-white/70"
              />
            </div> */}
          </div>
          <div className="mt-7 items-stretch flex w-full flex-col space-y-5 max-md:max-w-full">
            <label
              htmlFor="password"
              className="text-base leading-none text-white max-md:max-w-full"
            >
              Password
            </label>
            {/* relative flex items-center w-full max-md:max-w-full */}
            <div className="relative flex items-center w-full max-md:max-w-full">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Must be 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 pr-10 px-4 py-3 text-base text-white rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder-white"
              />
              {/* <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Must be 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4 w-full text-base text-indigo-300 rounded-md max-md:max-w-full glass-input"
              /> */}
              <button
                type="button"
                // absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 focus:outline-none
                disabled={password.length === 0}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors focus:outline-none"
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

        <button
          type="submit"
          // w-full mt-64 px-16 py-3 text-base text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors
          className="mt-40 px-16 py-3 w-full text-base leading-none text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors"
        >
          All set! What's Next?
        </button>
        {/* </div> */}
      </div>
    </form>
  );
};
