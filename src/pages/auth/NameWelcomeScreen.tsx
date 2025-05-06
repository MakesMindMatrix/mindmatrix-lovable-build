
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import { MessageContent } from "@/components/auth/chat/MessageContent";
import { useLocation, useNavigate } from "react-router-dom";

const NameWelcomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName } = location.state || { userName: "" };

  const handleContinue = () => {
    navigate("/education-info");
  };

  return (
    <AuthLayout>
      <MessageContent onContinue={handleContinue} userName={userName} />
    </AuthLayout>
  );
};

export default NameWelcomeScreen;
