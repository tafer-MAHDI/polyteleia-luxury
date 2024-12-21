import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import ProfessionalCategories from "./pages/ProfessionalCategories";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import WoodworkProjects from "./pages/WoodworkProjects";
import WoodworkProjectDetail from "./pages/WoodworkProjectDetail";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/professional-categories" element={<ProfessionalCategories />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/project-detail/:id" element={<ProjectDetail />} />
            <Route path="/woodwork-projects" element={<WoodworkProjects />} />
            <Route path="/woodwork-project/:id" element={<WoodworkProjectDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;