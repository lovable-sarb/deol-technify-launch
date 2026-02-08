import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Deol Technify | AI-Powered Technology & Automation Solutions</title>
          <meta name="description" content="Deol Technify delivers cutting-edge technology and automation services — custom software development, AI agents, business automation, CRM solutions, WhatsApp API, and more." />
          <meta name="keywords" content="technology company, automation services, AI solutions, SaaS development, custom software, business automation, Zapier, n8n, WhatsApp API, Twilio, GoHighLevel, AI chatbots, AI agents" />
          <link rel="canonical" href="https://deoltechnify.com" />
          <meta property="og:title" content="Deol Technify | AI-Powered Technology & Automation Solutions" />
          <meta property="og:description" content="Advanced technology & automation company delivering scalable, AI-powered solutions for businesses worldwide." />
          <meta property="og:type" content="website" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
