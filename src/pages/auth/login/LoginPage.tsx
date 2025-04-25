
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import CheckboxField from "./CheckboxField";
import LoginButton from "./LoginButton";
import LogoIcon from "@/components/shared/LogoIcon";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("example@gmail.com");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login with:", { email, password, rememberMe });
  };

  return (
    <main className="flex relative justify-center items-center mx-auto w-full max-w-none h-screen bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f23640c294c87b94017d825ab00a9dcb7bbe4494?placeholderIfAbsent=true"
        alt="Background"
        className="absolute h-[88%] left-[2.5%] rounded-[40px] top-[6%] w-[95.5%]"
      />

      <section className="flex relative flex-col gap-7 items-center z-[1] max-md:w-4/5 max-sm:w-[90%]">
        {/* Logo Circle */}
        <div className="flex justify-center items-center bg-[#FF1616] rounded-full h-[68px] w-[68px] shadow-[0px_46.83px_12.83px_rgba(0,0,0,0),0px_30.151px_12.189px_rgba(0,0,0,0.01),0px_16.679px_10.264px_rgba(0,0,0,0.05),0px_7.698px_7.698px_rgba(0,0,0,0.09),0px_1.925px_3.849px_rgba(0,0,0,0.1)]">
          <LogoIcon />
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl tracking-tight leading-[129%] text-center text-white w-[633px] -tracking-[0.3px] font-normal max-md:text-2xl max-sm:text-xl max-md:w-full">
          Welcome Back to <strong>MindMatrix</strong>, enter your username and
          password to continue.
        </h1>

        {/* Form Container */}
        <form className="flex flex-col gap-[50px] items-start w-[456px] max-md:w-4/5 max-sm:w-[90%]">
          {/* Email Field */}
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />

          {/* Password Field */}
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center w-full">
            <CheckboxField
              label="Remember Me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <button
              type="button"
              className="text-[15px] font-semibold text-[#69ADE9]"
            >
              Forgot Password?
            </button>
          </div>
        </form>

        {/* Login Button */}
        <LoginButton onClick={handleLogin} />

        {/* Sign Up Prompt */}
        <p className="flex gap-[5px] items-center text-xl font-medium text-white">
          Not registered yet?{" "}
          <button 
            onClick={() => navigate("/welcome")}
            className="text-xl font-bold underline"
          >
            SignUp
          </button>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
