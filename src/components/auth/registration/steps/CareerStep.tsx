
import React from "react";
import { ChatStep } from "../ChatStep";
import CareerSelectionDropdown from "@/components/auth/CareerSelectionDropdown";

interface CareerStepProps {
  onContinue: () => void;
}

const CareerStep: React.FC<CareerStepProps> = ({ onContinue }) => {
  return (
    <ChatStep 
      title="What are your top 3 preferred career focuses?"
      avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
    >
      <div className="w-full space-y-4 mb-8">
        <div className="w-full mb-8">
          <label className="block text-base text-white mb-2">
            *Select Career Aspirations
          </label>
          <CareerSelectionDropdown
            label="Select your college"
            placeholder={true}
            iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
          />
        </div>
        <CareerSelectionDropdown
          label="Data Engineer (Highly Recommended)"
          selected={true}
          iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b9149760592d45d7599b59188f75085d79cf369d"
        />
        <CareerSelectionDropdown
          label="Select Career Focus"
          placeholder={true}
          iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
        />
        <CareerSelectionDropdown
          label="Select Career Focus"
          placeholder={true}
          iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
        />
      </div>
    </ChatStep>
  );
};

export default CareerStep;
