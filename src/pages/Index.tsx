
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to registration page as there's no landing page
    navigate("/register", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-mindmatrix-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-mindmatrix-primary">MindMatrix</h1>
        <p className="text-xl text-mindmatrix-dark">Redirecting to registration...</p>
      </div>
    </div>
  );
};

export default Index;
