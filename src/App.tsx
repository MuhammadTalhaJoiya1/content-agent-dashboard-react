import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import PromptBuilder from "./pages/PromptBuilder";
import BrandStyle from "./pages/BrandStyle";
import AIWriter from "./pages/AIWriter";
import SEOOptimizer from "./pages/SEOOptimizer";
import ImageVideo from "./pages/ImageVideo";
import VoiceoverStudio from "./pages/VoiceoverStudio";
import ContentHistory from "./pages/ContentHistory";
import TeamCollaboration from "./pages/TeamCollaboration";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Dashboard Routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="prompt" element={<PromptBuilder />} />
            <Route path="brand-style" element={<BrandStyle />} />
            <Route path="generate" element={<AIWriter />} />
            <Route path="seo" element={<SEOOptimizer />} />
            <Route path="image-video" element={<ImageVideo />} />
            <Route path="voiceover" element={<VoiceoverStudio />} />
            <Route path="history" element={<ContentHistory />} />
            <Route path="team" element={<TeamCollaboration />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
