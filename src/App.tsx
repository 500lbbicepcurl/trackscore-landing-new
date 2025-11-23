
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReduceRTO from "./pages/ReduceRTO";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyDataProtection from "./pages/PrivacyDataProtection";
import OneClickCheckoutTruth from "./pages/OneClickCheckoutTruth";
import FeaturesPage from "./pages/FeaturesPage";
import CustomPixelPage from "./pages/CustomPixelPage";
import CashflowPage from "./pages/CashflowPage";
import PincodePage from "./pages/PincodePage";
import SmartMetaPage from "./pages/SmartMetaPage";
import CustomAudiencePage from "./pages/CustomAudiencePage";
import RTOGPTPage from "./pages/RTOGPTPage";
import DecisionEnginePage from "./pages/DecisionEnginePage";
import SavingsCalculatorPage from "./pages/SavingsCalculatorPage";
import LiveAITestingPage from "./pages/LiveAITestingPage";
import Pricing from "./pages/Pricing";
import HumanVsAI from "./pages/HumanVsAI";
import Metrics from "./pages/Metrics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/custom-pixel" element={<CustomPixelPage />} />
          <Route path="/cashflow" element={<CashflowPage />} />
          <Route path="/pincode" element={<PincodePage />} />
          <Route path="/smart-meta" element={<SmartMetaPage />} />
          <Route path="/custom-audience" element={<CustomAudiencePage />} />
          <Route path="/rto-gpt" element={<RTOGPTPage />} />
          <Route path="/decision-engine" element={<DecisionEnginePage />} />
          <Route path="/savings-calculator" element={<SavingsCalculatorPage />} />
          <Route path="/live-ai-testing" element={<LiveAITestingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/human-vs-ai" element={<HumanVsAI />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/reduce-rto" element={<ReduceRTO />} />
          <Route path="/reduce-rto/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-data-protection" element={<PrivacyDataProtection />} />
          <Route path="/one-click-checkout-truth" element={<OneClickCheckoutTruth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
