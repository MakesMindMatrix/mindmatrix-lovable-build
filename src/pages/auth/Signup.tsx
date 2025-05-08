
import React from "react";
import Header from "@/components/shared/Header";
import SignupForm from "@/components/auth/SignupForm";
import AuthLayout from "@/components/auth/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      {/* <NameInputForm
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
        onContinue={handleContinue}
      /> */}
      <section className="flex relative flex-col items-center px-20 pt-52 pb-28 mt-3 text-white min-h-[732px] rounded-[40px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <SignupForm />
      </section>
    </AuthLayout>
    // <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
    //   <Header />
    //   <section className="flex relative flex-col items-center px-20 pt-52 pb-28 mt-3 text-white min-h-[732px] rounded-[40px] max-md:px-5 max-md:py-24 max-md:max-w-full">
    //     <img
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
    //       alt="Background gradient"
    //       className="object-cover absolute inset-0 size-full rounded-[40px]"
    //     />
    //     <SignupForm />
    //   </section>
    // </main>
  );
};

export default Signup;
