import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WelcomeScreen from "./pages/auth/WelcomeScreen";
import RegistrationLayout from "./pages/user-registration/RegistrationLayout";
import Signup from "./pages/user-registration/signup";
import Signup2 from "./pages/user-registration/signup2";
import SignupName from "./pages/user-registration/signup-name";
import EducationInfo from "./pages/user-registration/education-info";
import InputDetails from "./pages/user-registration/input-details";
import SkillScan from "./pages/auth/SkillScan";
import Guidance from "./pages/auth/Guidance";
import Questions from "./pages/auth/Questions";
import Completion from "./pages/auth/Completion";
import LoginPage from "./pages/auth/login/LoginPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* User Registration Flow */}
          <Route path="/user-registration" element={<RegistrationLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="signup2" element={<Signup2 />} />
            <Route path="signup-name" element={<SignupName />} />
            <Route path="education-info" element={<EducationInfo />} />
            <Route path="input-details" element={<InputDetails />} />
          </Route>

          <Route path="/skill-scan" element={<SkillScan />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
