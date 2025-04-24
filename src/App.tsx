
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WelcomeScreen from "./pages/auth/WelcomeScreen";
import Registration from "./pages/auth/Registration";
import Signup from "./pages/auth/Signup";
import Signup2 from "./pages/auth/Signup2";
import SignupName from "./pages/auth/SignupName";
import EducationInfo from "./pages/auth/EducationInfo";
import InputDetails from "./pages/auth/InputDetails";
import SkillScan from "./pages/auth/SkillScan";
import Guidance from "./pages/auth/Guidance";
import Questions from "./pages/auth/Questions";
import Completion from "./pages/auth/Completion";

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
          
          {/* Registration flow */}
          <Route path="/registration" element={<Registration />}>
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
          
          {/* Redirect old routes to new registration flow */}
          <Route path="/signup" element={<Navigate to="/registration/signup" replace />} />
          <Route path="/signup2" element={<Navigate to="/registration/signup2" replace />} />
          <Route path="/signup-name" element={<Navigate to="/registration/signup-name" replace />} />
          <Route path="/education-info" element={<Navigate to="/registration/education-info" replace />} />
          <Route path="/input-details" element={<Navigate to="/registration/input-details" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
