import { Search, Menu, X, Newspaper, Users, Shield, AlertTriangle, Handshake, Home, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const menuItems = [
    { title: "Início", url: "/", icon: Home },
    { title: "Notícias", url: "/noticias", icon: Newspaper },
    { title: "Vereadores", url: "/vereadores", icon: Users },
    { title: "Ocorrências", url: "/ocorrencias", icon: Shield },
    { title: "Denúncias", url: "/denuncias", icon: AlertTriangle },
    { title: "Zoonoses", url: "/zoonoses", icon: Bug },
    { title: "Parcerias", url: "/parcerias", icon: Handshake },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
  };

  const isActive = (url: string) => location.pathname === url;

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Pilar Em Foco" className="h-12 w-12 object-cover rounded-lg" />
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                <span className="text-foreground">Pilar </span>
                <span className="text-accent italic font-bold">Em </span>
                <span className="text-secondary font-black">FOCO</span>
              </h1>
              <p className="text-xs text-muted-foreground">Notícias em Tempo Real</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative hidden lg:flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar notícias..." 
                className="pl-10 w-64 bg-background/50 border-accent/30 focus:border-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-1 pb-3 overflow-x-auto">
          {menuItems.map((item) => (
            <Link key={item.url} to={item.url}>
              <Button
                variant={isActive(item.url) ? "default" : "ghost"}
                className={`text-sm font-semibold transition-colors ${
                  isActive(item.url) 
                    ? "bg-accent text-accent-foreground" 
                    : "hover:text-accent hover:bg-accent/10"
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.title}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-3 space-y-1 animate-fade-in">
            {menuItems.map((item) => (
              <Link key={item.url} to={item.url} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive(item.url) ? "default" : "ghost"}
                  className={`w-full justify-start text-sm font-semibold transition-colors ${
                    isActive(item.url) 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:text-accent hover:bg-accent/10"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Button>
              </Link>
            ))}
            <form onSubmit={handleSearch} className="relative flex items-center pt-2">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar notícias..." 
                className="pl-10 w-full bg-background/50 border-accent/30 focus:border-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
