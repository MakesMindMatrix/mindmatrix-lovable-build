
import React from "react";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-0 py-3 w-full text-base font-medium leading-5 text-white bg-blue-700 rounded-xl text-center cursor-pointer hover:bg-blue-800 transition-colors max-md:w-4/5 max-sm:w-[90%]"
    >
      Login
    </button>
  );
};

export default LoginButton;
