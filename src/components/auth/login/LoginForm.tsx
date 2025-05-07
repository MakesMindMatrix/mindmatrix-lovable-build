
"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import Button from "./Button";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate successful login
    navigate("/welcome-back");
  };

  const handleGoogleLogin = () => {
    // Simulate successful Google login
    navigate("/welcome-back");
  };

  return (
    <form className="self-center mt-7 max-w-full w-[456px]">
      <div className="w-full max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
          <FormInput
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-7">
            <FormInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex gap-10 justify-between items-center mt-7 w-full text-base min-h-[18px] max-md:max-w-full">
            <label className="flex gap-2.5 items-center self-stretch my-auto font-medium text-white cursor-pointer">
              <input
                type="checkbox"
                className="flex shrink-0 self-stretch my-auto bg-white rounded-sm h-[18px] w-[18px]"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember Me</span>
            </label>
            <button
              type="button"
              className="self-stretch my-auto font-semibold text-blue-400"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <Button onClick={handleLogin}>Login</Button>

        <div className="relative mt-5 flex items-center justify-center">
          <div className="h-px w-full bg-white/30"></div>
          <span className="absolute px-4 bg-blue-700/40 backdrop-blur-md text-white">or</span>
        </div>

        <button 
          type="button"
          onClick={handleGoogleLogin}
          className="flex justify-center items-center gap-3 mt-5 px-6 py-3 rounded-xl bg-white text-gray-700 font-medium transition hover:bg-gray-100"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.607 12.1761 14.9999 9.99984 14.9999C7.23868 14.9999 4.99984 12.7611 4.99984 9.99996C4.99984 7.2388 7.23868 4.99996 9.99984 4.99996C11.2744 4.99996 12.434 5.48079 13.3186 6.26621L15.6736 3.91121C14.1428 2.48746 12.1619 1.66663 9.99984 1.66663C5.39797 1.66663 1.6665 5.39809 1.6665 9.99996C1.6665 14.6018 5.39797 18.3333 9.99984 18.3333C14.6017 18.3333 18.3332 14.6018 18.3332 9.99996C18.3332 9.44121 18.2757 8.89579 18.1711 8.36788Z" fill="#FFC107"/>
            <path d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4341 5.48079 13.3187 6.26621L15.6737 3.91121C14.1429 2.48746 12.162 1.66663 9.99994 1.66663C6.74869 1.66663 3.9262 3.47371 2.62744 6.12121Z" fill="#FF3D00"/>
            <path d="M10 18.3334C12.1254 18.3334 14.0775 17.5392 15.5975 16.1642L13.0075 13.9859C12.1429 14.6484 11.0862 15.0001 10 15.0001C7.8362 15.0001 5.99787 13.6201 5.30537 11.6926L2.58203 13.7851C3.86453 16.4826 6.71537 18.3334 10 18.3334Z" fill="#4CAF50"/>
            <path d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9863L13.0079 13.9855L15.5979 16.1638C15.4046 16.3392 18.3333 14.1667 18.3333 10.0001C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z" fill="#1976D2"/>
          </svg>
          Continue with Google
        </button>

        <div className="flex gap-1.5 items-center self-center mt-5 text-xl max-md:max-w-full">
          <p className="self-stretch my-auto font-medium text-white">
            Not registered yet?
          </p>
          <button
            type="button"
            className="self-stretch my-auto font-semibold text-white underline"
          >
            SignUp
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
