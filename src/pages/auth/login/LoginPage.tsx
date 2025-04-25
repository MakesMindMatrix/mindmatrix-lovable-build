
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl shadow-lg">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <LogoIcon className="w-8 h-8" />
          </div>

          <h1 className="text-2xl md:text-3xl text-center text-white font-normal">
            Welcome Back to <strong>MindMatrix</strong>, enter your username and
            password to continue.
          </h1>

          <form className="w-full space-y-6">
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />

            <PasswordField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <div className="flex items-center justify-between">
              <CheckboxField
                label="Remember Me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <button type="button" className="text-white/80 hover:text-white text-sm">
                Forgot Password?
              </button>
            </div>

            <LoginButton onClick={handleLogin} />
          </form>

          <p className="text-white text-center">
            Not registered yet? Create an account{" "}
            <button
              onClick={() => navigate("/welcome")}
              className="font-semibold underline hover:text-white/90"
            >
              SignUp
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
