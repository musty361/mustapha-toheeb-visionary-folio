import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import EcommercePlatform from "./pages/EcommercePlatform";
import TaskManagement from "./pages/TaskManagement";
import SocialDashboard from "./pages/SocialDashboard";
import MobileBanking from "./pages/MobileBanking";
import LearningManagement from "./pages/LearningManagement";
import RealEstate from "./pages/RealEstate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo/ecommerce" element={<EcommercePlatform />} />
            <Route path="/demo/task-management" element={<TaskManagement />} />
            <Route path="/demo/social-dashboard" element={<SocialDashboard />} />
            <Route path="/demo/mobile-banking" element={<MobileBanking />} />
            <Route path="/demo/learning-management" element={<LearningManagement />} />
            <Route path="/demo/real-estate" element={<RealEstate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
