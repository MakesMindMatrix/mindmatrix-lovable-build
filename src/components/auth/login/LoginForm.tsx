
"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log({ email, password, rememberMe });
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
