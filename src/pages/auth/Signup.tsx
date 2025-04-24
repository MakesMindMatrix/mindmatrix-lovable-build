
import React from "react";
import Header from "@/components/shared/Header";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white min-h-screen max-md:px-5">
      <Header />
      <section 
        className="flex relative flex-col items-center px-5 pt-20 pb-20 mt-3 text-white min-h-[732px] rounded-[40px]"
        style={{
          background: "linear-gradient(135deg, #4C35DE 0%, #9283FC 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <SignupForm />
      </section>
    </main>
  );
};

export default Signup;
