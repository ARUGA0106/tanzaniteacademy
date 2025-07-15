import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center text-primary-foreground">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Ukurasa Haujapatikana</h2>
        <p className="text-xl mb-8 opacity-80">
          Samahani, ukurasa unaotafuta haupo. Labda umetypo katika URL au ukurasa umehama.
        </p>
        <Button 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent-light text-lg px-8 py-4 rounded-full transition-smooth hover:scale-105"
          onClick={() => window.location.href = "/"}
        >
          <Home className="mr-2 h-5 w-5" />
          Rudi Nyumbani
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
