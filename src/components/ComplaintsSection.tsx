import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComplaintsSection = () => {
  const whatsappNumber = "5582999999999"; // Número para denúncias
  const whatsappMessage = encodeURIComponent("Olá, gostaria de fazer uma denúncia anônima.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Central de Denúncias
          </h2>
          <p className="text-muted-foreground text-lg">
            Denuncie de forma anônima e segura via WhatsApp
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
          <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <MessageCircle className="w-12 h-12 text-primary flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Denúncia Anônima
              </h3>
              <p className="text-muted-foreground mb-4">
                Suas denúncias são importantes para nossa comunidade. Entre em contato de forma segura e anônima.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar Denúncia via WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-secondary/5 rounded-lg border border-border">
            <Phone className="w-12 h-12 text-secondary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Contato Direto
              </h3>
              <p className="text-muted-foreground">
                Telefone: <span className="font-semibold text-foreground">(82) 9 9999-9999</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Atendimento de segunda a sexta, das 8h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintsSection;
