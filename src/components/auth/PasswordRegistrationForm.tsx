
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PasswordRegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative mb-0 max-w-full w-[456px] max-md:mb-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
        alt="App icon"
        className="mx-auto object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
      />
      
      <h2 className="mt-7 text-3xl font-medium tracking-tight leading-10 text-center">
        Got it! Now create a password to keep your journey safe with us.
      </h2>

      <form className="mt-10 flex flex-col gap-[35px]">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[15px] font-medium">Email</label>
            <div className="relative">
              <Input
                type="email"
                placeholder="example@gmail.com"
                className="h-11 bg-white/20 border-none text-white placeholder:text-[#9bb4e8]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[15px] font-medium">Create a password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Must be 8 characters"
                className="h-11 bg-white/20 border-none text-white placeholder:text-[#9bb4e8] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/70 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[15px] font-medium">Confirm password</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Repeat password"
                className="h-11 bg-white/20 border-none text-white placeholder:text-[#9bb4e8] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-white/70 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="h-[41px] bg-[#012fff] hover:bg-[#012fff]/90 text-[15px]"
        >
          <span className="font-medium">All set </span>
          <span className="font-semibold">What's Next?</span>
        </Button>
      </form>
    </div>
  );
};

export default PasswordRegistrationForm;
