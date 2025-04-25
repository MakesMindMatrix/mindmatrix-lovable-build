
import React from "react";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-[11px] text-[15px] font-medium leading-[129%] text-white bg-[#012FFF] rounded-[10px] text-center cursor-pointer hover:bg-[#012FFF]/90 transition-colors max-md:w-4/5 max-sm:w-[90%]"
    >
      Login
    </button>
  );
};

export default LoginButton;
