
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoIcon from "@/components/shared/LogoIcon";

const Index = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/welcome");
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 to-white">
      {/* Glass Toolbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4 py-3 bg-white/20 backdrop-blur-lg border-b border-white/30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center h-[23px] w-[38px]">
                <LogoIcon />
              </div>
              <h1 className="text-2xl font-semibold tracking-tighter text-slate-800">
                MindMatrix
              </h1>
            </div>
            <div className="flex gap-4">
              <Button
                onClick={handleRegister}
                className="flex items-center gap-2"
                variant="default"
              >
                <UserPlus className="h-4 w-4" />
                Register at no cost
              </Button>
              <Button
                className="flex items-center gap-2"
                variant="outline"
              >
                <LogIn className="h-4 w-4" />
                My Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Your Career Journey Starts Here
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Join MindMatrix and discover personalized career guidance powered by AI.
            Let us help you navigate your professional path with confidence.
          </p>
          <div className="mt-10">
            <Button
              onClick={handleRegister}
              className="text-lg px-8"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
