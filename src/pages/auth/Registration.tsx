
import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "@/components/shared/Header";

const registrationFlow = [
  "/registration/signup",
  "/registration/signup2",
  "/registration/signup-name",
  "/registration/education-info",
  "/registration/input-details"
];

const Registration = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Redirect to first step if trying to access /registration directly
  if (currentPath === "/registration") {
    return <Navigate to="/registration/signup" replace />;
  }

  // Validate that we're on a valid registration step
  if (!registrationFlow.includes(currentPath)) {
    return <Navigate to="/registration/signup" replace />;
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="container mx-auto px-8 pt-2.5 pb-12 max-md:px-5">
        <Header />
        <section className="relative flex flex-col items-center mt-3 rounded-[40px] min-h-[732px] overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
            alt="Background gradient"
            className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
          />
          <div className="relative z-10 w-full flex justify-center items-center py-20">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Registration;
