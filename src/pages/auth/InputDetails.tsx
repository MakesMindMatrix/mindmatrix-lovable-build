
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import CareerAspirationForm from "@/components/auth/CareerAspirationForm";

function InputDetails() {
  const handleContinue = () => {
    console.log("Continuing to skill scan");
  };

  return (
    <AuthLayout>
      <CareerAspirationForm onContinue={() => handleContinue()} />
    </AuthLayout>
  );
}

export default InputDetails;
