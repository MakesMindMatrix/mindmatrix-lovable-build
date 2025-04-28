
"use client";
import React from "react";
import { BackgroundGlow } from "./BackgroundGlow";

const InputDesign: React.FC = () => {
  return (
    <section className="relative w-full h-full min-h-[300px] overflow-hidden flex items-center justify-center">
      <BackgroundGlow />
      <div className="relative z-10 max-w-md w-full p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/60"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/60"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-white/30 bg-white/20 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-300 hover:text-blue-200">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white">
          Don{"'"}t have an account?{" "}
          <a href="#" className="font-medium text-blue-300 hover:text-blue-200">
            Sign up now
          </a>
        </p>
      </div>
    </section>
  );
};

export default InputDesign;
