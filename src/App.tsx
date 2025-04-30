
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WelcomeScreen from "./pages/auth/WelcomeScreen";
import Signup from "./pages/auth/Signup";
import Signup2 from "./pages/auth/Signup2";
import SignupName from "./pages/auth/SignupName";
import EducationInfo from "./pages/auth/EducationInfo";
import InputDetails from "./pages/auth/InputDetails";
import SkillScan from "./pages/auth/SkillScan";
import Guidance from "./pages/auth/Guidance";
import Questions from "./pages/auth/Questions";
import Completion from "./pages/auth/Completion";
import NotFound from "./pages/NotFound";
import DashboardDay1 from "./pages/dashboard/Day1";
import Programs from "./pages/dashboard/Programs";
import Tasks from "./pages/dashboard/Tasks";
import Login from "./pages/auth/Login";
import ProgramView from "./pages/dashboard/ProgramView";
import ProgramCourseLiveTutorial from "./pages/dashboard/ProgramView/ProgramCourseLiveTutorial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/signup-name" element={<SignupName />} />
          <Route path="/education-info" element={<EducationInfo />} />
          <Route path="/input-details" element={<InputDetails />} />
          <Route path="/skill-scan" element={<SkillScan />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/dashboard-Day1" element={<DashboardDay1 />} />
          <Route path="/dashboard-programs" element={<Programs />} />
          <Route path="/dashboard-tasks" element={<Tasks />} />
          <Route path="/dashboard-programView" element={<ProgramView />} />
          <Route path="/program-course-LiveTutorial" element={<ProgramCourseLiveTutorial />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
