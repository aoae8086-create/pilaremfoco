import { Search, Menu, X, Newspaper, Users, Shield, AlertTriangle, Handshake, Home, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
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
    <header className="border-b border-border bg-card/95 backdrop-blur-md sticky top-0 z-50">
      <div className="px-3 sm:px-4">
        {/* Mobile-first header */}
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Pilar Em Foco" className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg" />
            <div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight">
                <span className="text-foreground">Pilar </span>
                <span className="text-accent italic font-bold">Em </span>
                <span className="text-secondary font-black">FOCO</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Notícias em Tempo Real</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search bar - expandable */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="pb-3 animate-fade-in">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar notícias..." 
                className="pl-10 w-full bg-background/50 border-accent/30 focus:border-accent h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </form>
        )}

        {/* Mobile Menu - Full screen overlay */}
        {mobileMenuOpen && (
          <nav className="pb-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <Link key={item.url} to={item.url} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive(item.url) ? "default" : "outline"}
                    className={`w-full h-14 flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                      isActive(item.url) 
                        ? "bg-accent text-accent-foreground border-accent" 
                        : "hover:text-accent hover:border-accent/50 bg-card"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
