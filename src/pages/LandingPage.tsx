
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/welcome");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Glass Toolbar */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-sm px-8 py-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
              alt="MindMatrix Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-slate-800">MindMatrix</span>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={handleRegister}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6"
            >
              Register at no cost
            </Button>
            <Button
              onClick={handleLogin}
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-50"
            >
              My Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Your Career Journey Starts Here
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Let MindMatrix guide you through your professional development with personalized career insights and opportunities.
          </p>
          <Button
            onClick={handleRegister}
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8"
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
