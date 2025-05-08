
"use client";
import React from "react";
import Header from "@/components/shared/Header";
import { PasswordForm } from "@/components/auth/PasswordForm";
import AuthLayout from "@/components/auth/AuthLayout";

function Signup2() {
  return (
    <AuthLayout>
      <PasswordForm />
    </AuthLayout>
  );
}

export default Signup2;
