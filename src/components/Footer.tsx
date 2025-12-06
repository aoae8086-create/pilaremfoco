import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-8 sm:mt-16">
      <div className="px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and description */}
          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="Pilar Em Foco" className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-lg" />
              <div>
                <h3 className="font-black text-sm sm:text-lg">
                  <span className="text-foreground">Pilar </span>
                  <span className="text-accent italic">Em </span>
                  <span className="text-secondary">FOCO</span>
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Portal de notícias comprometido com informação de qualidade.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-accent text-sm sm:text-base">Editorias</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Política</button></li>
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Economia</button></li>
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Tecnologia</button></li>
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Esportes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-accent text-sm sm:text-base">Institucional</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Sobre Nós</button></li>
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Contato</button></li>
              <li><a href="/admin" className="text-muted-foreground hover:text-accent transition-colors">Área Admin</a></li>
              <li><button className="text-muted-foreground hover:text-accent transition-colors">Termos</button></li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-accent text-sm sm:text-base">Redes Sociais</h4>
            <div className="flex gap-2 sm:gap-3">
              <button onClick={() => window.open('https://facebook.com', '_blank')} className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent/10 hover:bg-accent/20 active:bg-accent/30 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </button>
              <button onClick={() => window.open('https://twitter.com', '_blank')} className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent/10 hover:bg-accent/20 active:bg-accent/30 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </button>
              <button onClick={() => window.open('https://instagram.com', '_blank')} className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent/10 hover:bg-accent/20 active:bg-accent/30 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </button>
              <button onClick={() => window.open('https://youtube.com', '_blank')} className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent/10 hover:bg-accent/20 active:bg-accent/30 border border-accent/30 flex items-center justify-center transition-colors" aria-label="Youtube">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2024 Pilar Em Foco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
