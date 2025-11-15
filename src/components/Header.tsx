import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const categories = ["Política", "Economia", "Tecnologia", "Esportes", "Cultura", "Mundo"];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Pilar Em Foco" className="h-12 w-12 object-cover rounded-lg" />
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                <span className="text-foreground">Pilar </span>
                <span className="text-accent italic font-bold">Em </span>
                <span className="text-secondary font-black">FOCO</span>
              </h1>
              <p className="text-xs text-muted-foreground">Notícias em Tempo Real</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar notícias..." 
                className="pl-10 w-64 bg-background/50 border-accent/30 focus:border-accent"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-1 pb-3 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-sm font-semibold hover:text-accent hover:bg-accent/10 transition-colors"
            >
              {category}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
