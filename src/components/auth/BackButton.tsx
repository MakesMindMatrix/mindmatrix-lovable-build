
import React from "react";
import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  onClick?: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(-1);
  };

  return (
    <button
      onClick={handleClick}
      className="self-stretch pt-10 my-auto text-lg font-semibold tracking-tight leading-none text-white whitespace-nowrap pb-[642px] w-[50px] max-md:hidden max-md:pb-24"
      aria-label="Go back"
    >
      <div className="overflow-hidden px-4 bg-blue-700 h-[50px] rounded-[100px] w-[50px]">
        􀄪
      </div>
    </button>
  );
};

export default BackButton;
