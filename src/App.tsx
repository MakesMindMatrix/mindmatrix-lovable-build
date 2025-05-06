
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
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
import TasksToday from "./pages/dashboard/TasksToday";
import Login from "./pages/auth/Login";
import ProgramView from "./pages/dashboard/ProgramView";
import ProgramCourseLiveTutorial from "./pages/dashboard/ProgramView/ProgramCourseLiveTutorial";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  // Create a client inside the component
  const queryClient = new QueryClient();
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipPrimitive.Provider>
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
              <Route path="/dashboard-Day1" element={<ErrorBoundary><DashboardDay1 /></ErrorBoundary>} />
              <Route path="/dashboard-programs" element={<ErrorBoundary><Programs /></ErrorBoundary>} />
              <Route path="/dashboard-Tasks-Today" element={
                <ErrorBoundary>
                  <TasksToday />
                </ErrorBoundary>
              } />
              <Route path="/dashboard-programView" element={<ErrorBoundary><ProgramView /></ErrorBoundary>} />
              <Route path="/program-course-LiveTutorial" element={<ErrorBoundary><ProgramCourseLiveTutorial /></ErrorBoundary>} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipPrimitive.Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
