
import React, { ReactNode } from "react";
import Header from "@/components/shared/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="flex overflow-hidden flex-col h-screen bg-white">
      <div className="px-8 pt-2.5 pb-2.5">
        <Header />
      </div>
      <div className="relative flex-1 flex items-center justify-center px-8">
        <div className="relative w-full h-full max-h-[780px] rounded-[40px] overflow-hidden flex items-center justify-center">
          {/* Background gradient */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
              alt="Background gradient"
              className="object-cover w-full h-full rounded-[40px]"
            />
          </div>

          {/* Back button */}
          <button
            onClick={handleBack}
            className="absolute left-8 top-8 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors z-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center max-w-[456px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
