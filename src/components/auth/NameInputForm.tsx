
"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";

type NameInputFormProps = {
  avatarSrc: string;
  onContinue?: (name: string) => void;
};

const NameInputForm: React.FC<NameInputFormProps> = ({
  avatarSrc,
  onContinue,
}) => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (onContinue) {
      onContinue(firstName);
    }
    navigate("/user-registration/education-info");
  };

  return (
    <section className="flex flex-col justify-center items-center self-stretch py-16 my-auto font-medium min-w-60 w-full max-w-[456px] max-md:max-w-full">
      <div className="w-full max-w-[400px]">
        <div className="flex flex-col items-center w-full">
          <img
            src={avatarSrc}
            alt="Welcome avatar"
            className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
          />
          <h2 className="mt-7 text-3xl font-medium text-center text-white">
            Awesome! <br />
            What should i call you?
          </h2>
          
          <div className="mt-7 w-full">
            <label
              htmlFor="firstName"
              className="block text-base text-white mb-2"
            >
              First Name
            </label>
            <Input
              id="firstName"
              type="text"
              placeholder="Your preferred name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="glass-input w-full text-base text-white px-4 py-3 rounded-md"
            />
          </div>
          
          <Button
            onClick={handleContinue}
            className="w-full mt-10 bg-blue-700 hover:bg-blue-600 text-white text-base py-3 rounded-xl"
          >
            Let's continue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NameInputForm;
