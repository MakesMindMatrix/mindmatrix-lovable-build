
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import SelectArrow from "../shared/SelectArrow";
import ChipSelect from "../shared/ChipSelect";

export const CareerAspirationForm: React.FC<{ onContinue: () => void }> = () => {
  const navigate = useNavigate();
  
  const [careerAspiration, setCareerAspiration] = useState("");

  const careeraspiration_options = [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Software Engineer",
  ]

  const careerinterests_options = [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Software Engineer",
  ]
  const handleContinue = () => {
    navigate("/skill-scan");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[456px] text-white">
      <div className="relative w-full max-w-md ">
        <label className="text-base block mb-2">
          Choose your Career Aspiration
        </label>
        <SelectArrow value={careerAspiration} setValue={setCareerAspiration} options={careeraspiration_options} />
      </div>
      
      <h2 className="mt-12 text-3xl tracking-tight text-center">
        What are your top 3 preferred career focuses?
      </h2>

      <div className="w-full mt-6">
        <ChipSelect options={careerinterests_options} />
      </div>
      {/* <div className="w-full mt-12 space-y-4">
        <div className="flex justify-between items-center w-full px-4 py-3 text-white rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
          <div>Data Engineer (Highly Recommended)</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b9149760592d45d7599b59188f75085d79cf369d?placeholderIfAbsent=true"
            className="w-[17px] aspect-[1.55] object-contain"
            alt="Selected option"
          />
        </div>
        
        <div className="flex justify-between items-center w-full px-4 py-3 text-indigo-300 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
          <div>Select Career Focus</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9?placeholderIfAbsent=true"
            className="w-[17px] aspect-[1.55] object-contain"
            alt="Dropdown arrow"
          />
        </div>
        
        <div className="flex justify-between items-center w-full px-4 py-3 text-indigo-300 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
          <div>Select Career Focus</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9?placeholderIfAbsent=true"
            className="w-[17px] aspect-[1.55] object-contain"
            alt="Dropdown arrow"
          />
        </div>
      </div> */}
      
      <button
        onClick={handleContinue}
        className="w-full mt-20 px-16 py-3 text-base text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors"
      >
        Exciting! <span className="font-semibold">Let's go</span>
      </button>
    </div>
  );
};

export default CareerAspirationForm;
