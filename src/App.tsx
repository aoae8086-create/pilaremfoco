import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Index from "./pages/Index";
import Noticias from "./pages/Noticias";
import Vereadores from "./pages/Vereadores";
import Ocorrencias from "./pages/Ocorrencias";
import Denuncias from "./pages/Denuncias";
import Parcerias from "./pages/Parcerias";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/noticias" element={<MainLayout><Noticias /></MainLayout>} />
          <Route path="/vereadores" element={<MainLayout><Vereadores /></MainLayout>} />
          <Route path="/ocorrencias" element={<MainLayout><Ocorrencias /></MainLayout>} />
          <Route path="/denuncias" element={<MainLayout><Denuncias /></MainLayout>} />
          <Route path="/parcerias" element={<MainLayout><Parcerias /></MainLayout>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
