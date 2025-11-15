import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleReadMore = () => {
    console.log("Lendo notícia principal");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background border-b border-accent/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,51,51,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/50 hover:bg-accent/30">
              DESTAQUE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Tecnologia transforma o futuro do <span className="text-accent">jornalismo digital</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Plataformas de notícias adotam inteligência artificial para entregar conteúdo personalizado e verificar informações em tempo real.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Publicado há 2 horas</span>
              </div>
              <Button 
                onClick={handleReadMore}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
              >
                Ler Mais
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-accent/30 shadow-[0_0_30px_rgba(0,217,255,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                alt="Notícia destaque"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
