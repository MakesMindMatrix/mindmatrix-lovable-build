
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
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
      <Header />
      <section className="flex relative flex-col items-center px-20 pt-52 pb-28 mt-3 text-white min-h-[732px] rounded-[40px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
          alt="Background gradient"
          className="object-cover absolute inset-0 size-full rounded-[40px]"
        />
        <Outlet />
      </section>
    </main>
  );
};

export default Registration;
