import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Pilar Em Foco" className="h-10 w-10 object-cover rounded-lg" />
              <div>
                <h3 className="font-black text-lg">
                  <span className="text-foreground">Pilar </span>
                  <span className="text-accent italic">Em </span>
                  <span className="text-secondary">FOCO</span>
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Portal de notícias comprometido com informação de qualidade e jornalismo responsável.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Editorias</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => console.log("Política")} className="text-muted-foreground hover:text-accent transition-colors">Política</button></li>
              <li><button onClick={() => console.log("Economia")} className="text-muted-foreground hover:text-accent transition-colors">Economia</button></li>
              <li><button onClick={() => console.log("Tecnologia")} className="text-muted-foreground hover:text-accent transition-colors">Tecnologia</button></li>
              <li><button onClick={() => console.log("Esportes")} className="text-muted-foreground hover:text-accent transition-colors">Esportes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => console.log("Sobre Nós")} className="text-muted-foreground hover:text-accent transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => console.log("Contato")} className="text-muted-foreground hover:text-accent transition-colors">Contato</button></li>
              <li><button onClick={() => console.log("Política de Privacidade")} className="text-muted-foreground hover:text-accent transition-colors">Política de Privacidade</button></li>
              <li><button onClick={() => console.log("Termos de Uso")} className="text-muted-foreground hover:text-accent transition-colors">Termos de Uso</button></li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Redes Sociais</h4>
            <div className="flex gap-3">
              <button onClick={() => window.open('https://facebook.com', '_blank')} className="h-10 w-10 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-accent" />
              </button>
              <button onClick={() => window.open('https://twitter.com', '_blank')} className="h-10 w-10 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-accent" />
              </button>
              <button onClick={() => window.open('https://instagram.com', '_blank')} className="h-10 w-10 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-accent" />
              </button>
              <button onClick={() => window.open('https://youtube.com', '_blank')} className="h-10 w-10 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5 text-accent" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Pilar Em Foco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
